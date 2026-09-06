#!/usr/bin/env bash
# Create a free Azure Static Web App and wire the GitHub Actions secret.
# Requires: az CLI logged in, gh CLI logged in.
set -euo pipefail

NAME="${AZ_SWA_NAME:-dinymeo-web}"
RG="${AZ_RESOURCE_GROUP:-rg-dinymeo}"
LOC="${AZ_LOCATION:-eastasia}"
SKU="${AZ_SWA_SKU:-Free}"
REPO="${GITHUB_REPO:-sampada-organization/dinymeo-lifesciences}"
BRANCH="${GITHUB_BRANCH:-main}"

if ! command -v az >/dev/null; then
  echo "Install Azure CLI first: https://learn.microsoft.com/cli/azure/install-azure-cli"
  echo "Then run: az login"
  exit 1
fi

if ! az account show >/dev/null 2>&1; then
  echo "Not logged in. Opening az login..."
  az login
fi

echo "Subscription:"
az account show --query '{name:name,id:id}' -o table

az group create --name "$RG" --location "$LOC" >/dev/null
echo "Created/using resource group $RG"

az staticwebapp create \
  --name "$NAME" \
  --resource-group "$RG" \
  --location "$LOC" \
  --sku "$SKU" \
  --source "https://github.com/$REPO" \
  --branch "$BRANCH" \
  --app-location "/" \
  --output-location "dist" \
  --api-location "api" \
  --login-with-github >/dev/null || true

TOKEN=$(az staticwebapp secrets list --name "$NAME" --resource-group "$RG" --query "properties.apiKey" -o tsv)
echo "Deployment token acquired."

if command -v gh >/dev/null; then
  gh secret set AZURE_STATIC_WEB_APPS_API_TOKEN --repo "$REPO" --body "$TOKEN"
  echo "GitHub secret AZURE_STATIC_WEB_APPS_API_TOKEN set on $REPO"
fi

HOST=$(az staticwebapp show --name "$NAME" --resource-group "$RG" --query "defaultHostname" -o tsv)
echo "Default host: https://$HOST"
echo "Custom domain: after buying dinymeo.com, run:"
echo "  az staticwebapp hostname set --name $NAME --resource-group $RG --hostname www.dinymeo.com"
echo "Then add CNAME www -> $HOST and apex A/ALIAS per Azure portal."
