import React from 'react';
import { motion } from 'framer-motion';
import { FolderIcon } from 'lucide-react';

const Loading = ({ isLoading }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-900
                  ${isLoading ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      <div className="text-center">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          <FolderIcon className="w-16 h-16 text-white" />
        </motion.div>
        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
          className="mt-4 text-white text-lg"
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loading;