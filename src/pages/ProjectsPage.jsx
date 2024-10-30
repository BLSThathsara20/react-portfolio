import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Loader2, Code } from 'lucide-react';
import EmptyState from '../components/EmptyState';
import Badge from '../components/Badge';
import { projects } from '../data/projects'; // Import the projects data
import ErrorBoundary from '../components/ErrorBoundary';

const ProjectCard = React.forwardRef(({ project, isGithubProject = false }, ref) => {
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
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500
                   group-hover:scale-110"
          onError={(e) => {
            e.target.src = '/api/placeholder/600/300';
          }}
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

const ProjectsPage = () => {
  const [starredRepos, setStarredRepos] = useState([]);
  const [apiStatus, setApiStatus] = useState('loading');
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Web', 'Woocommerce', 'JS Framework', 'GitHub'];

  // Fetch starred repos and their languages
  useEffect(() => {
    const fetchStarredRepos = async () => {
      try {
        setApiStatus('loading');
        const response = await fetch(
          'https://api.github.com/users/BLSThathsara20/starred',
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
            }
          }
        );

        if (!response.ok) throw new Error('Failed to fetch starred repos');
        const repos = await response.json();

        // Fetch languages for each repo
        const reposWithLanguages = await Promise.all(
          repos.map(async (repo) => {
            const langResponse = await fetch(repo.languages_url, {
              headers: {
                Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
              }
            });
            const languages = await langResponse.json();
            return { ...repo, languages };
          })
        );

        setStarredRepos(reposWithLanguages);
        setApiStatus('online');
      } catch (error) {
        console.error('Error fetching starred repos:', error);
        setApiStatus('offline');
      }
    };

    fetchStarredRepos();
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'GitHub') return [];
    if (activeCategory === 'All') return projects;
    return projects.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen p-8"
    >
      {/* API Status Badge */}
      <Badge status={apiStatus} />

      <div className="max-w-6xl mx-auto pt-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Projects</h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              A collection of my latest projects and starred GitHub repositories,
              showcasing my skills in web development and design.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-colors
                          text-sm sm:text-base
                          ${activeCategory === category 
                            ? 'bg-white/20' 
                            : 'bg-white/5 hover:bg-white/10'}`}
              >
                {category === 'GitHub' && <Github className="inline-block w-4 h-4 mr-2" />}
                {category}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {activeCategory === 'GitHub' ? (
                apiStatus === 'loading' ? (
                  <div className="col-span-full flex justify-center py-20">
                    <Loader2 className="w-8 h-8 animate-spin" />
                  </div>
                ) : starredRepos.length > 0 ? (
                  starredRepos.map((repo) => (
                    <ProjectCard 
                      key={repo.id} 
                      project={repo} 
                      isGithubProject={true} 
                    />
                  ))
                ) : (
                  <div className="col-span-full">
                    <EmptyState message="No starred repositories found" />
                  </div>
                )
              ) : filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                <div className="col-span-full">
                  <EmptyState 
                    message={`No projects found in ${activeCategory} category`} 
                  />
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;