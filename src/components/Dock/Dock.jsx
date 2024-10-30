import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useScrollDirection from '../../hooks/useScrollDirection';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, 
  User, 
  Code, 
  Newspaper, 
  Mail, 
  FileText,
  Sparkles
} from 'lucide-react';

const Dock = ({ showDock, onHomeClick }) => {
  const [isWindows, setIsWindows] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const scrollDirection = useScrollDirection();
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsWindows(userAgent.indexOf('Windows') !== -1);
  }, []);

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: User, label: 'About', path: '/about' },
    { icon: Code, label: 'Projects', path: '/projects' },
    { 
      icon: Sparkles, 
      label: 'Innovations', 
      path: '/playground',
      isSpecial: true,
      description: 'Explore my creative experiments'
    },
    { icon: Newspaper, label: 'Blog', path: '/blog' },
    { icon: Mail, label: 'Contact', path: '/contact' },
    { icon: FileText, label: 'Resume', path: '/resume' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <AnimatePresence>
        {showDock && scrollDirection === 'up' && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="flex justify-center pb-8 px-4"
          >
            <div className={`flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 
                          rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg
                          ${isWindows ? 'windows-dock' : 'mac-dock'}`}>
              {navItems.map((item) => (
                <div key={item.path} className="relative flex flex-col items-center">
                  {/* Tooltip Container - Keeping original alignment */}
                  <AnimatePresence>
                    {hoveredIcon === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute bottom-full mb-2 flex flex-col items-center"
                      >
                        <div className="px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-sm
                                    text-xs text-white whitespace-nowrap border border-white/20">
                          {item.label}
                          {item.description && (
                            <span className="block text-[10px] text-white/60 mt-0.5">
                              {item.description}
                            </span>
                          )}
                        </div>
                        <div className="w-2 h-2 bg-black/80 rotate-45 -mt-1 border-b border-r border-white/20" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Icon Button with Special Animation */}
                  <motion.div
                    onHoverStart={() => setHoveredIcon(item.label)}
                    onHoverEnd={() => setHoveredIcon(null)}
                    whileHover={{ scale: 1.2 }}
                    className="relative"
                  >
                    <motion.button
                      onClick={() => navigate(item.path)}
                      className={`relative p-2 sm:p-3 rounded-lg transition-colors overflow-hidden
                                ${isActive(item.path) ? 'bg-white/20' : 'hover:bg-white/10'}
                                ${item.isSpecial ? 'special-nav-icon' : ''}`}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Shine animation for special icon */}
                      {item.isSpecial && (
                        <>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                            animate={{
                              x: ['-100%', '200%'],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                              repeatDelay: 1
                            }}
                          />
                          <motion.div
                            className="absolute inset-0 rounded-lg bg-blue-500/20"
                            animate={{
                              opacity: [0.2, 0.4, 0.2],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        </>
                      )}
                      
                      <item.icon 
                        className={`relative z-10 w-5 h-5 sm:w-6 sm:h-6
                                ${item.isSpecial ? 'text-blue-100' : 'text-white'}`}
                      />
                    </motion.button>

                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeIndicator"
                        className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full
                                ${item.isSpecial ? 'bg-blue-400' : 'bg-white'}`}
                      />
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Dock;