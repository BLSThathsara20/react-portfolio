import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import InnovationCard from '../components/InnovationCard';
import ProjectModal from '../components/ProjectModal';

const PlaygroundPage = () => {
  const [innovations, setInnovations] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInnovations = async () => {
      try {
        const response = await fetch('/playground-content.json');
        const data = await response.json();
        setInnovations(data.innovations);
      } catch (error) {
        console.error('Error loading innovations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInnovations();
  }, []);

  return (
    <>
      <SEO 
        title="Innovation Playground - Creative Experiments"
        description="Explore my latest experiments and innovative projects in web development, AI, and creative coding."
      />

      <div className="page-shell section-pad">
        <div className="container-narrow pb-8">
          {/* Header Section */}
        <motion.div
            initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
            className="mb-16 max-w-2xl"
        >
            <p className="eyebrow mb-4">Experiments</p>
              <h1 className="section-title mb-4">Innovation playground</h1>
            <p className="body-lg">
              A quieter space for experiments and side projects — secondary to the core AI & automation work.
          </p>
        </motion.div>

          {/* Innovations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovations.map((innovation, index) => (
              <InnovationCard 
                key={innovation.id} 
                innovation={innovation} 
                index={index}
                onSelect={setSelectedProject}
              />
            ))}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent" />
  </div>
          )}

          {/* Empty State */}
          {!loading && innovations.length === 0 && (
            <div className="text-center py-20">
              <p className="text-ink-muted">No innovations found.</p>
      </div>
          )}
          </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default PlaygroundPage;
