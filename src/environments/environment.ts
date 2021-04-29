import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
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
    scope: 'offline_access openid profile role email phone CdvProject',
  },
  apis: {
    default: {
      url: 'https://localhost:44310',
      rootNamespace: 'CdvProject',
    },
  },
} as Environment;
