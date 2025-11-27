import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderIcon, Sparkles, Code, User, Mail, FileText, LayoutGrid, House } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Tooltip from '../Tooltip';

const FolderGrid = ({ onClose }) => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredFolder, setHoveredFolder] = useState(null);
  const [tooltip, setTooltip] = useState({ 
    show: false, 
    text: '', 
    position: { x: 0, y: 0 } 
  });

  const folders = useMemo(() => {
    const folderList = [
      { 
        id: 'home', 
        name: "Home", 
        icon: House,
        isCorrect: true,
        path: '/',
        description: 'Get to know me and my journey',
        highlight: true
      },
      { 
        id: 'projects', 
        name: 'Projects', 
        icon: FolderIcon,
        path: '/projects',
        hasPage: true,
        description: 'Explore my featured works'
      },
      { 
        id: 'about', 
        name: "About",
        icon: User, 
        path: '/about',
        hasPage: true,
        description: 'Explore my journey and expertise'
      },
      { 
        id: 'contact', 
        name: 'Contact', 
        icon: Mail,
        path: '/contact',
        hasPage: true,
        description: 'Let\'s connect'
      },
      { 
        id: 'resume', 
        name: 'Resume', 
        icon: FileText,
        path: '/resume',
        hasPage: true,
        description: 'View my professional background'
      }
    ];
    
    return [...folderList].sort(() => Math.random() - 0.5);
  }, []);

  const handleFolderClick = (folder) => {
    onClose();
    navigate(folder.path);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
    >
      <Tooltip {...tooltip} />

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-4xl bg-gray-900/90 rounded-xl shadow-2xl 
                   overflow-hidden border border-white/10 backdrop-blur-sm"
      >
        <div className="p-4 sm:p-8">
          {/* Welcome Header with Animation */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="inline-flex items-center gap-2 mb-2"
            >
              <Sparkles className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl sm:text-3xl font-bold">
                Hello, I'm Savindu Thathsara
              </h2>
              <Sparkles className="w-6 h-6 text-blue-400" />
            </motion.div>
            
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <h3 className="text-xl sm:text-2xl text-white/90">
                Web Developer
              </h3>
              <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto">
                Welcome to my digital space! I craft engaging web experiences 
                with clean code and creative animations.
              </p>
            </motion.div>
          </div>

          {/* Interactive Folder Grid */}
          <div
            className="relative bg-gradient-to-br from-gray-900 to-gray-800 
                     rounded-xl p-4 sm:p-8 mb-6"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
              });
            }}
          >
            {/* Spotlight Effect */}
            <div
              className="absolute inset-0 bg-black/75 pointer-events-none 
                       transition-opacity duration-300"
              style={{
                maskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, transparent, black)`,
                WebkitMaskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, transparent, black)`
              }}
            />

            {/* Folders Grid - Updated for consistent heights */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 auto-rows-fr">
              {folders.map((folder, index) => (
                <motion.div
                  key={folder.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative h-full" // Ensure full height
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleFolderClick(folder)}
                    className="relative group h-full" // Ensure full height
                  >
                    {folder.highlight && (
                      <div className="absolute inset-0 bg-gradient-to-r 
                                  from-blue-500/20 to-purple-500/20 rounded-lg 
                                  filter blur-sm animate-pulse" />
                    )}
                    
                    <div className={`relative z-10 flex flex-col h-full 
                                  items-center justify-between p-4 rounded-lg 
                                  cursor-pointer backdrop-blur-sm 
                                  transition-all duration-300 
                                  ${hoveredFolder === folder.id ? 'bg-white/15' : 'bg-white/5'}
                                  ${folder.highlight ? 'border border-blue-500/30' : 'border border-white/10'}
                                  hover:border-white/30`}>
                      <folder.icon 
                        className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors duration-300 mb-3
                                ${folder.highlight ? 'text-blue-400' : 'text-gray-400'}
                                ${hoveredFolder === folder.id ? 'text-white' : ''}`}
                      />
                      <div className="text-center mt-auto">
                        <p className={`font-medium text-sm transition-colors duration-300
                                  ${hoveredFolder === folder.id ? 'text-white' : 'text-white/80'}`}>
                          {folder.name}
                        </p>
                        <p className="text-xs text-white/50 mt-1 hidden sm:block">
                          {folder.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Helpful Hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/60 text-center text-sm"
          >
            ✨ Click any folder to explore or start with "Home" to learn more
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FolderGrid;