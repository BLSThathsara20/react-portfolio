import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Star, Users, Activity } from 'lucide-react';
import parse from 'html-react-parser';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80"
          onClick={onClose}
        >
          {/* Border Glow Container */}
          <div className="relative">
            {/* Animated Border Effect */}
            <motion.div
              className="absolute -inset-[2px] rounded-2xl opacity-75"
              style={{
                background: `linear-gradient(90deg, 
                  rgba(59, 130, 246, 0.3) 0%,
                  rgba(147, 51, 234, 0.3) 33%,
                  rgba(236, 72, 153, 0.3) 66%,
                  rgba(59, 130, 246, 0.3) 100%
                )`,
                backgroundSize: '200% 100%',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 0%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: 'linear',
              }}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ 
                scale: 0.95,
                opacity: 0,
                y: -20,
                transition: { 
                  duration: 0.2,
                  ease: 'easeInOut'
                }
              }}
              transition={{ 
                duration: 0.3,
                ease: 'easeOut'
              }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto 
                       bg-background-lighter rounded-2xl shadow-xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 opacity-30"
                     style={{
                       background: `
                         linear-gradient(90deg, 
                           transparent, 
                           rgba(255,255,255,0.2), 
                           transparent
                         )
                       `,
                       transform: 'translateX(-100%)',
                       animation: 'shimmer 2s infinite'
                     }}
                />
              </div>

              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/20 
                         backdrop-blur-sm hover:bg-black/40 transition-colors z-10 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 group-hover:text-red-400 transition-colors" />
              </motion.button>

              {/* Project Image */}
              <div className="relative aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-lighter" />
              </div>

              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-white/5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="p-4 bg-white/5 rounded-xl">
                      <Users className="w-5 h-5 mb-2 text-blue-400" />
                      <div className="text-2xl font-bold">{project.metrics.users || project.metrics.players}</div>
                      <div className="text-sm text-white/60">Users</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                      <Activity className="w-5 h-5 mb-2 text-green-400" />
                      <div className="text-2xl font-bold">{project.metrics.songs || project.metrics.matches}</div>
                      <div className="text-sm text-white/60">Activities</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                      <Star className="w-5 h-5 mb-2 text-yellow-400" />
                      <div className="text-2xl font-bold">{project.metrics.rating}</div>
                      <div className="text-sm text-white/60">Rating</div>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="space-y-6">
                  <section>
                    <h3 className="text-xl font-bold mb-3">Overview</h3>
                    <p className="text-white/80">{project.fullDescription.overview}</p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold mb-3">Challenge</h3>
                    <p className="text-white/80">{project.fullDescription.challenge}</p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold mb-3">Solution</h3>
                    <div className="text-white/80">{parse(project.fullDescription.solution)}</div>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold mb-3">Key Features</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {project.fullDescription.keyFeatures.map((feature, i) => (
                        <div key={i} className="p-4 bg-white/5 rounded-xl">
                          <h4 className="font-bold mb-2">{feature.title}</h4>
                          <p className="text-white/60">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold mb-3">Tech Stack</h3>
                    <div className="space-y-3">
                      {Object.entries(project.fullDescription.technicalDetails).map(([category, items]) => (
                        <div key={category}>
                          <h4 className="text-sm font-bold text-white/60 mb-2 capitalize">{category}</h4>
                          <div className="flex flex-wrap gap-2">
                            {items.map((item, i) => (
                              <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                {/* Actions */}
                <div className="flex gap-4 mt-8">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-blue-500/20 rounded-xl
                               hover:bg-blue-500/30 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-xl
                               hover:bg-white/10 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal; 