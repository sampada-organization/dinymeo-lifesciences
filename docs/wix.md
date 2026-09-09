# Park the live site on a Wix domain

The site stays on **GitHub Pages**. Wix cannot host this Astro build. If the domain was bought at Wix, keep Wix as the registrar and point DNS at Pages. Wix does **not** let you change nameservers on a Wix-purchased domain — only the records.

Live fallback while DNS is pending: https://sampada-organization.github.io/dinymeo-lifesciences/

## What you do in Wix (5 minutes)

1. Log in at [wix.com](https://www.wix.com) → **Settings** → **Domains**.
2. Next to the domain, **Domain Actions** → **Manage DNS Records**.
3. Do **not** connect the domain to a Wix site. Do **not** switch nameservers.

### Apex (`yourdomain.com`)

Delete any existing A records that point at Wix (`185.230.63.*` or similar). Add these four:

| Type | Host name | Value |
|---|---|---|
| A | (leave blank) | `185.199.108.153` |
| A | (leave blank) | `185.199.109.153` |
| A | (leave blank) | `185.199.110.153` |
| A | (leave blank) | `185.199.111.153` |

Optional IPv6 (AAAA), host blank:

- `2606:50c0:8000::153`
- `2606:50c0:8001::153`
- `2606:50c0:8002::153`
- `2606:50c0:8003::153`

### `www`

Edit the `www` CNAME. Point it at GitHub Pages, not `pointing.wixdns.net`:

| Type | Host name | Value |
|---|---|---|
| CNAME | `www` | `sampada-organization.github.io` |

Save. TTL 300 seconds is enough while launching.

## What we do here once you send the exact hostname

Tell us the domain (example `dinymeo.com`). Then from this repo:

```bash
gh variable set PRODUCTION_DOMAIN --body YOURDOMAIN
gh api -X PUT repos/sampada-organization/dinymeo-lifesciences/pages \
  -f cname='YOURDOMAIN' -F https_enforced=true
git commit --allow-empty -m "Launch YOURDOMAIN" && git push
```

GitHub issues a free Let's Encrypt certificate. HTTPS can take up to an hour after DNS answers.

Until `PRODUCTION_DOMAIN` is set, Pages keeps serving at `/dinymeo-lifesciences/`. After it is set, the build uses `/` so `https://YOURDOMAIN` works.

## What not to do

- Do not rebuild this site in the Wix editor.
- Do not point A records at Wix IPs (`185.230.63.107` and friends) — that parks a Wix placeholder, not this site.
- Do not attach the name to Azure Front Door (that bills).
