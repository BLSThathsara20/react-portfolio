import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import profileImage from '../../assets/unnamed.png';  // Use same profile image

const MediumProfile = () => {
  const [followers, setFollowers] = useState(null);
  const MEDIUM_USERNAME = 'blsthathsara';

  const handleFollowClick = () => {
    window.open(`https://medium.com/@${MEDIUM_USERNAME}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 
                 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 mb-8
                 gap-4 sm:gap-0"
    >
      <div className="flex items-center gap-4">
        <img 
          src={profileImage} 
          alt="Savindu Thaththsara"
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg sm:text-xl font-bold">Savindu Thaththsara</h2>
          <p className="text-white/60">@{MEDIUM_USERNAME}</p>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleFollowClick}
        className="w-full sm:w-auto flex items-center justify-center gap-2 
                   px-6 py-2 bg-green-500/20 hover:bg-green-500/30
                   rounded-full transition-colors"
      >
        <span>Follow on Medium</span>
      </motion.button>
    </motion.div>
  );
};

export default MediumProfile;