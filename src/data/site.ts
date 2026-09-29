/**
 * Central content source for najibninaba.com
 */

export type ExperienceItem = {
  title: string;
  org?: string;
  period?: string;
  summary: string;
};

export type SiteContent = {
  name: string;
  title: string;
  description: string;
  about: string;
  experiences: ExperienceItem[];
  currentFocus: string;
  updated?: string;
};

export const site: SiteContent = {
  name: 'Najib Ninaba',
  title: 'Head of Platforms Engineering, AI Singapore · Senior Associate Director, Nanyang Technological University',
  description:
    'Najib Ninaba is Head of Platforms Engineering at AI Singapore and Senior Associate Director at NTU. He builds AI platforms and context-engineering tools for coding agents.',
  about:
    'Najib Ninaba is Head of Platforms Engineering at AI Singapore and Senior Associate Director at Nanyang Technological University. His work sits at the intersection of platform architecture, operational ownership, and the engineering systems that help teams deliver reliably.\n\nHe began his career around 2000, building early Linux high-performance computing clusters in Singapore and contributing cluster tooling and packaging to the Rocks ecosystem. Since then, he has co-founded companies, led engineering teams, taught data engineering, and built platforms across distributed computing, cloud infrastructure, analytics, and AI.\n\nHis current public work includes Orchard, which he created, and RepoPrompt CE, which he contributes to and reviews. His practical view is that more software creates more systems that must be understood, operated, secured, and maintained.',
  experiences: [
    {
      title: 'Head of Platforms Engineering · Senior Associate Director',
      org: 'AI Singapore · NTU',
      period: '2018–now',
      summary:
        'Joined AI Singapore under NUS as one of its original four engineers. Leads Platforms Engineering across hybrid infrastructure, GPU and HPC capacity, MLOps foundations, data platforms, and reliability practices. Became Senior Associate Director at NTU when AI Singapore transitioned from NUS to NTU in April 2026.',
    },
    {
      title: 'Scientific Advisor for AI',
      org: 'NSCC Technical Resource Allocation Committee',
      period: '2020–2024',
      summary:
        'Served on the National Supercomputing Centre Singapore advisory committee for technical resource allocation.',
    },
    {
      title: 'Data Engineering Architect',
      org: 'NUS School of Continuing and Lifelong Education',
      period: '2017',
      summary:
        'Lectured in data analytics, data engineering, reproducible data science, and chatbots.',
    },
    {
      title: 'Co-Founder',
      org: 'Real Analytics',
      period: '2016–2017',
      summary: 'Worked on data analytics, data engineering, consulting, and training.',
    },
    {
      title: 'Development Manager',
      org: 'Revolution Analytics',
      period: '2012–2014',
      summary: 'Built and led a Singapore engineering team working on cloud and analytics infrastructure.',
    },
    {
      title: 'Development Manager',
      org: 'Platform Computing',
      period: '2006–2010',
      summary: 'Built an engineering team in Singapore working on distributed computing and HPC systems.',
    },
    {
      title: 'Co-Founder',
      org: 'Scalable Systems',
      period: '2003–2006',
      summary: 'Co-founded the HPC startup, which Platform Computing acquired in 2006.',
    },
    {
      title: 'Early Linux HPC and Rocks work',
      period: '~2000',
      summary:
        'Built early Linux HPC clusters in Singapore and contributed cluster tooling and packaging to the Rocks ecosystem.',
    },
  ],
  currentFocus:
    'Sovereign on-premises LLM orchestration with Orchard and context-engineering tools for coding agents.',
  updated: '2026-09-29',
};

export const intro = [
  'I lead Platforms Engineering at AI Singapore, where I joined in 2018 as one of the original four engineers: hybrid infrastructure, GPU and HPC capacity, MLOps and data platforms for national AI programmes. Since April 2026 that work sits at NTU.',
  'I started around 2000 building Linux HPC clusters in Singapore, and the habits from that work still hold: clear contracts, observable behaviour, and ownership after launch. These days I build tools for agent-assisted development.',
];

export const bio = {
  short: 'Najib Ninaba is Head of Platforms Engineering at AI Singapore and Senior Associate Director at Nanyang Technological University. He builds tools for agent-assisted development, including Orchard, an open-source platform for sovereign on-premises LLM orchestration.',
  long: [
    'Najib Ninaba is Head of Platforms Engineering at AI Singapore, Senior Associate Director at Nanyang Technological University, and a hands-on builder of tools for agent-assisted development. His work covers platform architecture, operations, and the engineering systems that help teams deliver reliably.',
    'Najib began his career around 2000, building early Linux high-performance computing clusters in Singapore. He contributed cluster tooling and packaging to the Rocks ecosystem before co-founding Scalable Systems, an HPC startup acquired by Platform Computing in 2006. He later led engineering teams at Platform Computing and Revolution Analytics, working across distributed computing, cloud infrastructure, and large-scale analytics. He also co-founded Real Analytics, where he worked on data engineering, consulting, and technical training.',
    'In 2017, Najib joined the NUS School of Continuing and Lifelong Education as a Data Engineering Architect, where he lectured in data analytics and data engineering. He joined AI Singapore in January 2018 as one of its original four engineers. He now leads the Platforms Engineering function supporting national AI programmes through hybrid infrastructure, GPU and HPC capacity, MLOps foundations, data platforms, and reliability practices. When AI Singapore transitioned from NUS to NTU in April 2026, Najib became Senior Associate Director at NTU while continuing to lead Platforms Engineering. From 2020 to 2024, he also served on the National Supercomputing Centre Singapore’s Technical Resource Allocation Committee as its Scientific Advisor for AI.',
    'He created Orchard, an open-source platform for sovereign on-premises LLM orchestration, and contributes to and reviews RepoPrompt CE, a context-engineering application for AI coding agents.',
    'Many of the habits from his HPC work still apply: clear contracts, observable behaviour, disciplined workflows, and ownership after launch.',
  ],
};

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/najibninaba' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/najibninaba/' },
  { label: 'X', href: 'https://x.com/najibninaba' },
];
