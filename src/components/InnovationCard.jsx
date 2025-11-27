import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Globe, Sparkles } from 'lucide-react';

const InnovationCard = ({ innovation, index, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Function to generate random position within the image bounds
  const getRandomPosition = () => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    return { x, y };
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        delay: index * 0.1,
        type: "spring",
        damping: 20 
      }}
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(innovation)}
      whileHover={{ scale: 1.02 }}
    >
      {/* Card Container */}
      <div className="relative">
        {/* Ambient Light Effect */}
        <motion.div
          className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 
                     rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
        />

        {/* Card Content */}
        <div className="relative bg-white/5 rounded-xl overflow-hidden border border-white/10 
                     backdrop-blur-sm group-hover:border-white/20 transition-all duration-300
                     shadow-xl">
          {/* Image Container */}
          <div className="relative aspect-video overflow-hidden">
            <motion.img
              src={innovation.image}
              alt={innovation.title}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.4 }}
            />

            {/* Floating Elements */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  {/* Interactive Particles */}
                  {[...Array(12)].map((_, i) => {
                    const startPos = getRandomPosition();
                    const endPos = getRandomPosition();
                    
                    return (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        initial={{ 
                          left: `${startPos.x}%`,
                          top: `${startPos.y}%`,
                          scale: 0,
                          opacity: 0 
                        }}
                        animate={{ 
                          left: [`${startPos.x}%`, `${endPos.x}%`],
                          top: [`${startPos.y}%`, `${endPos.y}%`],
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          delay: i * 0.1,
                          repeat: 9999,
                          repeatType: "reverse"
                        }}
                      />
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>

          {/* Content Section */}
          <div className="p-6">
            {/* Title with Gradient */}
            <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent 
                       bg-gradient-to-r from-white via-white/90 to-white/80">
              {innovation.title}
            </h3>

            {/* Interactive Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {innovation.tags.map((tag, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-3 py-1 text-sm bg-white/5 rounded-full border border-white/10
                           hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <p className="text-white/60 mb-4 line-clamp-2">
              {innovation.shortDescription}
            </p>

            {/* View Details Button */}
            <motion.button
              className="w-full py-2 px-4 bg-blue-500/20 rounded-lg border border-blue-500/30
                       hover:bg-blue-500/30 transition-all duration-300 group/button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center gap-2">
                View Details
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: 5 }}
                  transition={{
                    duration: 0.6,
                    repeat: 9999,
                    repeatType: "reverse"
                  }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </div>

          {/* Featured Badge */}
          {innovation.featured && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r 
                       from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-sm
                       border border-white/20 text-sm flex items-center gap-2"
            >
              <Sparkles className="w-3 h-3" />
              Featured
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default InnovationCard; 