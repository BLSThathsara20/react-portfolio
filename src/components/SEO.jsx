import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords = [], 
  image, 
  type = 'website',
  author = 'Savindu Thaththsara',
  publishedTime,
  modifiedTime,
  twitterCard = 'summary_large_image'
}) => {
  const siteUrl = window.location.origin;
  const currentUrl = window.location.href;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title} | Savindu's Portfolio</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      {image && <meta property="og:image" content={`${siteUrl}${image}`} />}
      <meta property="og:site_name" content="Savindu's Portfolio" />

      {/* Article Specific Meta Tags */}
      {type === 'article' && (
        <>
          <meta property="article:author" content={author} />
          {publishedTime && (
            <meta property="article:published_time" content={publishedTime} />
          )}
          {modifiedTime && (
            <meta property="article:modified_time" content={modifiedTime} />
          )}
        </>
      )}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={`${siteUrl}${image}`} />}
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === 'article' ? "BlogPosting" : "WebPage",
          "headline": title,
          "description": description,
          "image": image ? `${siteUrl}${image}` : undefined,
          "author": {
            "@type": "Person",
            "name": author
          },
          "datePublished": publishedTime,
          "dateModified": modifiedTime || publishedTime,
          "url": currentUrl
        })}
      </script>
    </Helmet>
  );
};

export default SEO;