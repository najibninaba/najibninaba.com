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
  title: 'Head, Platforms Engineering, AI Singapore',
  tagline: 'AI Infrastructure and Platforms Engineering Leader',
  description:
    'Deep‑tech leader in Artificial Intelligence (AI) platforms, High Performance Computing (HPC) and cloud. Leads Platforms Engineering at AI Singapore across InfraOps, DataOps, machine learning operations (MLOps) and product experiences. Builds secure, reliable hybrid platforms.',
  about:
    'Najib is a deep‑tech leader spanning Artificial Intelligence (AI) platforms, High Performance Computing (HPC) and cloud. He leads Platforms Engineering at AI Singapore, accountable for InfraOps, DataOps, machine learning operations (MLOps) and product experiences across on‑prem and multi‑cloud (Azure, Google Cloud).\n\nHe architects AI and HPC clusters, Kubernetes and service meshes; designs data platforms, security and governance; and drives service level objective (SLO)‑based reliability, continuous integration/continuous delivery (CI/CD) and observability. A builder at heart, he focuses on developer experience, repeatable workflows and reproducibility.\n\nPreviously, he co‑founded Scalable Systems (acquired by Platform Computing; later IBM) and REAL Analytics; led engineering at Platform Computing on HPC infrastructure management; delivered Big Data/Hadoop solutions at 1degreenorth; and contributed at Revolution Analytics (acquired by Microsoft in 2015). He also served two terms with the National Supercomputing Centre (NSCC) Singapore’s Technical Resource Allocation Committee (TRAC), and taught with the National University of Singapore (NUS) School of Continuing and Lifelong Education (SCALE). He balances strategy and hands‑on execution; from platform roadmaps and budgets to incident response, migrations and performance tuning.\n\nEarlier career milestone: contributed to SDSC’s NPACI Rocks (Rocks Clusters) from 2001—2006, delivering rolls and integrations for Sun Grid Engine (later Grid Engine) and PVFS, and presenting at Rocks‑A‑Palooza 2005. The work seeded Scalable Systems and the commercial ‘Scalable Rocks’ distribution and later led to joining Platform Computing in 2006.',
  experiences: [
    {
      title: 'Head, Platforms Engineering',
      org: 'AI Singapore',
      period: 'Jan 2018—Present',
      summary:
        'Leads Platforms Engineering at AI Singapore across InfraOps, DataOps, MLOps and product delivery.',
      highlights: [
        'Built hybrid on‑prem/Azure/Google Cloud for AIAP, 100E and research.',
        'Standardised MLOps, CI/CD and observability.',
        'Scaled shared GPU/HPC with SLOs, quotas and governance.',
      ],
    },
    {
      title: 'Scientific Advisor (AI), TRAC',
      org: 'NSCC Singapore',
      period: 'Nov 2020—Nov 2024',
      summary:
        'Served two terms on NSCC’s TRAC advising GPU/HPC allocation for national AI needs.',
      highlights: [
        'Reviewed proposals; shaped prioritization criteria.',
        'Aligned AI platform roadmaps with HPC ops and governance.',
      ],
    },
    {
      title: 'Data Engineering Architect (Data Analytics Programme)',
      org: 'National University of Singapore',
      period: 'Apr 2017—Dec 2017',
      summary:
        'Architected data engineering; supported programme delivery; adjunct with NUS SCALE.',
      highlights: [
        'Delivered applied data engineering/analytics sessions for continuing education learners.',
      ],
    },
    {
      title: 'Co‑Founder & Principal Consultant',
      org: 'REAL Analytics Pte Ltd',
      period: 'Jun 2016—Dec 2017',
      summary:
        'Co‑founded consultancy delivering big data platforms and engineering.',
      highlights: [
        'Delivered Hadoop and data pipelines for enterprises.',
        'Built cloud and data engineering capabilities.',
      ],
    },
    {
      title: 'Development Manager',
      org: 'Revolution Analytics Singapore Pte Ltd',
      period: 'Jan 2012—Jun 2014',
      summary:
        'Led cloud/VM engineering (acquired by Microsoft in 2015).',
      highlights: [
        'Co‑architected RevoCloudR on AWS and OpenStack.',
        'Integrated Revolution R Enterprise with Cloudera, Netezza and Intel.',
        'Coached APAC engineers; improved delivery practices.',
      ],
    },
    {
      title: 'Development Manager; later Contractor',
      org: '1degreenorth Pte Ltd',
      period: 'Oct 2010—Apr 2017',
      summary:
        'Led Big Data/Hadoop consulting; earlier Development Manager (2010–2011).',
      highlights: [
        'Delivered Big Data/Hadoop consulting, software and training.',
        'Automated deployments on Rocks+ and major Hadoop distributions.',
      ],
    },
    {
      title: 'Development Team Lead; later Development Manager',
      org: 'Platform Computing',
      period: 'Jul 2006—Jun 2010',
      summary:
        'Led Singapore team building HPC infrastructure management software; coached engineers.',
      highlights: [
        'Delivered features for cluster and workload management in enterprise HPC.',
        'Improved engineering practices and release cadence.',
      ],
    },
    {
      title: 'Co‑Founder & Senior Consultant',
      org: 'Scalable Systems Pte Ltd',
      period: 'Nov 2003—Jun 2006',
      summary:
        'Co‑founded HPC/cluster firm; led engineering and delivery; later acquired by Platform (then IBM).',
      highlights: [
        'Delivered production Linux clusters for enterprise and research.',
        'Automated provisioning to cut deployment time and drift.',
        'Released Scalable Rocks (2004).',
      ],
    },
    {
      title: 'Open‑source contributor, NPACI Rocks (Rocks Clusters)',
      period: '2001—2006',
      summary:
        'Contributed remotely to SDSC‑led NPACI Rocks; automated Linux installs via rolls.',
      highlights: [
        'Contributed PVFS and Grid Engine rolls.',
        'Visited SDSC; spoke at Rocks‑A‑Palooza 2005.',
        'Work seeded Scalable Systems and Scalable Rocks.',
      ],
    },
  ],
  currentFocus:
    'Advancing secure, multi‑cloud AI platforms; improving MLOps, developer workflows and user experiences to help teams ship reliable AI solutions.',
  updated: '2025-10-04',
};
