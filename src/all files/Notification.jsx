import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

const Notification = ({ isOpen, onClose, message }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 right-4 z-50 max-w-sm"
        >
          <div className="bg-green-500/20 backdrop-blur-lg rounded-lg p-4 shadow-lg
                       border border-green-500/20">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <Check className="w-5 h-5 text-green-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-white">{message}</p>
              </div>
              <button
                onClick={onClose}
                className="flex-shrink-0 text-white/60 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;