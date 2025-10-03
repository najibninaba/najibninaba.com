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
  title: 'Head of Platforms Engineering, AI Singapore',
  tagline: 'AI Infrastructure & Platforms Leader',
  description:
    'Technology leader with 24+ years in AI/ML, HPC, and cloud infrastructure. Leads Platforms Engineering at AI Singapore across InfraOps, DataOps, MLOps, and Experiences, building robust hybrid platforms that enable national AI programs.',
  about:
    'Najib is a technology leader with over 24 years of experience architecting and delivering AI/ML, HPC, and cloud infrastructure. As Head of Platforms Engineering at AI Singapore, he leads InfraOps, DataOps, MLOps, and Experiences to provide the infrastructure, data platforms, and tooling behind national AI initiatives such as the AI Apprenticeship Programme (AIAP) and 100 Experiments (100E). Since 2018, he has helped build AI Singapore’s hybrid platform across on‑premises data centers and multiple clouds (Azure and Google Cloud) to support demanding AI workloads.',
  experiences: [
    {
      title: 'Head of Platforms Engineering',
      org: 'AI Singapore',
      period: '2018—Present',
      summary:
        'Leads the Platforms Engineering Group (InfraOps, DataOps, MLOps, Experiences), delivering infrastructure, data platforms, and tooling that power AI Singapore’s programs and research.',
      highlights: [
        'Built and operates a robust hybrid infrastructure across on‑premises data centers, Microsoft Azure, and Google Cloud.',
        'Enabled AIAP, 100E, and research initiatives with scalable, secure platforms and developer tooling.',
        'Established modern MLOps practices and improved developer and user experiences for AI applications.',
      ],
    },
    {
      title: 'Co‑founder',
      org: 'Scalable Systems; Revolution Analytics',
      period: 'Earlier',
      summary:
        'Co‑founded technology companies acquired by Platform Computing (later IBM) and Microsoft, demonstrating the ability to build and scale enterprise platforms.',
      highlights: [
        'Scalable Systems → acquired by Platform Computing (later IBM).',
        'Revolution Analytics → acquired by Microsoft.',
      ],
    },
    {
      title: 'Scientific Advisor (AI), TRAC',
      org: 'NSCC Singapore',
      period: 'Two terms, until late 2024',
      summary:
        'Advised the Technical Resource Allocation Committee on supercomputing resource allocation, combining AI infrastructure and HPC expertise to shape national priorities.',
      highlights: [
        'Guided allocation strategy for national supercomputing resources.',
        'Strengthened alignment between national AI and HPC initiatives.',
      ],
    },
  ],
  currentFocus:
    'Leading a multi‑disciplinary team across InfraOps, DataOps, MLOps, and Experiences to advance MLOps practices and user‑centric experiences in AI applications.',
  updated: '2025-01-23',
};