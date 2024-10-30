import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Tutorial = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-gray-900/90 text-white p-6 rounded-lg shadow-xl
                       border border-white/10 backdrop-blur-lg max-w-md w-full"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Welcome to My Portfolio!</h2>
              
              <div className="space-y-4">
                <p>👋 Here's how to explore:</p>
                <ul className="space-y-2 list-disc pl-4">
                  <li>Move your mouse around to reveal hidden content</li>
                  <li>Find the correct folder that contains my information</li>
                  <li>Click on the shining name for a hint</li>
                </ul>
                <p className="text-sm italic">Start by finding the folder that matches my name!</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Tutorial;