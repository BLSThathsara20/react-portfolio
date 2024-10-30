import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

const ProjectCard = forwardRef(({ project, isGithubProject = false, ...props }, ref) => {
  const fallbackImage = '../assets/projects/fortude-web.webp'; // Fallback image URL

  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  if (isGithubProject) {
    return (
      <motion.div
        ref={ref}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        whileHover={{ y: -5 }}
        className="group relative bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden"
        {...props}
      >
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-white/60 mt-2">{project.description || 'No description available'}</p>
            </div>
            <Github className="w-6 h-6 text-white/40" />
          </div>

          {project.languages && (
            <div className="flex flex-wrap gap-2">
              {Object.keys(project.languages).map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 text-sm bg-white/5 rounded-full"
                >
                  {lang}
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10
                       hover:bg-white/20 rounded-lg transition-colors"
            >
              <Code className="w-4 h-4" />
              View Code
            </motion.a>
            {project.homepage && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10
                         hover:bg-white/20 rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden"
      {...props}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          onError={handleImageError}
          className="w-full h-full object-cover transition-transform duration-500
                   group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-white/60">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-white/5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-4">
          {project.liveUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10
                       hover:bg-white/20 rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10
                       hover:bg-white/20 rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;