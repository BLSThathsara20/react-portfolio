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
      className="min-h-screen flex items-center justify-center p-8"
    >
      <div className="text-center space-y-8">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-8xl font-bold text-white/20"
        >
          404
        </motion.h1>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold">Page Not Found</h2>
          <p className="text-white/60">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10
                     hover:bg-white/20 rounded-lg transition-colors"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;