# Launch DNS (GitHub Pages first, Azure later)

Set repo variable `PRODUCTION_DOMAIN` to the bought hostname (example `dinymeo.com`). CI then builds with `ASTRO_BASE=/` and canonical `https://<domain>`.

GitHub Pages is $0 and already deploying. Azure Static Web Apps Free is also $0 once `az login` finishes; switch the CNAME when that host exists.

**Domain bought at Wix?** Keep Wix nameservers. Edit records only. Full steps: [wix.md](wix.md).

## Records to add at the registrar

Replace `YOURDOMAIN` and keep `www` + apex.

### Apex (YOURDOMAIN)

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |

### www

| Type | Name | Value |
|---|---|---|
| CNAME | www | sampada-organization.github.io |

TTL 300 seconds while launching.

## After DNS is saved

From this repo:

```bash
gh variable set PRODUCTION_DOMAIN --body YOURDOMAIN
# attach custom domain to GitHub Pages
gh api -X PUT repos/sampada-organization/dinymeo-lifesciences/pages \
  -f cname='YOURDOMAIN' -F https_enforced=true
git commit --allow-empty -m "Launch YOURDOMAIN" && git push
```

GitHub then issues a free Let's Encrypt certificate. HTTPS can take up to an hour after DNS answers.

## Later: point the same name at Azure Free SWA

When `scripts/azure-bootstrap.sh` has printed `*.azurestaticapps.net`:

1. CNAME `www` → `<app>.azurestaticapps.net`
2. Apex: ALIAS/ANAME to that host, or the A records Azure shows in Custom domains
3. `az staticwebapp hostname set --name dinymeo-web --resource-group rg-dinymeo --hostname www.YOURDOMAIN`

Do **not** put the domain on Azure Front Door (that bills).
