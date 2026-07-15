import vairalSS from '../assets/projects/vairal.webp';
import luvrieSS from '../assets/projects/luvrie.webp';
import mvtmSS from '../assets/projects/mvtm.webp';
import sanderSS from '../assets/projects/sander.webp';
import tciSS from '../assets/projects/tci.webp';
import fortudeLogo from '../assets/projects/fortude-web.webp';
import leadAutomationSS from '../assets/projects/lead-automation.webp';
import farmsenseSS from '../assets/projects/farmsense-ai.webp';
import buyrocellSS from '../assets/projects/buyrocell.webp';

export const projects = [
  {
    id: 1,
    title: 'FarmSense AI',
    description:
      'BSc final-year dissertation (LD6053) — intelligent crop planning for smallholder farmers. Soil ML, LSTM weather & price forecasting, BERT demand signals, XGBoost profit ranking. React + FastAPI + PostgreSQL + Docker.',
    image: farmsenseSS,
    technologies: ['React', 'FastAPI', 'scikit-learn', 'PostgreSQL', 'Docker'],
    category: 'AI',
    githubUrl: 'https://github.com/BLSThathsara20/farmsense-ai',
    highlight: true,
  },
  {
    id: 2,
    title: 'Dealership Lead Automation',
    description:
      'Connected Gmail to Google Sheets via Make.com so Autotrader leads log automatically — no more leads lost in inboxes. Expanding with Autotrader API + OpenAI replies.',
    image: leadAutomationSS,
    technologies: ['Make.com', 'Gmail', 'Google Sheets', 'OpenAI'],
    category: 'Automation',
    highlight: false,
  },
  {
    id: 3,
    title: 'Buyrocell E-Commerce',
    description:
      'E-commerce platform for tiles, bathware, and accessories with a custom product catalogue and order management.',
    image: buyrocellSS,
    technologies: ['Laravel', 'Custom CMS', 'Responsive UI'],
    category: 'E-commerce',
    liveUrl: 'https://buyrocell.com/',
    highlight: false,
  },
  {
    id: 4,
    title: 'The Circulate Initiative',
    description:
      'Complex content-structured organisational website for a global circular-economy NGO — polished UX and production delivery.',
    image: tciSS,
    technologies: ['WordPress', 'GSAP', 'ScrollTrigger', 'Sass'],
    category: 'Web',
    liveUrl: 'https://thecirculateinitiative.org',
    highlight: false,
  },
  {
    id: 5,
    title: 'Fortude',
    description:
      'Responsive custom WordPress theme combining classic design with modern motion and ACF-driven content.',
    image: fortudeLogo,
    technologies: ['WordPress', 'GSAP', 'ACF', 'Sass'],
    category: 'Web',
    liveUrl: 'https://fortude.co/',
  },
  {
    id: 6,
    title: 'Sanderstrothmann',
    description:
      'Modern corporate site for a contract development and manufacturing company across Asia.',
    image: sanderSS,
    technologies: ['WordPress', 'GSAP', 'Sass'],
    category: 'Web',
    liveUrl: 'https://asia.sanderstrothmann.com/',
  },
  {
    id: 7,
    title: 'Vairal AI',
    description:
      'Dynamic marketing site designed to showcase AI project pitches with a responsive Vue frontend.',
    image: vairalSS,
    technologies: ['Vue.js', 'Sass', 'Bootstrap'],
    category: 'JS Framework',
    liveUrl: 'https://vairal.ai/',
    githubUrl: 'https://github.com/BLSThathsara20/Vairal',
  },
  {
    id: 8,
    title: 'Luvrie Store',
    description:
      'WooCommerce gift store with gift-box customisation and AJAX-enhanced shopping flows.',
    image: luvrieSS,
    technologies: ['WooCommerce', 'jQuery', 'Ajax', 'Sass'],
    category: 'E-commerce',
    liveUrl: 'https://luvrie.com/',
  },
  {
    id: 9,
    title: 'MVTM',
    description: 'Product showcase website for a clothing brand.',
    image: mvtmSS,
    technologies: ['WordPress', 'Sass', 'jQuery'],
    category: 'Web',
    liveUrl: 'https://mvtm.co/',
    githubUrl: 'https://github.com/BLSThathsara20/Moventum-Theme',
  },
];
