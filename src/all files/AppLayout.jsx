import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { SpotlightProvider } from '../providers';
import Dock from '../components/Dock';

const AppLayout = () => {
  const location = useLocation();

  return (
    <SpotlightProvider>
      {/* Main Content Area */}
      <main className="min-h-screen">
        <Outlet />
      </main>

      {/* Dock - Show on all pages */}
        <Dock showDock={true} />
    </SpotlightProvider>
  );
};

export default AppLayout;