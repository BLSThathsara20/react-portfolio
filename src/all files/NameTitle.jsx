import React from 'react';
import { motion } from 'framer-motion';

const NameTitle = ({ name }) => {
  const letters = Array.from(name);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200
      }
    }
  };

  return (
    <motion.div
      className="relative group cursor-pointer"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-500 
                      rounded-lg blur opacity-20 group-hover:opacity-75 transition duration-1000" />
      
      <div className="relative flex space-x-1">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="text-4xl font-bold text-white inline-block"
            whileHover={{
              scale: 1.2,
              rotate: [-5, 5],
              transition: { type: "spring" }
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default NameTitle;