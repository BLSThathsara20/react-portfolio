import React from 'react';

const SpotlightProvider = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-surface text-ink">
      <div className="pointer-events-none fixed inset-0 bg-signal-mesh opacity-80" aria-hidden />
      <div className="pointer-events-none fixed inset-0 bg-grain opacity-40" aria-hidden />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SpotlightProvider;
