export const profile = {
  name: 'Savindu Thathsara',
  firstName: 'Savindu',
  title: 'AI & Automation Engineer',
  location: 'London, United Kingdom',
  headline: 'Building AI-aware automation & reliable web systems',
  shortBio:
    'AI & Automation Engineer in London — AWS, workflow automation, and modern web systems. Studying Computing with AI at Northumbria while shipping real ops tools.',
  about:
    "I'm Savindu Thathsara, an AI & Automation Engineer based in London, currently studying Computing with Artificial Intelligence at Northumbria University. Over 7 years I built a solid foundation in web systems and cloud infrastructure — React, Next.js, AWS (EC2, S3, CloudFront, Route 53), CI/CD, and Docker. I'm now applying that foundation toward a focused goal: building AI-aware automation that removes manual work from real businesses. Recent example: at Asahi Motors London, I connected Gmail to Google Sheets via Make.com to automate dealership lead tracking — no more leads lost in inboxes. I'm now integrating the Autotrader API with OpenAI to auto-generate lead replies, moving toward fully hands-off lead management.",
  email: 'blsthathsara@gmail.com',
  yearsExperience: '7+',
  tagline: 'Selected work & systems',
  links: {
    linkedin: 'https://www.linkedin.com/in/savithathsara/',
    github: 'https://github.com/BLSThathsara20',
    email: 'mailto:blsthathsara@gmail.com',
    linktree: 'https://linktr.ee/Savinduthathsara',
    resume: '/cv.pdf',
    whatsapp: 'https://wa.me/94764067093',
  },
};

export const skills = {
  aiAutomation: [
    'Workflow automation',
    'Make.com',
    'Python automation',
    'OpenAI integrations',
    'AI literacy',
    'Prompt-driven tooling',
  ],
  cloud: [
    'AWS (EC2, S3, CloudFront, Route 53)',
    'CI/CD',
    'GitHub Actions',
    'Docker',
    'Server automation',
  ],
  web: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Node.js', 'Supabase', 'Tailwind CSS'],
  platforms: ['WordPress', 'WooCommerce', 'GSAP', 'Figma to code'],
};

export const experience = [
  {
    id: 'asahi',
    role: 'IT Operations & Automation | Sales & Marketing Executive',
    company: 'Asahi Motors London',
    location: 'London, UK',
    period: 'Feb 2026 — Present',
    current: true,
    employment: 'Part-time',
    summary:
      'Lead IT operations and automation initiatives at Asahi Motors London — designing systems that remove manual work from daily business processes, alongside sales and marketing support.',
    highlights: [
      'Automated dealership lead tracking (Gmail → Google Sheets via Make.com)',
      'Built internal staff management platform (React + Supabase) with attendance, payroll, and RBAC',
      'Integrating Autotrader API + OpenAI for auto-generated lead replies',
      'Hybrid technical and customer-facing role across ops and digital marketing',
    ],
  },
  {
    id: 'enfection-associate-lead',
    role: 'Associate Lead Software Engineer',
    company: 'Enfection',
    location: 'Sri Lanka',
    period: 'Apr 2025 — Dec 2025',
    summary:
      'Drove technical excellence and innovation — leading cross-functional web projects, mentoring engineers, enforcing code quality, and integrating AWS / DevOps into delivery.',
    highlights: [
      'Led planning-to-deployment for high-impact web projects',
      'Mentored juniors and ran detailed code reviews',
      'Contributed to innovation-lab tools and experimental solutions',
    ],
  },
  {
    id: 'enfection-junior-lead',
    role: 'Software Engineering Team Lead',
    company: 'Enfection',
    location: 'Sri Lanka',
    period: 'Apr 2024 — Apr 2025',
    summary:
      'Transitioned from senior execution into leadership — managing small teams, timelines, and quality across React, Vue, and WordPress ecosystems.',
    highlights: [
      'Mentored developers and improved delivery workflows',
      'Partnered with DevOps on hosting and deployment stability',
      'Recognized as Innovator of the Year at Enfection annual awards',
    ],
  },
  {
    id: 'enfection-senior',
    role: 'Senior Software Engineer',
    company: 'Enfection',
    location: 'Sri Lanka',
    period: 'Mar 2023 — Apr 2024',
    summary:
      'Built advanced WordPress and Vue experiences with GSAP animation, AJAX filters, and AWS / cPanel performance work.',
  },
  {
    id: 'enfection-executive',
    role: 'Software Engineer',
    company: 'Enfection',
    location: 'Sri Lanka',
    period: 'Jun 2022 — Mar 2023',
    summary:
      'Specialised in custom WordPress themes and translating Figma / Adobe XD designs into responsive production sites.',
  },
  {
    id: 'owiro',
    role: 'Software Engineer',
    company: 'Owiro Holdings',
    location: 'Colombo, Sri Lanka',
    period: 'Apr 2022 — May 2023',
    summary:
      'Delivered Moodle LMS platforms, WordPress themes, DigitalOcean environments, and mail server setup for international projects.',
  },
  {
    id: 'hexacode',
    role: 'Web Developer',
    company: 'HexaCode Solution',
    location: 'Sri Lanka',
    period: 'Jan 2019 — Apr 2022',
    summary:
      'Started professional web development with custom WordPress themes, WooCommerce shops, and brand identity work.',
  },
];

