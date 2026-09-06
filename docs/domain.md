# Domain-ready setup

DNS lookups on 7 Sep 2026 showed these names were **not registered**:

- `dinymeo.com`
- `dinymeo.in`
- `dinymeolifesciences.com`

Buy at least `dinymeo.com` (and `dinymeo.in` if the budget allows). Point them at **one** host — Azure Static Web Apps is the production host.

## Azure Static Web Apps custom domain

After `scripts/azure-bootstrap.sh`:

1. In Azure Portal → Static Web App → Custom domains → add `www.dinymeo.com`.
2. Create a CNAME: `www` → `<app>.azurestaticapps.net`.
3. For the apex `dinymeo.com`, use an ALIAS/ANAME if the registrar supports it, or Azure’s recommended A records from the portal.
4. Azure issues a free managed TLS certificate.

`public/CNAME` is set to `dinymeo.com` for GitHub Pages if you use Pages as a fallback.

## GitHub Pages (preview / fallback)

Repo Pages URL: `https://sampada-organization.github.io/dinymeo-lifesciences/`

The Pages workflow builds with `ASTRO_BASE=/dinymeo-lifesciences/`. If you attach `dinymeo.com` to Pages instead of Azure, rebuild with `ASTRO_BASE=/`.

## What the site already has

- Canonical URLs and `og:*` tags aimed at `https://dinymeo.com`
- `robots.txt` sitemap pointer
- `hreflang` for `en-IN`, `hi-IN`, `mr-IN`
- HTTPS security headers in `staticwebapp.config.json` and `public/_headers`
