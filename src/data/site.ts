/**
 * Central content source for najibninaba.com
 * Concise, professional copy curated from bio.txt
 */

export type ExperienceItem = {
  title: string;
  org?: string;
  period?: string;
  summary: string;
  highlights?: string[];
};

export type SiteContent = {
  name: string;
  title: string;
  tagline?: string;
  description: string;
  about: string;
  experiences: ExperienceItem[];
  currentFocus: string;
  updated?: string;
};

export const site: SiteContent = {
  name: 'Najib Ninaba',
  title: 'Head, Platforms Engineering at AI Singapore',
  tagline: 'I build AI platforms and write about what actually works: delivery over theory, ownership over hype, systems that hold up when the demo is over.',
  description:
    'Head of Platforms Engineering at AI Singapore. I write about AI infrastructure, platform engineering, and what it takes to ship reliable AI systems. 25+ years building and scaling engineering teams.',
  about:
    'I lead Platforms Engineering at AI Singapore, where my team supports multiple engineering teams across AI projects, infrastructure, and programme delivery. We run hybrid on-prem and multi-cloud (Azure, GCP), manage GPU/HPC capacity, and build the MLOps and data platform foundations that make AI projects repeatable.\n\nBefore AI Singapore, I co-founded two companies (both acquired), led engineering at Platform Computing and Revolution Analytics (acquired by Microsoft), and served as a Scientific Advisor on national HPC resource allocation. 25+ years of building platforms, shipping systems, and learning what breaks.',
  experiences: [
    {
      title: 'Head, Platforms Engineering',
      org: 'AI Singapore',
      period: '2018–Present',
      summary:
        'Leads a 10-person platform org (InfraOps, DataOps, MLOps, Experiences) supporting 7+ engineering teams across national AI programmes.',
      highlights: [
        'Hybrid on-prem + Azure/GCP infrastructure for AIAP, 100E, and AIEH.',
        '32x H100 GPUs, 500TB+ MinIO S3, Kubernetes, and ML platform stack.',
        'Building Kapitan Orchard: sovereign LLM platform on Apple Silicon.',
      ],
    },
    {
      title: 'Co-Founder',
      org: 'Scalable Systems (acquired by Platform Computing, later IBM)',
      period: '2003–2006',
      summary:
        'Co-founded an HPC/cluster startup. Built production Linux clusters for enterprise and research. Acquired by Platform Computing.',
    },
    {
      title: 'Development Manager',
      org: 'Revolution Analytics (acquired by Microsoft)',
      period: '2012–2014',
      summary:
        'Led cloud engineering for R analytics platform. Co-architected RevoCloudR on AWS and OpenStack.',
    },
  ],
  currentFocus:
    'Shipping Kapitan Orchard (sovereign LLM platform on Apple Silicon), preparing AI Singapore\'s infrastructure move to NTU, and writing about what works in AI platform engineering.',
  updated: '2026-03-04',
};
