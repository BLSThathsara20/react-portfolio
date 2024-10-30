import React from 'react';
import { RouterProvider, ScrollRestoration } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import router from './routes';

const App = () => {
  return (
    <HelmetProvider>
      <ScrollRestoration />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};

export default App;