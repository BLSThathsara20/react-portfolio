import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaTags = () => {
  return (
    <Helmet>
      <title>Savindu's Portfolio | Web Developer</title>
      <meta name="description" content="Creative web developer specializing in React, JavaScript, and modern web technologies. View my portfolio for innovative web solutions." />
      <meta name="keywords" content="web developer, web developer, React developer, JavaScript, portfolio" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Savindu's Portfolio | web Developer" />
      <meta property="og:description" content="Creative web developer showcasing innovative web solutions and projects." />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Savindu's Portfolio | Web Developer" />
      <meta name="twitter:description" content="Creative web developer showcasing innovative web solutions and projects." />
      
      {/* Other important meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="blsthathsara.me" />
    </Helmet>
  );
};

export default MetaTags;