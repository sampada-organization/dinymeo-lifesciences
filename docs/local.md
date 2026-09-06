# Local development and test

## Requirements

- Node.js 22.12+
- npm 10+

## Run the first version

```bash
cp .env.example .env
npm install
npm run dev:full
```

Open http://127.0.0.1:4321

- EN `/`  HI `/hi/`  MR `/mr/`
- Admin `/admin` password `dinymeo-dev`
- Click-to-call / WhatsApp / email dock on every page

Site-only (no form API):

```bash
npm run dev
```

## Tests

```bash
npm test          # vitest (i18n key parity, paths)
npm run build
npm run test:e2e  # Playwright, desktop + Pixel 7
npm run test:ci   # all of the above
```

Playwright starts `astro preview` on port 4321 after a production build.

## Content

Editable JSON (also the CMS target):

- `src/content/site.json` — phone, email, address, quality footnote
- `src/content/products.json` — therapy areas and packs
- `src/content/slides.json` — hero slideshow
- `src/lib/i18n.ts` — UI strings in English, Hindi, Marathi
- `src/lib/legal.ts` — disclaimer, privacy, terms

## Brand assets

Originals stay in `resources/`. Web SVGs are components under `src/components/`. Raster heroes are in `public/media/`. The demo font **Mont Heavy DEMO is not used**.
