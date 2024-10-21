import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { AppProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppProvider>
      <Auth0Provider
        domain="dev-qhu3xskn561ovjha.us.auth0.com"
        clientId="sqIKHWLcmDjp3fEJN3ZfUUR8xcmvxDAA"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </AppProvider>
  </React.StrictMode>
);
