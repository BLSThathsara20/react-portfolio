import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useScrollDirection from '../../hooks/useScrollDirection';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { 
  Home, 
  User, 
  Code, 
  Newspaper, 
  Mail, 
  FileText
} from 'lucide-react';

const Dock = ({ showDock }) => {
  const [isWindows, setIsWindows] = useState(false);
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
    { icon: Newspaper, label: 'Blog', path: '/blog' },
    { icon: Mail, label: 'Contact', path: '/contact' },
    { icon: FileText, label: 'Resume', path: '/resume' }
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
            <nav className={`flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 
                          rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg
                          ${isWindows ? 'windows-dock' : 'mac-dock'}`}>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`p-2 sm:p-3 rounded-lg transition-colors relative
                            ${isActive(item.path) ? 'bg-white/20' : 'hover:bg-white/10'}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dock;