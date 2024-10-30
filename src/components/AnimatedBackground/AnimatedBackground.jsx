import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const shapes = useMemo(() => {
    const patterns = [
      // Pattern 1
      [
        { type: 'circle', color: 'bg-blue-500/10' },
        { type: 'square', color: 'bg-purple-500/10' },
        { type: 'circle', color: 'bg-indigo-500/10' }
      ],
      // Pattern 2
      [
        { type: 'triangle', color: 'bg-green-500/10' },
        { type: 'circle', color: 'bg-yellow-500/10' },
        { type: 'square', color: 'bg-red-500/10' }
      ],
      // Add more patterns...
    ];

    return patterns[Math.floor(Math.random() * patterns.length)];
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.color} backdrop-blur-3xl`}
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: `${Math.random() * 100}%`,
            scale: 0.5
          }}
          animate={{
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            scale: [0.5, 1.5, 0.5]
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            width: '400px',
            height: '400px',
            borderRadius: shape.type === 'circle' ? '50%' : 
                         shape.type === 'triangle' ? '0' : '20px'
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;