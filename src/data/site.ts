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
  tagline: string;
  description: string;
  about: string;
  experiences: ExperienceItem[];
  currentFocus: string;
  updated?: string;
};

export const site: SiteContent = {
  name: 'Najib Ninaba',
  title: 'Senior Associate Director, NTU · Head of Platforms Engineering, AI Singapore',
  tagline: 'AI makes software cheaper to build, but not cheaper to own.',
  description:
    'Najib Ninaba is Senior Associate Director at NTU and Head of Platforms Engineering at AI Singapore. He builds AI platforms and context-engineering tools for coding agents.',
  about:
    'Najib Ninaba is Senior Associate Director at Nanyang Technological University and Head of Platforms Engineering at AI Singapore. His work sits at the intersection of platform architecture, operational ownership, and the engineering systems that help teams deliver reliably.\n\nHe began his career around 2000, building early Linux high-performance computing clusters in Singapore and contributing cluster tooling and packaging to the Rocks ecosystem. Since then, he has co-founded companies, led engineering teams, taught data engineering, and built platforms across distributed computing, cloud infrastructure, analytics, and AI.\n\nHis current public work includes Orchard, which he created, and RepoPrompt CE, which he contributes to and reviews. His practical view is that more software creates more systems that must be understood, operated, secured, and maintained.',
  experiences: [
    {
      title: 'Senior Associate Director · Head, Platforms Engineering',
      org: 'NTU · AI Singapore',
      period: 'January 2018–Present',
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
      period: 'April–December 2017',
      summary:
        'Lectured in data analytics, data engineering, reproducible data science, and chatbots.',
    },
    {
      title: 'Co-Founder',
      org: 'Real Analytics',
      period: 'June 2016–December 2017',
      summary: 'Worked on data analytics, data engineering, consulting, and training.',
    },
    {
      title: 'Development Manager',
      org: 'Revolution Analytics',
      period: 'January 2012–June 2014',
      summary: 'Built and led a Singapore engineering team working on cloud and analytics infrastructure.',
    },
    {
      title: 'Development Manager',
      org: 'Platform Computing',
      period: 'July 2006–June 2010',
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
      period: 'Around 2000 onward',
      summary:
        'Built early Linux HPC clusters in Singapore and contributed cluster tooling and packaging to the Rocks ecosystem.',
    },
  ],
  currentFocus:
    'Sovereign on-premises LLM orchestration with Orchard and context-engineering tools for coding agents.',
  updated: '2026-09-29',
};
