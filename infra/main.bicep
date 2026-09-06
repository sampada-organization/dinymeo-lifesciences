@description('Free-tier Azure Static Web App for the Dinymeo JAMstack site.')
param name string = 'dinymeo-web'
param location string = 'eastasia'
param repositoryUrl string = 'https://github.com/sampada-organization/dinymeo-lifesciences'
param branch string = 'main'

resource swa 'Microsoft.Web/staticSites@2022-03-01' = {
  name: name
  location: location
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {
    repositoryUrl: repositoryUrl
    branch: branch
    provider: 'GitHub'
    buildProperties: {
      appLocation: '/'
      apiLocation: 'api'
      outputLocation: 'dist'
    }
  }
}

output defaultHostname string = swa.properties.defaultHostname
output resourceId string = swa.id
