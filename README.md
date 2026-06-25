# Eleshiba & Suraj — Wedding Website

A cinematic, single-page wedding experience built in the **Heirloom Modern**
design direction. Pure static site — no build step, no framework, no dependencies.

> _"Two lives, one beautiful beginning."_ · 24–25 November 2026 · Amritsar, Punjab

---

## Project Overview

A luxury wedding website designed to feel like a short film rather than an
invitation. Guests scroll through a dark, cinematic hero, the couple's love
story told in chapters, a live countdown, the event schedule, a photo gallery,
and an RSVP + guestbook. All content lives in a single `CONFIG` object in
`script.js`, so anything can be updated without touching the design.

---

## Features

- **Cinematic hero** — name reveal, drawing gold thread, slow Ken Burns motion
- **Live countdown** to the wedding day (flips to a celebration state at zero)
- **Our Story** — 5 scroll-revealed chapters
- **Meet the couple** — feature portrait + dual bios
- **Two families** — elegant typographic family section joined by the gold thread
- **Timeline** — all 6 events (Haldi, Mehendi, Sangeet, Christian Wedding,
  Reception, Hindu Wedding) with *Add to calendar* and *Directions* links
- **Gallery** — 14 optimized photos with a tap-to-expand lightbox
- **Venue & travel** — real addresses with Google Maps links
- **RSVP** — conversational form with a WhatsApp fallback
- **Guestbook** — leave-a-blessing wall
- **Premium polish** — 6 lightweight CSS/IntersectionObserver animations,
  mobile-first responsive, reduced-motion support, keyboard focus states,
  SEO + Open Graph tags, all images graded and compressed (~5 MB total)

---

## Deployment Instructions

### Deploy to Vercel (recommended)

**Option A — Git (auto-deploys on every push)**
1. Push this repo to GitHub (see below).
2. In Vercel: **Add New → Project → Import** your `eleshiba-suraj-wedding` repo.
3. Framework Preset: **Other** · leave the build command blank.
4. Click **Deploy**. Every future push to `main` redeploys automatically.

**Option B — Drag & drop**
1. Go to https://vercel.com/drop
2. Drag the project folder onto the page → **Deploy**.

### Push this repo to GitHub
```bash
git init
git add .
git commit -m "Initial production-ready wedding website"
git branch -M main
# Using GitHub CLI:
gh repo create eleshiba-suraj-wedding --public --source=. --remote=origin --push
# Or, if the empty repo already exists on github.com:
# git remote add origin https://github.com/<your-username>/eleshiba-suraj-wedding.git
# git push -u origin main
```

---

## Folder Structure
```
eleshiba-suraj-wedding/
├── index.html          # Page structure
├── styles.css          # All styling + the 6-animation system
├── script.js           # Content (CONFIG) + all interactions
├── README.md           # This file
├── vercel.json         # Static config + long-cache headers for /assets
├── .gitignore
└── assets/
    ├── hero.jpg            # Cinematic hero background
    ├── couple.jpg          # Couple feature portrait
    ├── og.jpg              # Social / WhatsApp link preview (1200×630)
    ├── monogram.png        # E & S monogram (loader + favicon)
    ├── venue.jpg           # Venue ambiance image
    ├── story-1.jpg … story-5.jpg     # One per story chapter
    └── gallery-1.jpg … gallery-14.jpg # Gallery photos
```

---

## Editing Content

Open `script.js` and edit the `CONFIG` object at the top — names, dates, story,
family, events, gallery, WhatsApp number. No other file needs changing.

## RSVP Storage

RSVP submissions are saved through the Vercel Serverless Function at
`/api/rsvp`. The browser posts to that same-origin endpoint; the endpoint
validates the payload and forwards it to a private Google Apps Script web app
that appends rows to Google Sheets.

Required Vercel environment variables:

```bash
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/.../exec
RSVP_SHARED_SECRET=choose-a-long-random-secret
```

Google Sheets setup:

1. Create a Google Sheet.
2. Open **Extensions → Apps Script**.
3. Paste `google-apps-script/rsvp-to-sheets.gs`.
4. In Apps Script, open **Project Settings → Script properties** and add the
   same `RSVP_SHARED_SECRET` value used in Vercel.
5. Deploy as **Web app**.
6. Set **Execute as:** Me.
7. Set **Who has access:** Anyone.
8. Copy the `/exec` URL into Vercel as `GOOGLE_APPS_SCRIPT_URL`.

Responses appear in the `RSVP Responses` tab of that Google Sheet.

If the backend is not configured or Google Sheets rejects the write, the RSVP
form stays open and shows an error instead of displaying a fake success message.

**To add background music:** paste a licensed / royalty-free track URL into
`CONFIG.music.url`.

**To replace a photo:** drop a new file into `assets/` using the same filename.

---

_Made with love · Heirloom Modern_
