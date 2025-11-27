import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
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

      <div className="min-h-screen p-4 sm:p-6 lg:p-8 pt-20 pb-32">
        <div className="max-w-7xl mx-auto pb-8">
          {/* Header Section */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-blue-400" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">Innovation Playground</h1>
              <Sparkles className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Welcome to my experimental space where I push the boundaries of web technology
              and create unique digital experiences.
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
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white" />
            </div>
          )}

          {/* Empty State */}
          {!loading && innovations.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/60">No innovations found.</p>
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
