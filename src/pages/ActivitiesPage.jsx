import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Trophy, 
  Users, 
  Calendar,
  MapPin,
  ExternalLink,
  Star,
  Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';

const ActivitiesPage = () => {
  const activities = [
    {
      id: 'lseg-hackathon',
      title: 'LSEG Code & Conquer 2024',
      type: 'Hackathon',
      achievement: 'Winner - 1st Place',
      date: '2024',
      location: 'Sri Lanka',
      description: 'Led BitSquad team to victory in LSEG\'s prestigious hackathon, showcasing innovative problem-solving and technical excellence in financial technology.',
      team: ['Chamod Tharuka', 'Tharin Jayarathne', 'Asanka Sandaruwan', 'Harsha Chathuranga'],
      skills: ['System Design', 'Team Leadership', 'FinTech', 'Real-time Processing'],
      image: '/playground-images/lseg-award.webp',
      featured: true
    },
    {
      id: 'nasa-space-app',
      title: 'NASA Space App Challenge',
      type: 'International Competition',
      achievement: 'Global Nominee',
      date: '2023',
      location: 'Global',
      description: 'Participated in NASA\'s international hackathon, developing innovative solutions for space-related challenges using cutting-edge technology.',
      skills: ['Innovation', 'Problem Solving', 'Space Tech', 'Data Visualization'],
      featured: true
    },
    {
      id: 'tech-talks',
      title: 'Tech Community Speaker',
      type: 'Speaking Engagement',
      achievement: 'Multiple Sessions',
      date: '2023-2024',
      location: 'Sri Lanka',
      description: 'Regular speaker at tech meetups and conferences, sharing knowledge about modern web development, React ecosystem, and best practices.',
      skills: ['Public Speaking', 'Knowledge Sharing', 'Community Building'],
      featured: false
    },
    {
      id: 'open-source',
      title: 'Open Source Contributor',
      type: 'Contribution',
      achievement: 'Active Contributor',
      date: 'Ongoing',
      location: 'Global',
      description: 'Contributing to various open-source projects, helping improve tools and libraries used by developers worldwide.',
      skills: ['Open Source', 'Collaboration', 'Code Review', 'Documentation'],
      featured: false
    }
  ];

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
    hidden: { y: 30, opacity: 0 },
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
        title="Extra Activities & Achievements - Savindu Thathsara"
        description="Explore my achievements, hackathon wins, speaking engagements, and contributions to the tech community."
        keywords={['hackathon', 'achievements', 'awards', 'tech community', 'speaking']}
      />

      <div className="min-h-screen p-4 sm:p-6 lg:p-8 pt-20 pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Award className="w-8 h-8 text-yellow-400" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
                Extra Activities & Achievements
              </h1>
              <Trophy className="w-8 h-8 text-yellow-400" />
            </div>
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Beyond coding, I actively participate in hackathons, tech communities, and 
              contribute to open-source projects. Here are some highlights of my journey.
            </p>
          </motion.div>

          {/* Activities Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          >
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative glass-enhanced rounded-2xl p-6 lg:p-8 
                             border border-white/10 hover:border-white/20 
                             transition-all duration-300 card-hover h-full">
                  {/* Featured Badge */}
                  {activity.featured && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                      className="absolute top-4 right-4 px-3 py-1.5 
                               bg-gradient-to-r from-yellow-500/20 to-orange-500/20 
                               rounded-full text-xs lg:text-sm 
                               border border-yellow-500/30 
                               backdrop-blur-sm flex items-center gap-2
                               shadow-glow"
                    >
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span className="font-medium">Featured</span>
                    </motion.div>
                  )}

                  {/* Type Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-xs font-medium 
                                   bg-blue-500/20 rounded-full border border-blue-500/30
                                   text-blue-300">
                      {activity.type}
                    </span>
                    {activity.achievement && (
                      <span className="px-3 py-1 text-xs font-medium 
                                     bg-green-500/20 rounded-full border border-green-500/30
                                     text-green-300 flex items-center gap-1">
                        <Trophy className="w-3 h-3" />
                        {activity.achievement}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-text-primary 
                               group-hover:text-yellow-400 transition-colors duration-300 pr-24">
                    {activity.title}
                  </h2>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-text-secondary">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {activity.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {activity.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {activity.description}
                  </p>

                  {/* Team Members */}
                  {activity.team && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="w-4 h-4 text-text-tertiary" />
                        <span className="text-sm font-medium text-text-secondary">Team Members</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activity.team.map((member, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs bg-white/5 rounded-full border border-white/10
                                     text-text-secondary"
                          >
                            {member}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {activity.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 text-xs lg:text-sm 
                                 bg-white/5 hover:bg-white/10 
                                 rounded-full border border-white/10 
                                 hover:border-white/20
                                 transition-all duration-200
                                 text-text-secondary"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br 
                             from-yellow-500/5 via-orange-500/5 to-red-500/5 
                             opacity-0 group-hover:opacity-100 
                             transition-opacity duration-500 rounded-2xl"
                    initial={false}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: 'Hackathons', value: '5+', icon: Trophy },
              { label: 'Awards', value: '3+', icon: Award },
              { label: 'Team Projects', value: '10+', icon: Users },
              { label: 'Speaking Events', value: '8+', icon: Sparkles }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="glass-enhanced rounded-xl p-6 text-center border border-white/10
                         hover:border-white/20 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
                <div className="text-3xl font-bold text-text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ActivitiesPage;

