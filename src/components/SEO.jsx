import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords = [], 
  image = '/og-image.png',
  type = 'website'
}) => {
  const siteUrl = 'https://savithathsara.me';
  const siteName = 'Savindu Thathsara - Web Developer & DevOps Engineer';
  const twitterHandle = '@savithathsara';

  const defaultDescription = 'Experienced Web Developer transitioning to DevOps Engineering. 5+ years building scalable applications with React, Node.js, AWS, Docker, and CI/CD. Award-winning developer with proven track record in full-stack development and infrastructure automation.';
  const defaultKeywords = [
    'Savindu Thathsara',
    'Web Developer',
    'DevOps Engineer',
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'AWS Engineer',
    'Docker',
    'CI/CD',
    'Infrastructure Automation',
    'Cloud Engineer',
    'JavaScript Developer',
    'Sri Lankan Developer',
    'Frontend Developer',
    'Backend Developer',
    'Software Engineer',
    'Site Reliability Engineer',
    'Cloud Infrastructure'
  ];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={[...defaultKeywords, ...keywords].join(', ')} />
      <link rel="canonical" href={siteUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Savindu Thathsara" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title || siteName} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Savindu Thathsara",
          "url": siteUrl,
          "image": `${siteUrl}${image}`,
          "sameAs": [
            "https://github.com/BLSThathsara20",
            "https://linkedin.com/in/blsthathsara",
            "https://linktr.ee/Savinduthathsara"
          ],
          "jobTitle": "Web Developer & DevOps Engineer",
          "knowsAbout": [
            "Web Development",
            "DevOps",
            "Cloud Infrastructure",
            "React",
            "Node.js",
            "AWS",
            "Docker",
            "CI/CD"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Independent Developer"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;