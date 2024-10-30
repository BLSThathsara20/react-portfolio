import React from 'react';
import { motion } from 'framer-motion';
import { FolderIcon } from 'lucide-react';

const Folder = ({ name, isCorrect, onClick, position }) => {
  const folderVariants = {
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95,
      y: 0
    },
    initial: {
      scale: 1,
      y: 0
    }
  };

  const iconVariants = {
    hover: {
      rotate: [-5, 5],
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  };

  return (
    <motion.div
      className={`absolute cursor-pointer group ${position}`}
      variants={folderVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
    >
      <div className="flex flex-col items-center gap-2">
        <motion.div 
          className="w-24 h-24 bg-white/10 rounded-lg backdrop-blur-sm
                     flex items-center justify-center border border-white/20
                     group-hover:bg-white/20 transition-colors duration-300"
          variants={iconVariants}
        >
          <FolderIcon className="w-12 h-12 text-white/80" />
        </motion.div>
        <motion.span 
          className="text-white/80 text-sm font-medium px-3 py-1 rounded-full
                     bg-white/5 backdrop-blur-sm"
          whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        >
          {name}
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Folder;