# Dinymeo site

- Stack: Astro 7 static, Azure Static Web Apps, GitHub Actions.
- Copy lives in `src/lib/i18n.ts` (UI) and `src/content/*.json` (CMS). Keep EN/HI/MR keys in lockstep — `npm test` checks this.
- Do not invent WHO-GMP certificate numbers, turnover, or product counts. See `docs/legal-claims.md`.
- Do not ship the packaged Mont Heavy DEMO font.
- Forms post to `/api/enquiry`. Local API: `scripts/api-dev.mjs`.
- Brand colours: navy `#01008E`, blue `#1E78FE`, cyan `#4FD8FE`, orange `#FF7F00`.
