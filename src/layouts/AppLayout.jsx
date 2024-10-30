import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { SpotlightProvider } from '../providers';
import Dock from '../components/Dock';
import FolderGrid from '../components/FolderGrid';

const AppLayout = () => {
  const location = useLocation();
  const [showWelcome, setShowWelcome] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted state
    setMounted(true);
    window.scrollTo(0, 0);

    // Show welcome only on root path
    if (location.pathname === '/') {
      setShowWelcome(true);
    } else {
      setShowWelcome(false);
    }
  }, [location.pathname]);

  // Handle welcome screen close
  const handleWelcomeClose = () => {
    setShowWelcome(false);
  };

  if (!mounted) return null;

  return (
    <SpotlightProvider>
      {/* Welcome Screen - Only show on homepage */}
      {location.pathname === '/' && showWelcome && (
        <FolderGrid onClose={handleWelcomeClose} />
      )}

      {/* Main Content Area */}
      <main className={`min-h-screen ${location.pathname === '/' && showWelcome ? 'hidden' : 'block'}`}>
        <Outlet />
      </main>

      {/* Dock - Show when welcome screen is not visible or not on homepage */}
      {(!showWelcome || location.pathname !== '/') && (
        <Dock showDock={true} />
      )}
    </SpotlightProvider>
  );
};

export default AppLayout;