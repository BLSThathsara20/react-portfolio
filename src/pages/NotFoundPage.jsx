import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[70vh] flex items-center justify-center section-pad"
    >
      <div className="text-center space-y-6 max-w-md">
        <h1 className="font-display text-8xl text-ink/15">404</h1>
        <h2 className="font-display text-3xl text-ink">Page not found</h2>
        <p className="body-lg">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <button type="button" onClick={() => navigate('/')} className="btn-primary">
          <Home className="w-4 h-4" />
          Back home
        </button>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;
