const ALLOWED_PARTY_SIZES = new Set(['1', '2', '3', '4', '5+']);

function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

function clean(value, maxLength) {
  return String(value || '').trim().slice(0, maxLength);
}

function validate(payload) {
  const name = clean(payload.name, 80);
  const note = clean(payload.note, 500);
  const attending = payload.attending === 'no' ? 'no' : 'yes';
  const party = ALLOWED_PARTY_SIZES.has(String(payload.party)) ? String(payload.party) : '1';
  const submissionId = clean(payload.submissionId, 120);

  if (payload.type !== 'rsvp') return { error: 'Invalid submission type.' };
  if (name.length < 2) return { error: 'Please enter your name.' };
  if (!submissionId) return { error: 'Missing submission id.' };

  return {
    value: {
      type: 'rsvp',
      name,
      attending,
      party,
      note,
      submissionId,
      submittedAt: new Date().toISOString()
    }
  };
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return sendJson(res, 405, { ok: false, error: 'Method not allowed.' });
  }

  const endpoint = process.env.GOOGLE_APPS_SCRIPT_URL;
  if (!endpoint) {
    return sendJson(res, 503, {
      ok: false,
      error: 'RSVP storage is not configured.'
    });
  }

  const parsed = validate(req.body || {});
  if (parsed.error) return sendJson(res, 400, { ok: false, error: parsed.error });

  const forwarded = {
    ...parsed.value,
    source: 'eleshiba-suraj-wedding',
    userAgent: clean(req.headers['user-agent'], 300),
    ip:
      clean(req.headers['x-forwarded-for'], 120).split(',')[0] ||
      clean(req.socket && req.socket.remoteAddress, 120)
  };

  if (process.env.RSVP_SHARED_SECRET) {
    forwarded.secret = process.env.RSVP_SHARED_SECRET;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(forwarded),
      signal: controller.signal
    });
    const text = await response.text();
    let data = {};
    try {
      data = text ? JSON.parse(text) : {};
    } catch (_) {
      data = {};
    }
    if (!response.ok || data.ok === false) {
      throw new Error(data.error || 'Google Sheets rejected the RSVP.');
    }
    return sendJson(res, 200, { ok: true, id: forwarded.submissionId });
  } catch (error) {
    return sendJson(res, 502, {
      ok: false,
      error: error.name === 'AbortError' ? 'RSVP storage timed out.' : 'Unable to save RSVP right now.'
    });
  } finally {
    clearTimeout(timeout);
  }
};
