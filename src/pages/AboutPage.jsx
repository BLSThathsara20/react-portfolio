import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight,
  Code,
  Brain,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/unnamed.png';

const AboutPage = () => {
  const specialties = [
    {
      icon: Code,
      title: "Frontend Specialist",
      description: "Crafting responsive and interactive web experiences using modern frameworks and technologies.",
      skills: ["React", "Vue.js", "Tailwind CSS", "GSAP"]
    },
    {
      icon: Brain,
      title: "Problem Solver",
      description: "Passionate about finding elegant solutions to complex problems through clean and efficient code.",
      skills: ["Performance", "Optimization", "Clean Code"]
    },
    {
      icon: Rocket,
      title: "Innovation Focused",
      description: "Always exploring new technologies and approaches to create better user experiences.",
      skills: ["Modern UI", "Animations", "User Experience"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen p-4 sm:p-8 pb-32"
    >
      <div className="max-w-6xl mx-auto pt-20">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="relative"
          >
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden 
                          border-2 border-white/20 backdrop-blur-lg">
              <img
                src={profileImage}
                alt="Savindu Thaththsara"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Animated background elements */}
            <motion.div 
              className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                       rounded-2xl blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 45, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>

          {/* Intro Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl font-bold">
                Hi, I'm Savindu 👋
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                A web developer passionate about creating engaging web experiences. 
                I specialize in building responsive, animated interfaces that users love.
              </p>
              
              {/* Social Links */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/BLSThathsara20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 
                           hover:bg-white/20 rounded-xl backdrop-blur-sm 
                           border border-white/10 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com/in/blsthathsara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 
                           hover:bg-white/20 rounded-xl backdrop-blur-sm 
                           border border-white/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:blsthathsara@gmail.com"
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 
                           hover:bg-white/20 rounded-xl backdrop-blur-sm 
                           border border-white/10 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Email Me
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Specialties Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 
                       border border-white/20 hover:border-white/30 
                       transition-all duration-300"
            >
              <specialty.icon className="w-10 h-10 mb-4 text-white/60 
                                     group-hover:text-blue-400 transition-colors" />
              <h3 className="text-xl font-bold mb-3">{specialty.title}</h3>
              <p className="text-white/60 mb-4">{specialty.description}</p>
              <div className="flex flex-wrap gap-2">
                {specialty.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/5 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Resume Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <Link
            to="/resume"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500/20 
                     hover:bg-blue-500/30 rounded-xl backdrop-blur-sm 
                     border border-blue-500/20 transition-colors group"
          >
            <span>View Full Resume</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;