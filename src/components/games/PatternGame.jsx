import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, X, Info, PlayCircle, RotateCcw } from 'lucide-react';

const PatternGame = () => {
  const [pattern, setPattern] = useState([]);
  const [playerPattern, setPlayerPattern] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [showTutorial, setShowTutorial] = useState(false);
  const [gameState, setGameState] = useState('idle'); // idle, playing, failed, success

  const colors = [
    { bg: 'bg-blue-500', hover: 'hover:bg-blue-400' },
    { bg: 'bg-purple-500', hover: 'hover:bg-purple-400' },
    { bg: 'bg-green-500', hover: 'hover:bg-green-400' },
    { bg: 'bg-yellow-500', hover: 'hover:bg-yellow-400' }
  ];

  const tutorial = {
    title: "Pattern Memory Game",
    description: "Test your memory by repeating the pattern!",
    steps: [
      "Watch the pattern of colors that lights up",
      "After the pattern finishes, click the colors in the same order",
      "Each successful round adds one more color to remember",
      "Make a mistake and the game resets - try to beat your high score!"
    ],
    tips: [
      "Try to associate each color with a sound or word",
      "Focus on the first and last colors in longer patterns",
      "Take your time - there's no rush to input the pattern"
    ]
  };

  const startGame = () => {
    const newPattern = [Math.floor(Math.random() * 4)];
    setPattern(newPattern);
    setPlayerPattern([]);
    setIsPlaying(true);
    setGameState('playing');
    playPattern(newPattern);
  };

  const playPattern = async (currentPattern) => {
    setGameState('playing');
    for (let color of currentPattern) {
      await new Promise(resolve => setTimeout(resolve, 500));
      setPattern(prev => [...prev]);
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    setGameState('waiting');
  };

  const handleColorClick = (colorIndex) => {
    if (gameState !== 'waiting') return;

    const newPlayerPattern = [...playerPattern, colorIndex];
    setPlayerPattern(newPlayerPattern);

    // Check if player pattern matches so far
    for (let i = 0; i < newPlayerPattern.length; i++) {
      if (newPlayerPattern[i] !== pattern[i]) {
        setGameState('failed');
        setTimeout(() => {
          setScore(0);
          setGameState('idle');
          setPattern([]);
          setPlayerPattern([]);
        }, 1000);
        return;
      }
    }

    // If player completed the pattern correctly
    if (newPlayerPattern.length === pattern.length) {
      setGameState('success');
      setScore(score + 1);
      setTimeout(() => {
        const newPattern = [...pattern, Math.floor(Math.random() * 4)];
        setPattern(newPattern);
        setPlayerPattern([]);
        playPattern(newPattern);
      }, 1000);
    }
  };

  return (
    <div className="relative">
      {/* Game Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold">Pattern Memory</h3>
          <p className="text-white/60">Score: {score}</p>
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
            onClick={startGame}
            disabled={gameState === 'playing'}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {gameState === 'idle' ? (
              <PlayCircle className="w-5 h-5" />
            ) : (
              <RotateCcw className="w-5 h-5" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Game Grid */}
      <div className="grid grid-cols-2 gap-4 aspect-square">
        {colors.map((color, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleColorClick(index)}
            disabled={gameState !== 'waiting'}
            className={`rounded-xl ${color.bg} ${color.hover} transition-colors
                     disabled:opacity-50 disabled:cursor-not-allowed
                     ${pattern[playerPattern.length] === index && 
                       gameState === 'playing' ? 'ring-4 ring-white' : ''}`}
          />
        ))}
      </div>

      {/* Game State Indicator */}
      <AnimatePresence>
        {gameState === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute inset-0 flex items-center justify-center 
                     bg-green-500/20 backdrop-blur-sm rounded-xl"
          >
            <p className="text-2xl font-bold">Perfect! 🎉</p>
          </motion.div>
        )}
        {gameState === 'failed' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute inset-0 flex items-center justify-center 
                     bg-red-500/20 backdrop-blur-sm rounded-xl"
          >
            <p className="text-2xl font-bold">Game Over! 💔</p>
          </motion.div>
        )}
      </AnimatePresence>

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

export default PatternGame;