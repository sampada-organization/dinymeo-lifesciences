# Dinymeo Lifesciences

First-version JAMstack website for **Dinymeo Lifesciences Pvt. Ltd.** (Pune) — English, हिन्दी, मराठी.

Live shape: static Astro site + Azure Static Web Apps (free) + GitHub Actions. Forms and a small CMS sit on `/api`. Click-to-call, WhatsApp, and email are first-class.

## Quick start

```bash
npm install
npm run dev:full
```

http://127.0.0.1:4321

| Script | What it does |
|---|---|
| `npm run dev` | Site only |
| `npm run dev:full` | Site + local `/api` (enquiries, CMS) |
| `npm test` | Unit tests |
| `npm run test:e2e` | Playwright against a production build |
| `npm run build` | `dist/` for Azure / Pages |

## Pages

Home (slideshow, intro, promises, short about, enquiry) · About · Manufacturing & products · Contact · Disclaimer · Privacy · Terms · Admin.

## Brand

Navy `#2E3192`, blue `#3871C1`, cyan `#50ADE5`, orange `#F68712` — taken from the supplied golden-ratio final artwork. The SVG mark is that original device, not a redraw. Raster heroes are decorative only.

## Legal (v1)

WHO-GMP / GLP / ISO wording is a **site footnote**: certificates belong to manufacturing partners and can be shown to qualified partners on request. No consumer drug sale, no doctor quotes, no invented stats. Details: [docs/legal-claims.md](docs/legal-claims.md).

## Azure / GitHub / domain

Production is **Azure Static Web Apps, SKU Free only** (no compute charge). Contact form posts land as issues on the private `dinymeo-enquiries` repo — never on the public website repo.

```bash
az login --use-device-code
bash scripts/azure-bootstrap.sh
```

Details: [docs/azure.md](docs/azure.md). Domain: [docs/domain.md](docs/domain.md).

Suggested domains (unchecked-out on 7 Sep 2026): `dinymeo.com`, `dinymeo.in`.

## Client brief

[docs/brief.md](docs/brief.md)
