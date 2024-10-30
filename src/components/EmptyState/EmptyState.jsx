import React from 'react';
import { motion } from 'framer-motion';
import { FolderOpen } from 'lucide-react';

const EmptyState = ({ message = 'No items found' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-20 text-white/60"
    >
      <FolderOpen className="w-16 h-16 mb-4 animate-pulse" />
      <p>{message}</p>
    </motion.div>
  );
};

export default EmptyState;