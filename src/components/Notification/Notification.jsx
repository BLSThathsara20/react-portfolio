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
          className="fixed top-20 right-4 z-50 max-w-sm"
        >
          <div className="bg-surface-raised rounded-md p-4 shadow-soft border border-accent/30">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-accent shrink-0" />
              <p className="flex-1 text-sm font-sans text-ink">{message}</p>
              <button
                type="button"
                onClick={onClose}
                className="text-ink-muted hover:text-ink"
                aria-label="Close"
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
