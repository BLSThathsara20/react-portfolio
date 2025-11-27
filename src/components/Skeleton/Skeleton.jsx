import React from 'react';
import { motion } from 'framer-motion';

const SkeletonCard = () => {
  return (
    <div className="glass-enhanced rounded-2xl p-6 lg:p-8 border border-white/10">
      <div className="skeleton h-8 w-8 rounded-lg mb-5" />
      <div className="skeleton h-6 w-3/4 rounded mb-3" />
      <div className="skeleton h-4 w-full rounded mb-2" />
      <div className="skeleton h-4 w-5/6 rounded mb-6" />
      <div className="flex flex-wrap gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="skeleton h-6 w-20 rounded-full" />
        ))}
      </div>
    </div>
  );
};

const SkeletonProject = () => {
  return (
    <div className="glass-enhanced rounded-2xl p-6 lg:p-8 border border-white/10">
      <div className="skeleton h-6 w-2/3 rounded mb-3" />
      <div className="skeleton h-4 w-full rounded mb-2" />
      <div className="skeleton h-4 w-4/5 rounded mb-6" />
      <div className="flex flex-wrap gap-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="skeleton h-6 w-16 rounded-full" />
        ))}
      </div>
    </div>
  );
};

export { SkeletonCard, SkeletonProject };

