# Azure host — Free SKU only (billing zero)

The production host is **Azure Static Web Apps, SKU Free**. That SKU has no compute charge. Do not change it to Standard.

| Resource | SKU | Cost |
|---|---|---|
| Static Web App + managed TLS | Free | $0 |
| Managed `/api` functions | included | $0 |
| GitHub Actions on this public repo | included | $0 |
| Enquiry inbox | private GitHub issues | $0 |

No App Service, Storage, Cosmos, Front Door, Application Insights, or email service is created.

## One-time login and create

```bash
export PATH="$HOME/.local/bin:$PATH"
az login --use-device-code
bash scripts/azure-bootstrap.sh
```

The script:

1. Creates `rg-dinymeo` tagged `billing=zero`
2. Creates `dinymeo-web` with **SKU=Free** and aborts if the SKU is anything else
3. Stores form mail as issues on the **private** repo `dinymeo-enquiries` (never on the public website repo)
4. Sets GitHub secret `AZURE_STATIC_WEB_APPS_API_TOKEN` so `main` deploys
5. Tries to attach a $1 monthly budget alert (1% = a penny) if the subscription allows it

Then re-run the **Azure Static Web Apps** workflow, or `git push`.

## Contact form

`POST /api/enquiry` on the Static Web App:

- honeypot, fill-time check, 5 posts / IP / hour
- CORS only for this SWA origin and local dev
- writes a **private** GitHub issue, not a public one, not Azure Table (Table would bill)

## What would start a bill (do not do)

- Switching the Static Web App to Standard
- Adding Application Insights
- Adding Azure Communication Services / SendGrid on Azure
- Adding a custom domain through a paid Front Door
- Turning off a spending limit on a trial subscription and then creating paid SKUs

Custom domain on the **Free** SWA itself is still $0 (Azure-managed certificate).
