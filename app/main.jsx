import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider, createTheme } from '@mantine/core';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import './app.css';

// 🎨 تم سفارشی برای کل پروژه
const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  primaryColor: 'blue',
  components: {
    Paper: {
      styles: () => ({
        root: {
          backgroundColor: '#f0f8ff',
        },
      }),
    },
    Button: {
      styles: () => ({
        root: {
          fontSize: '1.1rem',
          fontWeight: 600,
          padding: '10px 20px',
        },
      }),
    },
    Title: {
      styles: () => ({
        root: {
          fontWeight: 700,
          textAlign: 'center',
        },
      }),
    },
    Text: {
      styles: () => ({
        root: {
          textAlign: 'center',
        },
      }),
    },
  },
});

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <BrowserRouter>
          <AuthProvider>
            <App />
          </AuthProvider>
        </BrowserRouter>
      </MantineProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
