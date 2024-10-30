import React from 'react';
import { motion } from 'framer-motion';

const CreativeNav = ({ sections, activeSection, onClick }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="relative">
        <div className="absolute left-[26px] top-0 bottom-0 w-px bg-gradient-to-b 
                      from-blue-500/20 via-purple-500/20 to-transparent" />
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              onClick={() => onClick(section.id)}
              className="group relative flex items-center gap-4"
              whileHover="hover"
            >
              {activeSection === section.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 right-0 h-14 -inset-x-3 rounded-xl
                           bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                />
              )}
              <motion.div
                variants={{
                  hover: { scale: 1.2, rotate: 10 }
                }}
                className={`relative z-10 w-14 h-14 rounded-xl flex items-center 
                         justify-center transition-colors
                         ${activeSection === section.id 
                           ? 'bg-white/20 shadow-lg' 
                           : 'bg-white/5 hover:bg-white/10'}`}
              >
                <section.icon 
                  className={`w-6 h-6 ${activeSection === section.id 
                    ? 'text-blue-400' 
                    : 'text-white/60 group-hover:text-white'}`} 
                />
              </motion.div>
              <motion.div
                variants={{
                  hover: { x: 10, opacity: 1 }
                }}
                className="relative z-10 opacity-0 group-hover:opacity-100 
                         transition-opacity"
              >
                <motion.p 
                  className={`text-sm font-medium ${activeSection === section.id 
                    ? 'text-white' 
                    : 'text-white/60'}`}
                >
                  {section.title}
                </motion.p>
                <p className="text-xs text-white/40">{section.description}</p>
              </motion.div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CreativeNav;