/**
 * Eleshiba & Suraj — RSVP → Google Sheets
 * Improvements over the original:
 *   • LockService prevents two simultaneous RSVPs from racing the duplicate
 *     check and writing the same row twice.
 *   • doGet() health endpoint: visiting the Web App URL now returns a friendly
 *     JSON status so you can confirm the deployment works.
 * Everything else (shared-secret auth, idempotent duplicate detection,
 * auto-created sheet with frozen headers, input sanitisation) is unchanged.
 */

const SHEET_NAME = 'RSVP Responses';
const HEADERS = [
  'Submitted At',
  'Name',
  'Attending',
  'Party Size',
  'Note',
  'Submission ID',
  'Source',
  'User Agent',
  'IP'
];

function doGet() {
  return json({ ok: true, service: 'eleshiba-suraj-wedding RSVP', status: 'live' });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000); // wait up to 15s for any in-progress write to finish
  } catch (err) {
    return json({ ok: false, error: 'Server busy, please retry.' });
  }

  try {
    const payload = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    const expectedSecret = PropertiesService.getScriptProperties().getProperty('RSVP_SHARED_SECRET');

    if (expectedSecret && payload.secret !== expectedSecret) {
      return json({ ok: false, error: 'Unauthorized' });
    }

    const submissionId = sanitize(payload.submissionId, 120);
    if (!submissionId) return json({ ok: false, error: 'Missing submission id' });

    const sheet = getSheet();
    ensureHeaders(sheet);

    if (isDuplicate(sheet, submissionId)) {
      return json({ ok: true, duplicate: true, id: submissionId });
    }

    sheet.appendRow([
      sanitize(payload.submittedAt, 40) || new Date().toISOString(),
      sanitize(payload.name, 80),
      sanitize(payload.attending, 10),
      sanitize(payload.party, 10),
      sanitize(payload.note, 500),
      submissionId,
      sanitize(payload.source, 80),
      sanitize(payload.userAgent, 300),
      sanitize(payload.ip, 80)
    ]);

    return json({ ok: true, id: submissionId });
  } catch (error) {
    return json({ ok: false, error: 'Unable to save RSVP' });
  } finally {
    lock.releaseLock();
  }
}

function getSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
}

function ensureHeaders(sheet) {
  if (sheet.getLastRow() > 0) return;
  sheet.appendRow(HEADERS);
  sheet.setFrozenRows(1);
}

function isDuplicate(sheet, submissionId) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return false;
  const ids = sheet.getRange(2, 6, lastRow - 1, 1).getValues().flat();
  return ids.includes(submissionId);
}

function sanitize(value, maxLength) {
  return String(value || '').trim().slice(0, maxLength);
}

function json(body) {
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
