import React from 'react';
import { useLocation } from 'react-router-dom';

/** CSS-only page enter — keeps Framer off the critical path */
const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-enter">
      {children}
    </div>
  );
};

export default PageTransition;
