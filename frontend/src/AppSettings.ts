export const server = 'http://localhost:5000';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'dev-16kornast.eu.auth0.com',
  client_id: 'cnE6Wfz2vs5jVfNYczFsKz5vWiRn2XFG',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
