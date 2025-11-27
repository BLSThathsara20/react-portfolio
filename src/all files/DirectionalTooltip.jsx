import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DirectionalTooltip = ({ isVisible, message, direction, position }) => {
  const getDirectionStyle = () => {
    switch(direction) {
      case 'left':
        return 'before:content-["←"]';
      case 'right':
        return 'before:content-["→"]';
      case 'up':
        return 'before:content-["↑"]';
      case 'down':
        return 'before:content-["↓"]';
      default:
        return '';
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className={`fixed z-50 ${getDirectionStyle()} 
                     before:mr-2 before:text-xl before:font-bold`}
          style={{
            left: position.x,
            top: position.y
          }}
        >
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg
                        border border-white/20 shadow-lg">
            <p className="text-white text-sm">{message}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DirectionalTooltip;