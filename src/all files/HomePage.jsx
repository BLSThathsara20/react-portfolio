import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail,
  Globe,
  Code,
  Laptop,
  MonitorSmartphone,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import BackgroundVideo from '../components/BackgroundVideo';
import fortudeSS from '../assets/projects/fortude-web.webp';
import HexaSS from '../assets/projects/hexacode.webp';

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [projectHovered, setProjectHovered] = useState(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX - window.innerWidth / 2);
      mouseY.set(clientY - window.innerHeight / 2);
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const featuredProjects = [
    {
      title: "Fortude",
      description: "A responsive, custom WordPress theme combining classic design with a modern UI.",
      tech: ["Wordpress", "Bootstrap", "Sass", "Jquary", "GSAP"],
      image: fortudeSS,
      link: "https://fortude.co/"
    },
    {
      title: "Hexacode",
      description: "Top-tier UI/UX design with a minimalist touch, tailored for a digital marketing company.",
      tech: ["HTML", "Sass", "Jquary"],
      image: HexaSS,
      link: "https://hexacode.lk/"
    }
  ];

  const specialties = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, efficient code following best practices"
    },
    {
      icon: MonitorSmartphone,
      title: "Responsive Design",
      description: "Creating seamless experiences across all devices"
    },
    {
      icon: Sparkles,
      title: "Animations",
      description: "Bringing interfaces to life with smooth animations"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundVideo />
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-8"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Main Content */}
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative mb-8"
            >
              {/* Animated background elements */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 
                         rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <h1 className="relative text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent 
                         bg-gradient-to-r from-white to-white/60 leading-tight">
                Web Developer
              </h1>
            </motion.div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl text-white/60 max-w-3xl mb-12"
            >
              Crafting engaging digital experiences through modern web technologies
              and creative animations
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link
                to="/projects"
                className="group relative px-8 py-4 bg-white/10 hover:bg-white/20 
                         rounded-xl backdrop-blur-sm border border-white/10 
                         transition-colors overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                           opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    x: useTransform(springX, [-800, 800], [-100, 100]),
                    y: useTransform(springY, [-800, 800], [-100, 100]),
                  }}
                />
                <span className="relative flex items-center gap-2">
                  View My Work
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                to="/contact"
                className="px-8 py-4 bg-blue-500/20 hover:bg-blue-500/30 
                         rounded-xl backdrop-blur-sm border border-blue-500/20 
                         transition-colors"
              >
                Let's Talk
              </Link>
            </motion.div>
          </div>

          {/* Featured Projects */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ x: index === 0 ? -50 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                onHoverStart={() => setProjectHovered(index)}
                onHoverEnd={() => setProjectHovered(null)}
                className="group relative bg-white/10 backdrop-blur-lg rounded-xl 
                         overflow-hidden border border-white/20"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500
                             group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Project Info */}
                <div className="relative p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 
                              transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-white/5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                  target="_blank"
                    to={project.link}
                    className="inline-flex items-center gap-2 text-blue-400 
                             group-hover:text-blue-300"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Specialties */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.2 }}
                className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 
                         border border-white/20 hover:border-white/30 
                         transition-all duration-300"
              >
                <specialty.icon 
                  className="w-8 h-8 mb-4 text-white/60 group-hover:text-blue-400 
                           transition-colors" 
                />
                <h3 className="text-lg font-bold mb-2">{specialty.title}</h3>
                <p className="text-white/60">{specialty.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Social Links - Fixed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="fixed left-4 bottom-32 z-20 flex flex-col gap-4"
      >
        {[
          { icon: Github, href: "https://github.com/BLSThathsara20" },
          { icon: Linkedin, href: "https://linkedin.com/in/blsthathsara" },
          { icon: Mail, href: "mailto:blsthathsara@gmail.com" },
          { icon: Globe, href: "https://blsthathsara.me" }
        ].map((social, index) => (
          <motion.a
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.6 + index * 0.1 }}
            whileHover={{ scale: 1.2, x: 5 }}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg 
                     backdrop-blur-sm border border-white/10 
                     transition-colors"
          >
            <social.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default HomePage;