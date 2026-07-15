import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://savithathsara.me';
const SITE_NAME = 'Savindu Thathsara — AI & Automation';
const DEFAULT_IMAGE = '/og-image.png';
const DEFAULT_IMAGE_WIDTH = 1200;
const DEFAULT_IMAGE_HEIGHT = 630;

const DEFAULT_DESCRIPTION =
  'Savindu Thathsara — AI & Automation Engineer in London. 7+ years in web systems and cloud. Building Make.com workflows, React + Supabase ops tools, and AWS automation. Studying Computing with AI at Northumbria University.';

const DEFAULT_KEYWORDS = [
  'Savindu Thathsara',
  'AI Automation Engineer',
  'Workflow Automation',
  'Make.com',
  'Process Automation',
  'AWS',
  'CI/CD',
  'React',
  'Supabase',
  'OpenAI',
  'Python Automation',
  'Next.js',
  'Web Developer London',
  'Northumbria University',
  'Computing with Artificial Intelligence',
  'Docker',
  'GitHub Actions',
  'MLOps',
  'IT Operations Automation',
  'Asahi Motors London',
];

const SEO = ({
  title,
  description,
  keywords = [],
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
  jsonLd,
}) => {
  const location = useLocation();
  const path = location.pathname === '/' ? '/' : location.pathname.replace(/\/$/, '');
  const canonical = `${SITE_URL}${path === '/' ? '/' : path}`;
  const pageTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | London`;
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const imagePath = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  const ogTitle = title || 'Savindu Thathsara — AI & Automation Engineer';

  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Savindu Thathsara',
    givenName: 'Savindu',
    familyName: 'Thathsara',
    url: SITE_URL,
    image: `${SITE_URL}/og-image.png`,
    jobTitle: 'AI & Automation Engineer',
    description: DEFAULT_DESCRIPTION,
    email: 'mailto:blsthathsara@gmail.com',
    nationality: 'Sri Lankan',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB',
    },
    homeLocation: {
      '@type': 'Place',
      name: 'London, United Kingdom',
    },
    sameAs: [
      'https://github.com/BLSThathsara20',
      'https://www.linkedin.com/in/savithathsara/',
      'https://linktr.ee/Savinduthathsara',
    ],
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Northumbria University, London',
        sameAs: 'https://www.northumbria.ac.uk/',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Sri Lanka Institute of Advanced Technological Education (SLIATE)',
      },
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'AI Automation',
      'Process Automation',
      'AWS',
      'CI/CD',
      'Docker',
      'React',
      'Next.js',
      'Web Development',
      'Workflow Automation',
      'MLOps',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Asahi Motors London',
    },
  };

  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    inLanguage: 'en-GB',
    publisher: { '@id': `${SITE_URL}/#person` },
  };

  const webpageLd = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: ogTitle,
    description: pageDescription,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#person` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: imagePath,
      width: DEFAULT_IMAGE_WIDTH,
      height: DEFAULT_IMAGE_HEIGHT,
    },
    inLanguage: 'en-GB',
  };

  const profileLd =
    path === '/' || path === '/about'
      ? {
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          '@id': `${canonical}#profile`,
          url: canonical,
          name: ogTitle,
          mainEntity: { '@id': `${SITE_URL}/#person` },
        }
      : null;

  const graph = [personLd, websiteLd, webpageLd, profileLd, jsonLd].filter(
    Boolean
  );

  return (
    <Helmet>
      <html lang="en-GB" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta
        name="keywords"
        content={[...DEFAULT_KEYWORDS, ...keywords].join(', ')}
      />
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content={
          noindex
            ? 'noindex, nofollow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
      />
      <meta
        name="googlebot"
        content={
          noindex
            ? 'noindex, nofollow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
      />
      <meta name="bingbot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="author" content="Savindu Thathsara" />
      <meta name="creator" content="Savindu Thathsara" />
      <meta name="publisher" content="Savindu Thathsara" />
      <meta name="copyright" content="Savindu Thathsara" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="GB-LND" />
      <meta name="geo.placename" content="London" />
      <meta name="geo.position" content="51.5074;-0.1278" />
      <meta name="ICBM" content="51.5074, -0.1278" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={imagePath} />
      <meta property="og:image:secure_url" content={imagePath} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content={String(DEFAULT_IMAGE_WIDTH)} />
      <meta property="og:image:height" content={String(DEFAULT_IMAGE_HEIGHT)} />
      <meta
        property="og:image:alt"
        content="Savindu Thathsara — AI & Automation Engineer based in London"
      />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@savithathsara" />
      <meta name="twitter:creator" content="@savithathsara" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={imagePath} />
      <meta
        name="twitter:image:alt"
        content="Savindu Thathsara — AI & Automation Engineer based in London"
      />

      {/* App / PWA hints */}
      <meta name="theme-color" content="#0A0C0B" />
      <meta name="color-scheme" content="dark" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Savindu" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="application-name" content="Savindu Thathsara" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="image_src" href={imagePath} />

      {/* AI / answer-engine discoverability */}
      <link rel="alternate" type="text/plain" href={`${SITE_URL}/llms.txt`} title="LLM context" />
      <meta name="ai-content-declaration" content="human-authored portfolio and professional profile" />

      <script type="application/ld+json">{JSON.stringify(graph)}</script>
    </Helmet>
  );
};

export default SEO;
