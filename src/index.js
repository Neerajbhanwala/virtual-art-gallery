import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-jzvsa3v4om5ed5k5.us.auth0.com"
    clientId="wnmSYLQjWoO8AnDj6nLJ8GAUqlcGNmWy"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);

