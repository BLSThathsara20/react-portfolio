import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords = [],
  image = '/og-image.png',
  type = 'website',
}) => {
  const siteUrl = 'https://savithathsara.me';
  const siteName = 'Savindu Thathsara — AI & Automation';
  const twitterHandle = '@savithathsara';

  const defaultDescription =
    'Savindu Thathsara — AI & automation engineer in London. 7+ years building web systems, AWS workflows, and practical automation. Studying Computing with AI at Northumbria University.';
  const defaultKeywords = [
    'Savindu Thathsara',
    'AI Automation',
    'Process Automation',
    'Workflow Automation',
    'AWS',
    'CI/CD',
    'React',
    'Next.js',
    'Web Developer',
    'London',
    'Northumbria University',
    'Computing with Artificial Intelligence',
    'Docker',
    'GitHub Actions',
  ];

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta
        name="keywords"
        content={[...defaultKeywords, ...keywords].join(', ')}
      />
      <link rel="canonical" href={siteUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Savindu Thathsara" />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title || siteName} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_GB" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title || siteName} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      <meta name="theme-color" content="#0A0C0B" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Savindu Thathsara',
          url: siteUrl,
          image: `${siteUrl}${image}`,
          sameAs: [
            'https://github.com/BLSThathsara20',
            'https://www.linkedin.com/in/savithathsara/',
            'https://linktr.ee/Savinduthathsara',
          ],
          jobTitle: 'AI & Automation Engineer',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'London',
            addressCountry: 'GB',
          },
          alumniOf: {
            '@type': 'CollegeOrUniversity',
            name: 'Northumbria University, London',
          },
          knowsAbout: [
            'AI Automation',
            'Process Automation',
            'AWS',
            'CI/CD',
            'React',
            'Web Development',
            'Docker',
          ],
          worksFor: {
            '@type': 'Organization',
            name: 'Asahi Motors London',
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
