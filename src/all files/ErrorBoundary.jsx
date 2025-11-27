import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useRouteError } from 'react-router-dom';
import { Home, RefreshCcw } from 'lucide-react';

const ErrorBoundary = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10"
        >
          <div className="text-center space-y-6">
            <h1 className="text-2xl font-bold">Oops! Something went wrong</h1>
            
            <div className="space-y-2">
              <p className="text-white/60">
                {error?.message || "The page you're looking for couldn't be loaded."}
              </p>
              <p className="text-sm text-white/40">
                Error: {error?.statusText || error?.name || 'Unknown Error'}
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/')}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 
                         hover:bg-white/20 rounded-lg transition-colors"
              >
                <Home className="w-4 h-4" />
                Go Home
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.reload()}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 
                         hover:bg-white/20 rounded-lg transition-colors"
              >
                <RefreshCcw className="w-4 h-4" />
                Try Again
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ErrorBoundary;