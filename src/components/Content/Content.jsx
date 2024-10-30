import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Content = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />
          
          {/* Content Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-gray-900/90 text-white rounded-lg shadow-xl
                       border border-white/10 backdrop-blur-lg w-full max-w-4xl
                       max-h-[80vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6">About Me</h2>
              
              <div className="space-y-8">
                {/* Profile Section */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3">
                    <div className="bg-white/5 rounded-lg p-4 text-center">
                      <div className="w-32 h-32 mx-auto rounded-full bg-white/10 mb-4" />
                      <h3 className="text-xl font-bold">Your Name</h3>
                      <p className="text-gray-400">Frontend Developer</p>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-2/3 space-y-4">
                    <h3 className="text-xl font-bold">Hello! 👋</h3>
                    <p className="text-gray-300">
                      Your introduction goes here. Write about your passion for web development,
                      your journey, and what drives you.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-lg p-4">
                        <h4 className="font-bold mb-2">Experience</h4>
                        <p className="text-gray-300">X years in frontend development</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <h4 className="font-bold mb-2">Skills</h4>
                        <p className="text-gray-300">React, TypeScript, Tailwind CSS</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Projects Preview */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Featured Projects</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Add your project cards here */}
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="font-bold">Project 1</h4>
                      <p className="text-gray-300">Project description goes here</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="font-bold">Project 2</h4>
                      <p className="text-gray-300">Project description goes here</p>
                    </div>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                  <div className="flex gap-4">
                    <button className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20">
                      Email
                    </button>
                    <button className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20">
                      LinkedIn
                    </button>
                    <button className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20">
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Content;