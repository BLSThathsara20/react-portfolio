import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import SEO from '../components/SEO';

const categories = ['All', 'Automation', 'Web', 'E-commerce', 'JS Framework'];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <SEO
        title="Work"
        description="Selected automation and web delivery projects by Savindu Thathsara — dealership workflows, NGO platforms, brand sites, and e-commerce."
        keywords={['Projects', 'Automation', 'Web development', 'UI UX', 'Portfolio']}
      />

      <div className="page-shell">
        <section className="section-pad pb-8">
          <div className="container-wide max-w-3xl">
            <p className="eyebrow mb-4">Work</p>
            <h1 className="display-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Selected systems
            </h1>
            <p className="body-lg">
              Automation wins and shipped interfaces — from operational tooling at Asahi
              Motors London to brand platforms delivered at scale.
            </p>
          </div>
        </section>

        <section className="section-pad pt-0">
          <div className="container-wide">
            <div className="flex flex-wrap gap-2 mb-8 sm:mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full font-sans text-sm transition-all ${
                    activeCategory === category
                      ? 'bg-accent text-surface font-semibold'
                      : 'border border-border text-ink-soft hover:border-accent/40 hover:text-ink'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
              <AnimatePresence mode="popLayout">
                {filtered.map((project, i) => (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 1, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className={`bento-cell group ${
                      project.highlight && i === 0 ? 'md:col-span-2' : ''
                    }`}
                  >
                    {project.image ? (
                      <div className="aspect-[16/9] overflow-hidden border-b border-border">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/9] bg-accent/[0.08] border-b border-border flex items-end p-6 relative overflow-hidden">
                        <div className="absolute inset-0 grid-fade opacity-50" />
                        <p className="relative font-display text-3xl font-semibold tracking-tight">
                          {project.title}
                        </p>
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                          {project.category}
                        </span>
                        {project.highlight && (
                          <span className="font-mono text-[10px] text-ink-muted uppercase tracking-wider">
                            Featured
                          </span>
                        )}
                      </div>
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
                        {project.title}
                      </h2>
                      <p className="body-lg text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="skill-chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-4">
                        {project.liveUrl && (
                          <a
                            href={
                              project.liveUrl.startsWith('http')
                                ? project.liveUrl
                                : `https://${project.liveUrl}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent"
                          >
                            Live site
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-accent"
                          >
                            <Github className="w-3.5 h-3.5" />
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectsPage;
