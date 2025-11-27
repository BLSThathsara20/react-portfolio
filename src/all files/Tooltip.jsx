import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tooltip = ({ show, text, position }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="fixed z-[60] px-4 py-2 bg-white/10 backdrop-blur-md
                     rounded-lg border border-white/20 shadow-lg"
          style={{
            left: position.x,
            top: position.y
          }}
        >
          <p className="text-white text-sm whitespace-nowrap">{text}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Tooltip;