export const education = [
  {
    id: 'northumbria',
    title: 'BSc (Hons) Computing with Artificial Intelligence Technology',
    school: 'Northumbria University, London',
    period: '2026 — Present',
    location: 'London, UK',
    note: 'Member of IBM Society',
  },
  {
    id: 'sliate',
    title: 'Higher National Diploma — Information Technology',
    school: 'SLIATE',
    period: '2019 — 2022',
    location: 'Sri Lanka',
  },
  {
    id: 'ijse',
    title: 'Diploma — Computer Software Engineering',
    school: 'Institute of Software Engineering',
    period: '2021',
    location: 'Sri Lanka',
  },
];

export const awards = [
  {
    id: 'lseg',
    title: 'LSEG Code & Conquer 2024 — 1st Place',
    org: 'London Stock Exchange Group',
    year: '2024',
    description:
      'Led BitSquad to 1st place — FinTech system design and problem-solving under pressure.',
    featured: true,
    highlight: true,
  },
  {
    id: 'santander',
    title: 'Santander Career Support Award 2025–26',
    org: 'Santander Universities UK',
    year: '2026',
    description:
      'Selected at Northumbria University to support career development opportunities.',
    featured: true,
  },
  {
    id: 'enfection-innovator',
    title: 'Innovator of the Year',
    org: 'Enfection',
    year: '2024',
    description:
      'Recognised at Enfection annual awards for research, development, and solving real-world problems through engineering.',
    featured: true,
  },
  {
    id: 'nasa',
    title: 'NASA Space App Challenge — Global Nominee',
    org: 'NASA',
    year: '2023',
    description:
      'International hackathon nominee for innovative space-tech solutions.',
    featured: true,
  },
];

export const certifications = [
  {
    title: 'Building AI Literacy and Fluency with Microsoft',
    org: 'Microsoft',
    year: '2026',
  },
  {
    title: 'QAHE Employability Bootcamp',
    org: 'QA Ltd',
    year: '2026',
  },
  {
    title: 'Using Python for Automation',
    org: 'LinkedIn Learning',
    year: '2026',
  },
  {
    title: 'Train and Evaluate Deep Learning Models',
    org: 'Microsoft Learn',
    year: '2026',
  },
];

export const featuredWork = [
  {
    id: 'farmsense-ai',
    title: 'FarmSense AI',
    client: 'Northumbria University · LD6053',
    category: 'AI dissertation',
    description:
      'Intelligent crop planning for smallholder farmers — soil ML, LSTM weather & price forecasting, BERT demand signals, and XGBoost profit ranking in one React + FastAPI + PostgreSQL system.',
    tech: ['React', 'FastAPI', 'scikit-learn', 'Docker'],
    outcome: 'Profit-ranked plans — not soil-only ML',
    githubUrl: 'https://github.com/BLSThathsara20/farmsense-ai',
    image: 'farmsense-ai',
  },
  {
    id: 'buyrocell',
    title: 'Buyrocell E-Commerce',
    client: 'Rocell',
    category: 'E-commerce',
    description:
      'E-commerce platform for tiles, bathware, and accessories with custom catalogue and order management.',
    tech: ['Laravel', 'Custom CMS', 'Responsive UI'],
    liveUrl: 'https://buyrocell.com/',
    outcome: 'Product-led shopping experience',
    image: 'buyrocell',
  },
  {
    id: 'tci',
    title: 'The Circulate Initiative',
    client: 'Global NGO',
    category: 'Web platform',
    description:
      'Complex content-structured organisational website with polished UX, performance focus, and production-ready delivery.',
    tech: ['WordPress', 'GSAP', 'Sass'],
    liveUrl: 'https://thecirculateinitiative.org',
    outcome: 'Structured CMS experience for a global initiative',
  },
  {
    id: 'asahi-automation',
    title: 'Dealership Lead Automation',
    client: 'Asahi Motors London',
    category: 'Automation',
    description:
      'Connected Gmail to Google Sheets via Make.com so Autotrader leads log automatically. Next: Autotrader API + OpenAI for auto-generated replies.',
    tech: ['Make.com', 'Gmail', 'Google Sheets', 'OpenAI'],
    outcome: 'No more leads lost in inboxes',
    image: 'lead-automation',
  },
];
