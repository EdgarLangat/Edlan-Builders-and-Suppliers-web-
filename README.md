# Edlan Builders and Suppliers — Website

Static site: HTML + CSS + vanilla JS. No build step, no server required —
works on GitHub Pages, Netlify, or any basic web host.

## Files

```
edlan-website/
├── index.html          Home (hero slideshow, services preview, about, process, testimonials, CTA)
├── services.html        All 7 services in detail
├── about.html            Company story
├── contact.html          Click-to-call, WhatsApp, email, map, enquiry form
├── css/style.css         All styling (colors, layout, animations)
├── js/script.js          Slideshow, mobile menu, loading overlay, form
└── images/
    ├── logo.png            Full logo (header, footer, hero)
    ├── logo-trimmed.png    Cropped logo used in the loading animation
    └── slide-1..4.jpg      PLACEHOLDER hero photos — replace these
```

## Replacing the placeholder photos

Every image labelled "REPLACE:" in the site is a stand-in. Swap them by
keeping the **same filename** so nothing else needs to change:

- `images/slide-1.jpg` to `slide-4.jpg` — hero slideshow on the home page.
  Recommended size: 1600×900px (landscape), JPG, under 400KB each.
- `images/about-team.jpg`, `images/about-site-visit.jpg` — about/home photos.
  Recommended: 4:3 ratio (e.g. 1200×900px).
- `images/service-plot-plans.jpg`, `service-architecture.jpg`,
  `service-materials.jpg`, `service-construction.jpg`, `service-school.jpg`,
  `service-site-plan.jpg`, `service-mansion.jpg` — one photo per service on
  `services.html`. Recommended: 4:3 ratio.

Just drop a file with the exact matching name into `images/` (or upload it
to that path in GitHub) and it will appear automatically — no code edits
needed.

## How things you asked for work

- **Click to call**: `0728 234 172` is wired as `tel:+254728234172` — on a
  phone this opens the dialer.
- **Click for WhatsApp**: `+254728234172` is wired as
  `https://wa.me/254728234172` — opens a WhatsApp chat. There's also a
  floating WhatsApp button on every page.
- **Email**: `edlanbid@gmail.com` is a `mailto:` link everywhere it appears,
  and the contact form builds a pre-filled email to that address.
- **Map**: `contact.html` embeds a live Google Map centered on Nakuru
  (no API key needed). If you'd like it pinned to your exact office/yard
  instead of "Nakuru" generally, send the address or Google Maps link and
  I'll swap in the exact coordinates.
- **Logo as loading indicator**: any internal navigation link or the
  contact form fades in a full-screen overlay that pulses/spins the Edlan
  logo for a moment before the next page loads — see `.load-overlay` in
  `css/style.css` and `showLoader()` in `js/script.js`.

## Publishing to GitHub (step by step)

**Option A — brand-new repository**
1. Go to github.com → **New repository** → name it e.g. `edlan-website` →
   Create repository (leave it empty, no README/license added by GitHub).
2. On the empty repo page, click **uploading an existing file**.
3. Drag in every file and folder from this project (keep the `css/`,
   `js/`, `images/` folder structure intact) → **Commit changes**.
4. Go to **Settings → Pages** → under "Build and deployment", set
   **Source: Deploy from a branch**, branch **main**, folder **/(root)** →
   **Save**.
5. GitHub gives you a live URL shortly after
   (`https://<your-username>.github.io/edlan-website/`).

**Option B — replacing files in a repo you already have**
1. Open your existing repo on GitHub.
2. For each file I give you next time, click the file in GitHub (or
   **Add file → Upload files** for new ones) → **Edit** (pencil icon) →
   select all, delete, paste in the full replacement code → **Commit
   changes**. Since I'll always give you the *complete* file, this
   paste-and-replace approach is always safe.
3. GitHub Pages redeploys automatically within a minute or two of any
   commit to the published branch.

**Using a custom domain** (e.g. edlanbuilders.co.ke): add it under
**Settings → Pages → Custom domain**, then create a CNAME/A record with
your domain registrar pointing to GitHub Pages — let me know if you want
the exact DNS records to give your registrar.

## Notes for next updates

Since I'll always hand you a **full replacement file** (never a partial
snippet), updating is always: open the file on GitHub → select all →
paste the new version → commit. Let me know what you'd like to change
next — more services, real photos, a projects/gallery page, pricing, a
blog, etc.
