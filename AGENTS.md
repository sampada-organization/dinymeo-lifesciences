# Dinymeo site

- Stack: Astro 7 static, Azure Static Web Apps, GitHub Actions.
- Copy lives in `src/lib/i18n.ts` (UI) and `src/content/*.json` (CMS). Keep EN/HI/MR keys in lockstep — `npm test` checks this.
- Do not invent WHO-GMP certificate numbers, turnover, or product counts. See `docs/legal-claims.md`.
- Do not ship the packaged Mont Heavy DEMO font.
- Forms post to `/api/enquiry`. Local API: `scripts/api-dev.mjs`.
- Brand colours from the final logo PDF: navy `#2E3192`, blue `#3871C1`, cyan `#50ADE5`, orange `#F68712`.
- Do not redraw the logo. Use `public/brand/logo-mark.svg` / `Logo.astro` (paths from the supplied AI/PDF).
