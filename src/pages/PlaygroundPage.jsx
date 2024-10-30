import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Palette,
  Lightbulb,
  Gamepad2,
  X,
  ExternalLink,
  Play,
} from "lucide-react";

// Component imports
import CreativeNav from "../components/CreativeNav";
import CodePreview from "../components/experiments/CodePreview";
import { SpaceShooter, PatternGame } from '../components/games';

// Import images
import favIcon from '@/assets/ss.webp';

const PlaygroundPage = () => {
  const [activeSection, setActiveSection] = useState("");
  const [activeGame, setActiveGame] = useState(null);

  const sections = [
    {
      id: "animations",
      icon: Palette,
      title: "Creative Animations",
      description:
        "Interactive animations pushing the boundaries of web design",
      color: "from-blue-500 to-purple-500",
    },
    {
      id: "experiments",
      icon: Lightbulb,
      title: "Web Experiments",
      description: "Innovative experiments showcasing modern web capabilities",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "games",
      icon: Gamepad2,
      title: "Mind Games",
      description: "Interactive games to challenge and relax your mind",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const animationExamples = [
    {
      title: "Hover Glow Button",
      description: "A modern button with dynamic glow effect on hover",
      preview: (
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 
                 rounded-lg font-bold text-white relative overflow-hidden
                 group"
        >
          <div
            className="absolute inset-0 bg-white/20 translate-y-full
                      group-hover:translate-y-0 transition-transform"
          />
          <span className="relative">Hover Me</span>
        </motion.button>
      ),
      html: `<button class="glow-button">
  Hover Me
</button>`,
      css: `.glow-button {
  padding: 12px 24px;
  background: linear-gradient(45deg, #4F46E5, #7C3AED);
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
}

.glow-button::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
  transform: scale(0);
  transition: transform 0.5s;
}

.glow-button:hover::before {
  transform: scale(1);
}

.glow-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px -10px rgba(79, 70, 229, 0.5);
}`,
    },
    {
      title: "Magnetic Card Effect",
      description: "Card that follows cursor movement with magnetic effect",
      preview: (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-6 bg-gradient-to-br from-gray-800 to-gray-900
                 rounded-xl cursor-pointer group"
        >
          <motion.div whileHover={{ y: -5 }} className="space-y-2">
            <h3
              className="font-bold text-lg group-hover:text-blue-400
                       transition-colors"
            >
              Hover Me
            </h3>
            <p className="text-sm text-white/60">Watch the magnetic effect</p>
          </motion.div>
        </motion.div>
      ),
      html: `<div class="magnetic-card">
  <h3>Hover Me</h3>
  <p>Watch the magnetic effect</p>
</div>`,
      css: `.magnetic-card {
  padding: 24px;
  background: linear-gradient(45deg, #1F2937, #111827);
  border-radius: 16px;
  transition: transform 0.2s;
}`,
      js: `document.querySelector('.magnetic-card').addEventListener('mousemove', (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const rotateX = (y - centerY) / 10;
  const rotateY = (centerX - x) / 10;
  
  card.style.transform = 
    \`perspective(1000px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
});

document.querySelector('.magnetic-card').addEventListener('mouseleave', (e) => {
  e.currentTarget.style.transform = 'none';
});`,
    },
  ];

  const games = [
    {
      id: "pattern",
      title: "Pattern Master",
      description:
        "Test your memory by repeating increasingly complex patterns",
      benefits: [
        "Improves short-term memory",
        "Enhances concentration",
        "Develops pattern recognition",
      ],
      component: PatternGame,
    },
    {
      id: "space-shooter",
      title: "Space Defender",
      description:
        "Navigate through space, avoid enemies, and protect your ship",
      benefits: [
        "Improves hand-eye coordination",
        "Enhances reflexes",
        "Develops multitasking ability",
        "Tests strategic thinking",
      ],
      component: SpaceShooter,
    },
  ];

  const handleSectionChange = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <CreativeNav
        sections={sections}
        activeSection={activeSection}
        onClick={handleSectionChange}
      />

      <div className="max-w-6xl mx-auto p-4 sm:p-8 pt-20">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-20"
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4 inline-flex 
                     items-center gap-3"
          >
            <Sparkles className="w-8 h-8 text-blue-400" />
            Creative Lab
          </motion.h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Explore interactive experiments, mind-bending animations, and
            creative innovations in web development.
          </p>
        </motion.div>

        {/* Animations Section */}
        <section id="animations" className="mb-32 scroll-mt-32">
          <div className="text-center mb-12">
            <motion.div
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500
                       mx-auto flex items-center justify-center mb-4"
            >
              <Palette className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold mb-2">Creative Animations</h2>
            <p className="text-white/60">
              Interactive animations and hover effects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {animationExamples.map((example, index) => (
              <CodePreview
                key={index}
                title={example.title}
                description={example.description}
                preview={example.preview}
                html={example.html}
                css={example.css}
                js={example.js}
              />
            ))}
          </div>
        </section>

        {/* Experiments Section */}
        <section id="experiments" className="mb-32 scroll-mt-32">
  <div className="text-center mb-12">
    <motion.div
      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500
                 mx-auto flex items-center justify-center mb-4"
    >
      <Lightbulb className="w-8 h-8 text-white" />
    </motion.div>
    <h2 className="text-3xl font-bold mb-2">Web Experiments</h2>
    <p className="text-white/60">Innovative web development solutions</p>
  </div>

  <div className="grid grid-cols-1 gap-6">
  <CodePreview
  title="Auto-hiding Fixed Navbar"
  description="A modern fixed navbar that automatically hides on scroll down and shows on scroll up"
  preview={
    <div className="relative w-full rounded-lg overflow-hidden bg-white/5">
      <img 
        src={favIcon}  // Use the imported image
        alt="Fixed Navbar Preview"
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 
                     flex items-end justify-start p-4">
        <p className="text-sm text-white/90">
          Interactive navbar that responds to scroll behavior
        </p>
      </div>
    </div>
  }
  html={`<nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-default">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbarNav" aria-controls="navbarNav" 
            aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <!-- Navigation Links -->
    </div>
</nav>`}
      css={`.navbar {
  transition: background-color 0.3s, transform 0.3s;

  &.scrolled {
      background-color: red;
  }

  &.navbar-hidden {
      transform: translateY(-100%);
  }

  &.navbar-visible {
      transform: translateY(0);
  }
}

// Default state
.navbar-default {
  background-color: white;
}`}
      js={`var lastScrollTop = 0, navbar = $('.navbar');
var navbarHeight = navbar.outerHeight();

$(window).on('scroll', function () {
    var currentScroll = $(this).scrollTop();

    navbar.toggleClass('navbar-hidden', 
      currentScroll > lastScrollTop && currentScroll > navbarHeight)
          .toggleClass('navbar-visible', 
      currentScroll <= lastScrollTop || currentScroll <= navbarHeight)
          .toggleClass('scrolled', currentScroll > navbarHeight);

    lastScrollTop = currentScroll;
});`}
    />
  </div>
</section>

        {/* Games Section */}
        <section id="games" className="scroll-mt-32">
          <div className="text-center mb-12">
            <motion.div
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500
                       mx-auto flex items-center justify-center mb-4"
            >
              <Gamepad2 className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold mb-2">Mind Games</h2>
            <p className="text-white/60">
              Challenge your mind with interactive games
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {games.map((game) => (
              <motion.div
                key={game.id}
                whileHover={{ y: -5 }}
                className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 
                         border border-white/20"
              >
                <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                <p className="text-white/60 mb-4">{game.description}</p>

                <div className="space-y-2 mb-6">
                  <h4 className="font-medium">Benefits:</h4>
                  <ul className="space-y-1">
                    {game.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="text-white/60 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveGame(game)}
                  className="w-full py-3 flex items-center justify-center gap-2 
                           bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <Play className="w-5 h-5" />
                  Play Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Game Modal */}
      <AnimatePresence>
        {activeGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 
             overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-gray-900/90 rounded-xl w-full max-w-4xl mx-auto 
               my-4 overflow-hidden border border-white/20 backdrop-blur-lg"
            >
              <div
                className="sticky top-0 z-10 flex justify-between items-center p-4 
                   bg-gray-900/90 border-b border-white/10 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold">{activeGame.title}</h3>
                <button
                  onClick={() => setActiveGame(null)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4">
                <activeGame.component onClose={() => setActiveGame(null)} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PlaygroundPage;
