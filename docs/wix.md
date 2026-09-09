# Park the live site on a Wix domain

The site stays on **GitHub Pages**. Wix cannot host this Astro build. Domain **dinymeo.com** was bought at Wix: keep Wix as the registrar and point DNS at Pages. Wix does **not** let you change nameservers on a Wix-purchased domain — only the records.

Primary URL is **https://dinymeo.com** (HTTPS enforced). `www.dinymeo.com` redirects there. GitHub Pages certificate covers both names.

Fallback until DNS is updated: https://sampada-organization.github.io/dinymeo-lifesciences/

## What you do in Wix (5 minutes)

1. Log in at [wix.com](https://www.wix.com) → **Settings** → **Domains**.
2. Next to the domain, **Domain Actions** → **Manage DNS Records**.
3. Do **not** connect the domain to a Wix site. Do **not** switch nameservers.

### Apex (`dinymeo.com`)

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

## GitHub side (already done for dinymeo.com)

`PRODUCTION_DOMAIN=dinymeo.com` is set. Pages custom domain is `dinymeo.com`. CI builds with `ASTRO_BASE=/`.

After your Wix A/CNAME records answer, GitHub issues a free Let's Encrypt certificate (up to an hour). Then we turn on HTTPS enforce so `http://dinymeo.com` redirects to `https://dinymeo.com`.

## Wix slideshow plugins (if you ever use the Wix editor)

This GitHub Pages site **cannot** load Wix App Market plugins. The home hero already has the same controls: autoplay, **hold to pause**, full-height shadowy prev/next, and dots.

To add a slideshow inside a *separate* Wix site:

1. Open the Wix Editor.
2. **Add Elements** (left) → **Interactive** → pick a **full-width** or **box** slideshow, or **Add** → **Gallery** → **Slideshows**.
3. Click the slideshow → **Manage Slides** to add or replace slides.
4. Click **Settings**:
   - **Autoplay** on, set seconds per slide.
   - **Pause on hover** if you want hover instead of hold.
   - **Show pause & play** if you want a button.
   - **Continuous loop** on.
5. **Display elements** / **Design**: enable **navigation buttons** (side arrows) and **slide indicators**. For Pro Gallery, Design → **Navigation Arrows** → show arrows, background **Shadow**.

Do not mix that Wix page with this Astro build. Park the domain on Pages as above; keep Wix only as the registrar.

## What not to do

- Do not rebuild this site in the Wix editor.
- Do not point A records at Wix IPs (`185.230.63.107` and friends) — that parks a Wix placeholder, not this site.
- Do not attach the name to Azure Front Door (that bills).
