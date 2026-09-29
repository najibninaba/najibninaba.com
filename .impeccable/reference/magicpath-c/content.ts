export const person = {
  name: 'Najib Ninaba',
  roles: [
    { title: 'Senior Associate Director', org: 'Nanyang Technological University', short: 'NTU' },
    { title: 'Head of Platforms Engineering', org: 'AI Singapore', short: 'AI Singapore' },
  ],
  thesis: 'AI makes software cheaper to build, but not cheaper to own.',
  location: 'Singapore',
};

export const bio = {
  short:
    'Najib Ninaba is Senior Associate Director at Nanyang Technological University and Head of Platforms Engineering at AI Singapore. He builds tools for agent-assisted development, including Orchard, an open-source platform for sovereign on-premises LLM orchestration.',
  long: [
    'Najib Ninaba is Senior Associate Director at Nanyang Technological University, Head of Platforms Engineering at AI Singapore, and a hands-on builder of tools for agent-assisted development. His work sits at the intersection of platform architecture, operational ownership, and the engineering systems that help teams deliver reliably.',
    'Najib began his career around 2000, building early Linux high-performance computing clusters in Singapore. He contributed cluster tooling and packaging to the Rocks ecosystem before co-founding Scalable Systems, an HPC startup acquired by Platform Computing in 2006. He later led engineering teams at Platform Computing and Revolution Analytics, working across distributed computing, cloud infrastructure, and large-scale analytics. He also co-founded Real Analytics, where he worked on data engineering, consulting, and technical training.',
    'In 2017, Najib joined the NUS School of Continuing and Lifelong Education as a Data Engineering Architect, where he lectured in data analytics and data engineering. He joined AI Singapore in January 2018 as one of its original four engineers. He now leads the Platforms Engineering function supporting national AI programmes through hybrid infrastructure, GPU and HPC capacity, MLOps foundations, data platforms, and reliability practices. When AI Singapore transitioned from NUS to NTU in April 2026, Najib became Senior Associate Director at NTU while continuing to lead Platforms Engineering. From 2020 to 2024, he also served on the National Supercomputing Centre Singapore’s Technical Resource Allocation Committee as its Scientific Advisor for AI.',
    'He created Orchard, an open-source platform for sovereign on-premises LLM orchestration, and contributes to and reviews RepoPrompt CE, a context-engineering application for AI coding agents.',
    'Najib’s practical view is that AI makes software cheaper to build, but not cheaper to own. More software creates more systems that must be understood, operated, secured, and maintained. Many of the old HPC habits still apply: clear contracts, observable behavior, disciplined workflows, and ownership after the demo.',
  ],
};

export type Project = {
  name: string;
  role: string;
  status: string;
  pitch: string;
  detail: string;
  specifics: string[];
  href?: string;
  hrefLabel?: string;
  preview: 'orchard' | 'cuaca' | 'repoprompt';
};

export const projects: Project[] = [
  {
    name: 'Orchard',
    role: 'Creator',
    status: 'Pilot · Apache-2.0',
    pitch: 'Sovereign LLM orchestration for fleets of Apple Silicon Macs.',
    detail:
      'Turns a set of Macs into one OpenAI-compatible service. An Elixir/OTP control plane handles auth, deny-by-default model grants per Workspace, scheduling, and a durable trace of every request.',
    specifics: ['Postgres is the only infrastructure', 'MLX-LM workers behind a Node Agent', 'Request timeline with tokens and latency'],
    href: 'https://github.com/kapitan-ai/orchard',
    hrefLabel: 'kapitan-ai/orchard',
    preview: 'orchard',
  },
  {
    name: 'Cuaca',
    role: 'Creator',
    status: 'Private build',
    pitch: 'Singapore weather and haze, from official data only.',
    detail:
      'An installable PWA on data.gov.sg feeds: two-hour forecasts for all 47 areas, PSI and PM2.5, and a computed US AQI kept separate from the official PSI. The last good snapshot is cached at the edge, so it keeps working through upstream outages.',
    specifics: ['React 19 · Effect · Cloudflare Workers + D1', 'EPA NowCast US AQI beside NEA PSI', 'Marks data stale after 15 minutes'],
    preview: 'cuaca',
  },
  {
    name: 'RepoPrompt CE',
    role: 'Contributor & reviewer',
    status: 'Open source · macOS',
    pitch: 'Native context engineering for AI coding agents, with an MCP server.',
    detail:
      'A free, open-source macOS app that builds focused, reviewable context from files, CodeMaps and diffs. My contributions include Cursor ACP agent support, Cursor effort and speed controls, Codex goals, and maintaining the Homebrew cask.',
    specifics: ['Cursor ACP support (#902)', 'Cursor effort/speed controls (#960)', 'Maintains the Homebrew cask'],
    href: 'https://github.com/repoprompt/repoprompt-ce',
    hrefLabel: 'repoprompt/repoprompt-ce',
    preview: 'repoprompt',
  },
];

export const posts = [
  { date: '2026-03-04', title: 'Agent-ready platforms break on docs first', where: 'LinkedIn', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7434801376406372353/' },
  { date: '2026-03-02', title: 'Jevons’ paradox and the two-track talent split', where: 'LinkedIn', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7434188013691260928/' },
  { date: '2026-02-24', title: 'AI made software cheap to build, not cheap to own', where: 'LinkedIn', href: 'https://www.linkedin.com/posts/najibninaba_platformengineering-productstrategy-saas-activity-7431958902411329536-rxUR' },
  { date: '2026-02-22', title: '2.6B tokens: model quality improves, results still depend on workflow', where: 'LinkedIn', href: 'https://www.linkedin.com/posts/najibninaba_after-around-26b-tokens-in-the-last-30-days-activity-7431187160608829441-8Whx' },
  { date: '2026-02-25', title: 'Workforce readiness is where AI plans succeed or fail', where: 'LinkedIn', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7432258743461093376/' },
].sort((a, b) => b.date.localeCompare(a.date));

export const experience = [
  { years: '2018–now', title: 'Senior Associate Director · Head of Platforms Engineering', org: 'NTU · AI Singapore', note: 'Joined as one of the original four engineers. Became Senior Associate Director at NTU when AI Singapore moved from NUS in April 2026.' },
  { years: '2020–2024', title: 'Scientific Advisor for AI', org: 'NSCC Technical Resource Allocation Committee', note: '' },
  { years: '2017', title: 'Data Engineering Architect', org: 'NUS School of Continuing and Lifelong Education', note: 'Lectured in data analytics and data engineering.' },
  { years: '2016–2017', title: 'Co-founder', org: 'Real Analytics', note: 'Data engineering, consulting and training.' },
  { years: '2012–2014', title: 'Development Manager', org: 'Revolution Analytics', note: 'Cloud and analytics infrastructure.' },
  { years: '2006–2010', title: 'Development Manager', org: 'Platform Computing', note: 'Distributed computing and HPC systems.' },
  { years: '2003–2006', title: 'Co-founder', org: 'Scalable Systems', note: 'HPC startup, acquired by Platform Computing in 2006.' },
  { years: '~2000', title: 'Early Linux HPC clusters', org: 'Singapore · Rocks ecosystem', note: 'Cluster tooling and packaging.' },
];

export const links = [
  { label: 'GitHub', href: 'https://github.com/najibninaba' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/najibninaba/' },
  { label: 'X', href: 'https://x.com/najibninaba' },
];

export function fmtDate(d: string) {
  const [y, m, day] = d.split('-').map(Number);
  return new Date(y, m - 1, day).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}
