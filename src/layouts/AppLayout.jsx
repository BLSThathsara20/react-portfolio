import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { SpotlightProvider } from '../providers';
import Dock from '../components/Dock';
import PageTransition from '../components/PageTransition';

const AppLayout = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <SpotlightProvider>
      <AnimatePresence mode="wait">
        <PageTransition>
          <main className="min-h-screen">
        <Outlet />
      </main>
        </PageTransition>
      </AnimatePresence>
        <Dock showDock={true} />
    </SpotlightProvider>
  );
};

export default AppLayout;