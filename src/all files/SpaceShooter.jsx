import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Heart, Star, Trophy } from 'lucide-react';

const SpaceShooter = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [playerPosition, setPlayerPosition] = useState({ x: 50, y: 80 });
  const [enemies, setEnemies] = useState([]);
  const [bullets, setBullets] = useState([]);
  const gameAreaRef = useRef(null);
  
  // Start game
  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setLives(3);
    setGameOver(false);
    setEnemies([]);
    setBullets([]);
  };

  // Handle player movement
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const handleMovement = (e) => {
      if (gameAreaRef.current) {
        const rect = gameAreaRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        setPlayerPosition({
          x: Math.max(5, Math.min(95, x)),
          y: Math.max(5, Math.min(95, y))
        });
      }
    };

    const handleTouch = (e) => {
      if (gameAreaRef.current && e.touches[0]) {
        const rect = gameAreaRef.current.getBoundingClientRect();
        const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
        const y = ((e.touches[0].clientY - rect.top) / rect.height) * 100;
        
        setPlayerPosition({
          x: Math.max(5, Math.min(95, x)),
          y: Math.max(5, Math.min(95, y))
        });
      }
    };

    window.addEventListener('mousemove', handleMovement);
    window.addEventListener('touchmove', handleTouch, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMovement);
      window.removeEventListener('touchmove', handleTouch);
    };
  }, [gameStarted, gameOver]);

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const gameLoop = setInterval(() => {
      // Move bullets
      setBullets(prev => prev.map(bullet => ({
        ...bullet,
        y: bullet.y - 2
      })).filter(bullet => bullet.y > 0));

      // Move enemies
      setEnemies(prev => prev.map(enemy => ({
        ...enemy,
        y: enemy.y + enemy.speed
      })).filter(enemy => enemy.y < 100));

      // Spawn new enemies
      if (Math.random() < 0.05) {
        setEnemies(prev => [...prev, {
          x: Math.random() * 90 + 5,
          y: 0,
          speed: Math.random() * 1 + 0.5,
          id: Date.now()
        }]);
      }

      // Check collisions
      setBullets(prev => {
        const newBullets = [...prev];
        setEnemies(prevEnemies => {
          const newEnemies = prevEnemies.filter(enemy => {
            const hitByBullet = newBullets.some((bullet, bulletIndex) => {
              if (Math.abs(bullet.x - enemy.x) < 5 && Math.abs(bullet.y - enemy.y) < 5) {
                newBullets.splice(bulletIndex, 1);
                setScore(s => s + 10);
                return true;
              }
              return false;
            });
            return !hitByBullet;
          });
          return newEnemies;
        });
        return newBullets;
      });

      // Check player collision
      setEnemies(prev => {
        const newEnemies = prev.filter(enemy => {
          if (Math.abs(enemy.x - playerPosition.x) < 5 && 
              Math.abs(enemy.y - playerPosition.y) < 5) {
            setLives(l => {
              if (l <= 1) setGameOver(true);
              return l - 1;
            });
            return false;
          }
          return true;
        });
        return newEnemies;
      });
    }, 50);

    return () => clearInterval(gameLoop);
  }, [gameStarted, gameOver, playerPosition]);

  // Shoot bullets
  const handleShoot = () => {
    if (!gameStarted || gameOver) return;
    setBullets(prev => [...prev, { x: playerPosition.x, y: playerPosition.y }]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Game Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span className="font-bold">{score}</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-400" />
            <span className="font-bold">{lives}</span>
          </div>
        </div>
      </div>

      {/* Game Area */}
      <div 
        ref={gameAreaRef}
        onClick={handleShoot}
        className="relative aspect-[4/3] bg-gray-900/50 rounded-lg overflow-hidden
                 border border-white/10 cursor-crosshair"
      >
        {!gameStarted ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={startGame}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-lg
                       flex items-center gap-2"
            >
              <Rocket className="w-5 h-5" />
              Start Game
            </motion.button>
          </div>
        ) : (
          <>
            {/* Player */}
            <motion.div
              animate={{ x: `${playerPosition.x}%`, y: `${playerPosition.y}%` }}
              transition={{ type: "spring", damping: 15 }}
              className="absolute w-6 h-6 -ml-3 -mt-3"
            >
              <Rocket className="w-full h-full text-blue-400" />
            </motion.div>

            {/* Bullets */}
            {bullets.map((bullet, index) => (
              <motion.div
                key={index}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                style={{ left: `${bullet.x}%`, top: `${bullet.y}%` }}
              />
            ))}

            {/* Enemies */}
            {enemies.map((enemy) => (
              <motion.div
                key={enemy.id}
                className="absolute w-4 h-4 -ml-2 -mt-2"
                style={{ left: `${enemy.x}%`, top: `${enemy.y}%` }}
              >
                <Star className="w-full h-full text-red-400" />
              </motion.div>
            ))}
          </>
        )}

        {/* Game Over Screen */}
        {gameOver && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/75 flex flex-col items-center 
                     justify-center gap-4"
          >
            <h3 className="text-2xl font-bold">Game Over!</h3>
            <p className="text-white/60">Final Score: {score}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={startGame}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg
                       flex items-center gap-2"
            >
              <Rocket className="w-5 h-5" />
              Play Again
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Game Instructions */}
      <div className="mt-4 p-4 bg-white/5 rounded-lg">
        <h4 className="font-bold mb-2">How to Play:</h4>
        <ul className="space-y-1 text-sm text-white/60">
          <li>• Move your ship with mouse/touch</li>
          <li>• Click/tap to shoot</li>
          <li>• Avoid enemy stars</li>
          <li>• Score points by destroying enemies</li>
        </ul>
      </div>
    </div>
  );
};

export default SpaceShooter;