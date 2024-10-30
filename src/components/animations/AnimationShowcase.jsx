// src/components/animations/AnimationShowcase.jsx

import React from 'react';
import { motion } from 'framer-motion';

const AnimationShowcase = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white/5 rounded-xl p-6">
        <h3 className="text-lg font-bold mb-4">Animation Example</h3>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 bg-blue-500/20 rounded-lg mx-auto"
        />
      </div>
    </div>
  );
};

export default AnimationShowcase;