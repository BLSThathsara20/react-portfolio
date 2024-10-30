import React from 'react';
import bgVideo from '/src/assets/videos/bg.mp4'; // Import the video file

const LazyVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 min-h-full min-w-full object-cover opacity-40"
    >
      <source src={bgVideo} type="video/mp4" />
    </video>
  );
};

export default LazyVideo;