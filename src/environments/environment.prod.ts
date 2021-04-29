import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'CdvProject',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44310',
    redirectUri: baseUrl,
    clientId: 'CdvProject_App',
    responseType: 'code',
    scope: 'offline_access CdvProject',
  },
  apis: {
    default: {
      url: 'https://localhost:44310',
      rootNamespace: 'CdvProject',
    },
  },
} as Environment;
