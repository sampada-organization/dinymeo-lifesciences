# Azure + GitHub CI/CD

GitHub is already authenticated in this environment as `sampada-organization`. **Azure CLI is not logged in** (and may not be installed). The website is wired so that Azure login is the only missing production step.

## Free tier used

| Resource | SKU | Role |
|---|---|---|
| Azure Static Web Apps | Free | Host, TLS, custom domain, proxied `/api` |
| Azure Functions (SWA managed) | Consumption, included | Enquiry form + CMS password gate |
| GitHub Actions | Included | Test, build, deploy |

No App Service plan, no Cosmos, no Front Door in v1.

## One-time Azure login

```bash
# install CLI if needed
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
az login
bash scripts/azure-bootstrap.sh
```

The script creates `rg-dinymeo` + a Free Static Web App and sets the GitHub secret `AZURE_STATIC_WEB_APPS_API_TOKEN`.

Optional secrets:

- `CMS_PASSWORD` — admin editor at `/admin`
- `ENQUIRY_GITHUB_TOKEN` — turn form posts into private GitHub issues

## Pipelines

- `.github/workflows/ci.yml` — unit tests, production build, Playwright
- `.github/workflows/azure-swa.yml` — deploy to Azure (no-ops until the token secret exists)
- `.github/workflows/pages.yml` — GitHub Pages preview

## Local API that matches Azure

```bash
npm run dev:full
# site  http://127.0.0.1:4321
# api   http://127.0.0.1:8788  (proxied as /api on the site)
```

Enquiries without a GitHub token are appended to `.data/enquiries.json` (gitignored).
