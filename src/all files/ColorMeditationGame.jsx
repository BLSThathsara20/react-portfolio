import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, X, Info, PlayCircle, PauseCircle, Settings } from 'lucide-react';

const ColorMeditationGame = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [currentColor, setCurrentColor] = useState(0);
  const [breatheState, setBreatheState] = useState('inhale'); // inhale, hold, exhale
  const [settings, setSettings] = useState({
    duration: 4000,
    holdDuration: 2000,
  });

  const colors = [
    { bg: 'from-blue-500 to-purple-500', name: 'Calm' },
    { bg: 'from-green-500 to-emerald-500', name: 'Peace' },
    { bg: 'from-purple-500 to-pink-500', name: 'Focus' },
    { bg: 'from-orange-500 to-yellow-500', name: 'Energy' },
  ];

  const tutorial = {
    title: "Color Breathing Meditation",
    description: "A peaceful breathing exercise with colors to help you relax and focus.",
    steps: [
      "Find a comfortable position and focus on the changing colors",
      "Breathe in as the circle expands",
      "Hold your breath when the circle stops",
      "Breathe out as the circle contracts"
    ],
    tips: [
      "Try to match your breathing with the animation",
      "Keep your focus on the center of the circle",
      "Let your mind follow the gentle color transitions",
      "If your mind wanders, gently bring it back to your breath"
    ]
  };

  useEffect(() => {
    let intervalId;

    if (isPlaying) {
      const cycle = () => {
        // Inhale
        setBreatheState('inhale');
        setTimeout(() => {
          // Hold
          setBreatheState('hold');
          setTimeout(() => {
            // Exhale
            setBreatheState('exhale');
            setTimeout(() => {
              // Change color at the end of exhale
              setCurrentColor((prev) => (prev + 1) % colors.length);
            }, settings.duration);
          }, settings.holdDuration);
        }, settings.duration);
      };

      cycle();
      intervalId = setInterval(cycle, settings.duration * 2 + settings.holdDuration);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isPlaying, settings.duration, settings.holdDuration]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative">
      {/* Game Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold">Color Meditation</h3>
          <p className="text-white/60">{colors[currentColor].name}</p>
        </div>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowTutorial(true)}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20"
          >
            <Book className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20"
          >
            {isPlaying ? (
              <PauseCircle className="w-5 h-5" />
            ) : (
              <PlayCircle className="w-5 h-5" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Meditation Circle */}
      <div className="relative aspect-square flex items-center justify-center">
        <motion.div
          animate={{
            scale: breatheState === 'inhale' ? 1 : 
                   breatheState === 'hold' ? 1 : 0.5,
          }}
          transition={{
            duration: breatheState === 'hold' ? 0 : settings.duration / 1000,
            ease: "easeInOut"
          }}
          className={`w-4/5 h-4/5 rounded-full bg-gradient-to-br ${
            colors[currentColor].bg
          } flex items-center justify-center`}
        >
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-2xl font-bold text-white/80"
          >
            {breatheState === 'inhale' ? 'Breathe In' :
             breatheState === 'hold' ? 'Hold' : 'Breathe Out'}
          </motion.div>
        </motion.div>
      </div>

      {/* Tutorial Modal */}
      <AnimatePresence>
        {showTutorial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowTutorial(false)}
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-gray-900/90 text-white rounded-xl 
                       shadow-xl border border-white/10 backdrop-blur-lg 
                       max-w-md w-full"
            >
              <button
                onClick={() => setShowTutorial(false)}
                className="absolute top-4 right-4 p-2 rounded-lg 
                         bg-white/10 hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{tutorial.title}</h3>
                <p className="text-white/60 mb-6">{tutorial.description}</p>

                <div className="space-y-6">
                  <div className="space-y-4">
                    {tutorial.steps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-4"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full 
                                    bg-white/10 flex items-center justify-center">
                          {index + 1}
                        </div>
                        <p className="text-white/80">{step}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Info className="w-4 h-4" />
                      Tips
                    </h4>
                    <ul className="space-y-2 text-white/60">
                      {tutorial.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-400">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorMeditationGame;