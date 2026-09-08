#!/usr/bin/env bash
# Attach a custom domain to GitHub Pages (free) and rebuild.
set -euo pipefail
DOMAIN="${1:-${PRODUCTION_DOMAIN:-}}"
if [[ -z "$DOMAIN" ]]; then
  echo "usage: bash scripts/launch-domain.sh example.com"
  exit 1
fi
REPO="${GITHUB_REPO:-sampada-organization/dinymeo-lifesciences}"

gh variable set PRODUCTION_DOMAIN --repo "$REPO" --body "$DOMAIN"
gh api -X PUT "repos/${REPO}/pages" -f cname="$DOMAIN" -F https_enforced=true >/dev/null

mkdir -p public
printf '%s\n' "$DOMAIN" > public/CNAME
echo "Set PRODUCTION_DOMAIN=$DOMAIN"
echo "GitHub Pages cname=$DOMAIN"
echo
echo "Add these DNS records now (TTL 300):"
echo "  A     @    185.199.108.153"
echo "  A     @    185.199.109.153"
echo "  A     @    185.199.110.153"
echo "  A     @    185.199.111.153"
echo "  CNAME www  sampada-organization.github.io"
echo
echo "Then commit public/CNAME and push so CI rebuilds on the apex path."
