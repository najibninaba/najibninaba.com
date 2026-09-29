import type { ImageMetadata } from 'astro';
// Existing project-owned screenshots supplied for this site; see DESIGN.md for provenance.
import orchardScreenshot from '../../public/projects/orchard/playground-inference.webp';
// https://cuaca.bijan.app/ — Now view captured 2026-09-29, 1440×900 at 2× DPR.
import cuacaScreenshot from '../../public/projects/cuaca/now-1440.png';
// https://repoprompt.com/images/agent-new-session.webp — downloaded 2026-09-29.
// © Repo Prompt, used with attribution
import repopromptScreenshot from '../assets/projects/repoprompt-agent-new-session.webp';

export type Project = {
  name: string;
  role: string;
  screenshot: ImageMetadata;
  screenshotAlt: string;
  caption?: string;
  captionLink?: string;
  captionUrl?: string;
  pitch?: string;
  description: string;
  details: string[];
  status?: string;
  license?: string;
  url?: string;
  siteUrl?: string;
  demoUrl?: string;
  logo?: string;
  images?: Array<{
    src: string;
    alt: string;
  }>;
};

export const projects: Project[] = [
  {
    name: 'Orchard',
    role: 'Creator',
    screenshot: orchardScreenshot,
    screenshotAlt: 'Orchard Playground showing a completed local inference request',
    pitch: 'Your LLMs. Your hardware. Your rules.',
    description:
      'Sovereign on-premises LLM orchestration that turns a fleet of Apple Silicon Macs into one OpenAI-compatible service.',
    details: [
      'Elixir/OTP control plane with per-Workspace deny-by-default model grants, request tracing, Postgres as the only infrastructure, and MLX-LM workers.',
      'The portable control plane spans Apple Silicon macOS and Linux x86_64 development environments. Inference uses MLX-LM on Apple Silicon; Linux x86_64 is not presented as a qualified inference target.',
    ],
    status: 'Pre-release pilot',
    license: 'Apache-2.0',
    url: 'https://github.com/kapitan-ai/orchard',
    demoUrl: 'https://youtu.be/lChCSLT3ra8',
    logo: '/projects/orchard/orchard-mark.svg',
    images: [
      {
        src: '/projects/orchard/playground-inference.webp',
        alt: 'Orchard Playground showing a completed local inference request',
      },
    ],
  },
  {
    name: 'Cuaca',
    role: 'Creator',
    screenshot: cuacaScreenshot,
    screenshotAlt: 'Cuaca Now view showing air quality and weather for Pasir Ris',
    caption: 'Captured 29 Sep 2026 from',
    captionLink: 'cuaca.bijan.app',
    captionUrl: 'https://cuaca.bijan.app',
    url: 'https://cuaca.bijan.app',
    description:
      'A Singapore neighbourhood weather and haze briefing built only on official data.gov.sg feeds.',
    details: [
      'Covers two-hour forecasts for all 47 forecast areas, official PSI and PM2.5 readings, and a separately labelled US AQI computed with EPA NowCast.',
      'Uses an edge-cached last-known-good snapshot through upstream outages. Built with React 19, Vite, Effect, Cloudflare Workers and D1 as an installable PWA.',
    ],
    status: 'Live · PWA',
    logo: '/projects/cuaca/cuaca-mark-neutral.svg',
    images: [
      {
        src: '/projects/cuaca/now-1440.png',
        alt: 'Cuaca neighbourhood forecast view showing Singapore forecast areas',
      },
    ],
  },
  {
    name: 'RepoPrompt CE',
    role: 'Contributor & reviewer',
    screenshot: repopromptScreenshot,
    screenshotAlt: 'RepoPrompt CE agent session window with the chat list, the workflow tips and the Codex CLI model selector',
    caption: 'Screenshot © Repo Prompt,',
    captionLink: 'repoprompt.com',
    captionUrl: 'https://repoprompt.com',
    status: 'Open source · macOS',
    description:
      'A free, open-source native macOS context-engineering app with a bundled MCP server for AI coding agents.',
    details: [
      'Contributions include Cursor ACP agent support (#902), Cursor Effort and Speed controls (#960), Codex goal support on by default (#33), and Homebrew install documentation.',
      'Maintains the RepoPrompt CE Homebrew cask in repoprompt/homebrew-repoprompt-ce.',
    ],
    url: 'https://github.com/repoprompt/repoprompt-ce',
    siteUrl: 'https://repoprompt.com',
  },
];
