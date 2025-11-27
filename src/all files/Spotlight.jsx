import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Spotlight = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState(150);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeoutId;
    
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      setCursorSize(250); // Expand when moving

      // Reset size after movement stops
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMoving(false);
        setCursorSize(150);
      }, 150);
    };

    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      
      {/* Dynamic spotlight */}
      <div 
        className="fixed inset-0 bg-black/75 pointer-events-none transition-all duration-300"
        style={{
          maskImage: `radial-gradient(circle ${cursorSize}px at ${mousePosition.x}px ${mousePosition.y}px, transparent, black)`,
          WebkitMaskImage: `radial-gradient(circle ${cursorSize}px at ${mousePosition.x}px ${mousePosition.y}px, transparent, black)`
        }}
      />
      
      {/* Ambient light effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Spotlight;