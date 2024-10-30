import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen p-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold text-white mb-6"
        >
          Welcome to My Portfolio
        </motion.h1>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Featured Projects */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h2 className="text-xl font-bold mb-4">Featured Projects</h2>
            <div className="space-y-4">
              {/* Add project items here */}
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="font-medium">Project 1</h3>
                <p className="text-sm text-white/60">Description here</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h2 className="text-xl font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['React', 'GSAP', 'WordPress', 'Vue.js', 'SASS', 'Bootstrap', 'Tailwind'].map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-white/5 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Portfolio;