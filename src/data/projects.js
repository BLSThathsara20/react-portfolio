import vairalSS from '../assets/projects/vairal.webp';
import luvrieSS from '../assets/projects/luvrie.webp';
import mvtmSS from '../assets/projects/mvtm.webp';
import sanderSS from '../assets/projects/sander.webp';
import tciSS from '../assets/projects/tci.webp';
import fortudeLogo from '../assets/projects/fortude-web.webp';

export const projects = [
  {
    id: 1,
    title: 'Dealership Lead Automation',
    description:
      'Automated lead tracking for Asahi Motors London — practical workflow automation that cut manual follow-up and improved sales ops visibility.',
    image: null,
    technologies: ['Automation', 'Workflow design', 'Web tools'],
    category: 'Automation',
    highlight: true,
  },
  {
    id: 2,
    title: 'The Circulate Initiative',
    description:
      'Complex content-structured organisational website for a global circular-economy NGO — polished UX and production delivery.',
    image: tciSS,
    technologies: ['WordPress', 'GSAP', 'ScrollTrigger', 'Sass'],
    category: 'Web',
    liveUrl: 'https://thecirculateinitiative.org',
    highlight: true,
  },
  {
    id: 3,
    title: 'Fortude',
    description:
      'Responsive custom WordPress theme combining classic design with modern motion and ACF-driven content.',
    image: fortudeLogo,
    technologies: ['WordPress', 'GSAP', 'ACF', 'Sass'],
    category: 'Web',
    liveUrl: 'https://fortude.co/',
    highlight: true,
  },
  {
    id: 4,
    title: 'Buyrocell E-Commerce',
    description:
      'E-commerce platform for tiles, bathware, and accessories with a custom product catalogue and order management.',
    image: null,
    technologies: ['E-commerce', 'Custom catalogue', 'Responsive UI'],
    category: 'E-commerce',
  },
  {
    id: 5,
    title: 'Sanderstrothmann',
    description:
      'Modern corporate site for a contract development and manufacturing company across Asia.',
    image: sanderSS,
    technologies: ['WordPress', 'GSAP', 'Sass'],
    category: 'Web',
    liveUrl: 'https://asia.sanderstrothmann.com/',
  },
  {
    id: 6,
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
    id: 7,
    title: 'Luvrie Store',
    description:
      'WooCommerce gift store with gift-box customisation and AJAX-enhanced shopping flows.',
    image: luvrieSS,
    technologies: ['WooCommerce', 'jQuery', 'Ajax', 'Sass'],
    category: 'E-commerce',
    liveUrl: 'https://luvrie.com/',
  },
  {
    id: 8,
    title: 'MVTM',
    description: 'Product showcase website for a clothing brand.',
    image: mvtmSS,
    technologies: ['WordPress', 'Sass', 'jQuery'],
    category: 'Web',
    liveUrl: 'https://mvtm.co/',
    githubUrl: 'https://github.com/BLSThathsara20/Moventum-Theme',
  },
];
