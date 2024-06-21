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
        domain="dev-houjqh4giy1x8hlz.us.auth0.com"
        clientId="nfStcTSx0KHCFklj5fcVQ6ppsecMx723"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </AppProvider>
  </React.StrictMode>
);
