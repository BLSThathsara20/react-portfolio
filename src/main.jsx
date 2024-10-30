import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { WelcomeProvider } from './contexts/WelcomeContext';
import router from './routes';
import './styles/main.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <WelcomeProvider>
        <RouterProvider router={router} />
      </WelcomeProvider>
    </HelmetProvider>
  </React.StrictMode>
);