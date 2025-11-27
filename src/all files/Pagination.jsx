import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-12">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-lg ${currentPage === 1 
          ? 'bg-white/5 cursor-not-allowed' 
          : 'bg-white/10 hover:bg-white/20'}`}
      >
        <ChevronLeft className="w-5 h-5" />
      </motion.button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <motion.button
          key={page}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-lg ${currentPage === page 
            ? 'bg-white/20' 
            : 'bg-white/10 hover:bg-white/20'}`}
        >
          {page}
        </motion.button>
      ))}

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-lg ${currentPage === totalPages 
          ? 'bg-white/5 cursor-not-allowed' 
          : 'bg-white/10 hover:bg-white/20'}`}
      >
        <ChevronRight className="w-5 h-5" />
      </motion.button>
    </div>
  );
};

export default Pagination;