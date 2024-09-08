export default {
    oidc: {
        clientId: '{myClientId}',
        issuer: 'https://{myDevUrlSection}.okta.com/oauth2/default',
        redirectUri: 'http://localhost:4200/login/callback',
        scopes: ['openid', 'profile', 'email']
    }
}
