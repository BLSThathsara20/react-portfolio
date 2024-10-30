import vairalSS from '../assets/projects/vairal.webp';
import luvrieSS from '../assets/projects/luvrie.webp';
import mvtmSS from '../assets/projects/mvtm.webp';
import sanderSS from '../assets/projects/sander.webp';
import tciSS from '../assets/projects/tci.webp';
import fortudeLogo from '../assets/projects/fortude-web.webp';

export const projects = [
  {
    id: 1,
    title: "Fortude",
    description: "A responsive, custom WordPress theme combining classic design with a modern UI.",
    image: fortudeLogo,
    technologies: ["GSAP", "ScrollTrigger", "Wordpress", "Jquary", "Sass", "Bootstrap", "ACF"],
    category: "Web",
    liveUrl: "https://fortude.co/",
  },
  {
    id: 2,
    title: "The Circulate Initiative",
    description: "Creative content-Based Complex Structuring Website for Organization",
    image: tciSS,
    technologies: ["GSAP", "ScrollTrigger", "Wordpress", "Jquary", "Sass", "Bootstrap", "Forminator"],
    category: "Web",
    liveUrl: "thecirculateinitiative.org",
  },
  {
    id: 3,
    title: "Luvrie store",
    description: "WooCommerce Website for Selling Gift Items with Gift Box Customization Feature",
    image: luvrieSS,
    technologies: ["Woocommerce", "Jquary", "Sass", "Bootstrap", "Ajax"],
    category: "Woocommerce",
    liveUrl: "https://luvrie.com/"
  },
  {
    id: 4,
    title: "Sanderstrothmann",
    description: "Modern website for Contract Development & Manufacturing Company",
    image: sanderSS,
    technologies: ["GSAP", "ScrollTrigger", "Worpdress", "Sass", "Jquary"],
    category: "Web",
    liveUrl: "https://asia.sanderstrothmann.com/",
  },
  {
    id: 5,
    title: "Vairal AI",
    description:
      "Developed a dynamic, responsive website designed to showcase AI project pitches.",
    image: vairalSS,
    technologies: ["Vue js", "Sass", "Bootstrap"],
    category: "JS Framework",
    liveUrl: "https://vairal.ai/",
    githubUrl: "https://github.com/BLSThathsara20/Vairal",
  },
  {
    id: 6,
    title: "MVTM",
    description: "Product Showcase Website for Clothing Brand",
    image: mvtmSS,
    technologies: ["Wordpress", "Sass", "Jquary"],
    category: "Web",
    liveUrl: "https://mvtm.co/",
    githubUrl: "https://github.com/BLSThathsara20/Moventum-Theme",
  }
];
