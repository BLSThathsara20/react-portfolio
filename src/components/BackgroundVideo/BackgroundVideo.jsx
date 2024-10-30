import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

const LazyVideo = lazy(() => import('./LazyVideo'));

const BackgroundVideo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none"
    >
      <div className="absolute inset-0 bg-black/50 z-10" />
      <Suspense fallback={<div className="bg-background" />}>
        <LazyVideo />
      </Suspense>
    </motion.div>
  );
};

export default BackgroundVideo;