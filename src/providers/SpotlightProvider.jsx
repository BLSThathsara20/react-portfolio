import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const SpotlightProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState(250);

  const handleMouseMove = useCallback((e) => {
    requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setCursorSize(350);
      setTimeout(() => setCursorSize(250), 150);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background shapes */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue 
                      rounded-full mix-blend-multiply filter blur-xl opacity-30 
                      animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple 
                      rounded-full mix-blend-multiply filter blur-xl opacity-30 
                      animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-96 h-96 bg-accent-indigo rounded-full mix-blend-multiply 
                      filter blur-xl opacity-30 animate-pulse-slow" />
      </div>
      
      {/* Spotlight */}
      <div 
        className="fixed inset-0 pointer-events-none bg-black/90"
        style={{
          maskImage: `radial-gradient(circle ${cursorSize}px at ${mousePosition.x}px ${mousePosition.y}px, transparent, black)`,
          WebkitMaskImage: `radial-gradient(circle ${cursorSize}px at ${mousePosition.x}px ${mousePosition.y}px, transparent, black)`
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SpotlightProvider;