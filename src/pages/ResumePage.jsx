import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  Briefcase, 
  GraduationCap,
  Award,
  Code,
  Sparkles,
  ArrowRight,
  Loader2
} from 'lucide-react';
import SEO from '../components/SEO';
import Notification from '../components/Notification';

const ResumePage = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  
  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch('/cv.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = "Savindu_Thaththsara_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const highlights = [
    {
      icon: Briefcase,
      title: "5+ Years Experience",
      description: "Crafting exceptional frontend experiences with modern web technologies",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: Code,
      title: "20+ Projects",
      description: "Delivering high-impact solutions across diverse industries",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Award,
      title: "Multiple Awards",
      description: "Including NASA Space App Challenge achievements",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: GraduationCap,
      title: "Strong Education",
      description: "HND in IT & Diploma in Software Engineering",
      gradient: "from-green-500/20 to-emerald-500/20"
    }
  ];

  const skills = [
    { name: "React", category: "frontend" },
    { name: "Vue.js", category: "frontend" },
    { name: "Jquary", category: "language" },
    { name: "Tailwind CSS", category: "styling" },
    { name: "Node.js", category: "backend" },
    { name: "GSAP", category: "animation" },
    { name: "Framer Motion", category: "animation" },
    { name: "Git", category: "tool" },
    { name: "Responsive Design", category: "concept" },
    { name: "SEO", category: "optimization" }
  ];

  // Smooth scroll animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <>
      <SEO
        title="Resume - Savindu Thaththsara"
        description="Download my resume to explore my journey in frontend development, featuring 5+ years of experience, award-winning projects, and technical expertise."
        keywords={['frontend developer', 'react developer', 'vue.js developer', 'UI developer']}
      />

      <Notification
        isOpen={showNotification}
        onClose={() => setShowNotification(false)}
        message="🎉 Resume downloaded! Thanks for your interest!"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen p-4 sm:p-6 lg:p-8 pb-32 bg-gradient-to-b from-background to-background-lighter"
      >
        <motion.div 
          className="max-w-5xl mx-auto pt-20 pb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Section with Enhanced Animation */}
          <div className="text-center mb-16 relative">
            <motion.div
              className="absolute inset-0 -z-10"
              animate={{
                background: [
                  "radial-gradient(circle at center, rgba(59,130,246,0.1) 0%, transparent 70%)",
                  "radial-gradient(circle at center, rgba(139,92,246,0.1) 0%, transparent 70%)",
                  "radial-gradient(circle at center, rgba(59,130,246,0.1) 0%, transparent 70%)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: 9999,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: 9999, repeatType: "loop", ease: "linear" }}
              >
                <Sparkles className="w-8 h-8 text-blue-400" />
              </motion.div>
              <h1 className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent 
                         bg-gradient-to-r from-white via-white/90 to-white/80">
                My Resume
              </h1>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: 9999, repeatType: "loop", ease: "linear" }}
              >
                <Sparkles className="w-8 h-8 text-blue-400" />
              </motion.div>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-xl sm:text-2xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Discover my journey in crafting exceptional digital experiences through
              modern web technologies and creative innovations.
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                disabled={isDownloading}
                className="group relative inline-flex items-center gap-3 px-8 py-4 
                         bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 
                         rounded-xl backdrop-blur-sm border border-white/10 
                         transition-all duration-300 hover:border-white/20
                         disabled:opacity-50 disabled:cursor-not-allowed
                         overflow-hidden"
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 -z-10"
                  animate={{
                    backgroundPosition: ["200% 0%", "-200% 0%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: 9999,
                    repeatType: "loop",
                    ease: "linear"
                  }}
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                    backgroundSize: "200% 100%"
                  }}
                />

                {isDownloading ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <>
                    <Download className="w-6 h-6" />
                    <span className="text-lg font-medium">Download Full Resume</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </motion.div>
          </div>

          {/* Highlights Grid with Enhanced Animations */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative bg-white/10 backdrop-blur-lg rounded-xl p-6 
                         border border-white/20 overflow-hidden"
              >
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 
                           transition-opacity duration-500 bg-gradient-to-r ${highlight.gradient}`}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: 9999,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }}
                />

                <div className="relative z-10">
                  <highlight.icon 
                    className="w-10 h-10 mb-4 text-white/60 
                             group-hover:text-white transition-colors" 
                  />
                  <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-white/60 group-hover:text-white/80 transition-colors">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Cloud with Interactive Animations */}
          <motion.div
            variants={containerVariants}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8 
                     border border-white/20 text-center"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold mb-8"
            >
              Core Skills & Technologies
            </motion.h2>
            <motion.div 
              variants={containerVariants}
              className="flex flex-wrap justify-center gap-3"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(255, 255, 255, 0.15)" 
                  }}
                  className={`px-4 py-2 rounded-full border border-white/10 
                           transition-colors cursor-default
                           ${skill.category === 'frontend' ? 'bg-blue-500/10' :
                             skill.category === 'animation' ? 'bg-purple-500/10' :
                             skill.category === 'styling' ? 'bg-pink-500/10' :
                             skill.category === 'optimization' ? 'bg-green-500/10' :
                             'bg-white/5'}`}
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ResumePage;