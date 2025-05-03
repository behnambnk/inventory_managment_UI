import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-devtools';
import { MantineProvider } from '@mantine/core';
import App from './app';
import { AuthProvider } from './context/AuthContext';
import './app.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <BrowserRouter>
          <AuthProvider>
            <App />
          </AuthProvider>
        </BrowserRouter>
      </MantineProvider>
    </React.StrictMode>
  );
} else {
  console.error('❌ Root element not found in HTML');
}
