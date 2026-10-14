import type { ImageMetadata } from 'astro';
// Title slide of the published deck, rendered 2026-10-14; see DESIGN.md for provenance.
import lorongAiThumbnail from '../assets/talks/2026-10-14-lorong-ai-thumb.webp';

export type Talk = {
  title: string;
  subtitle?: string;
  event: string;
  date: string;
  location?: string;
  thumbnail: ImageMetadata;
  thumbnailAlt: string;
  description: string;
  url: string;
  pdfUrl?: string;
  eventUrl?: string;
  recordingUrl?: string;
};

// Newest first.
export const talks: Talk[] = [
  {
    title: 'Agentic engineering at AI Singapore',
    subtitle: 'Learning at the edge, bringing it home',
    event: 'Lorong AI',
    date: '2026-10-14',
    location: 'Singapore',
    thumbnail: lorongAiThumbnail,
    thumbnailAlt: 'Title slide: Agentic engineering at AI Singapore. Learning at the edge, bringing it home.',
    description:
      'Running coding agents the way I once ran jobs on a cluster: independent pieces in parallel, each isolated and backed by evidence. The patterns I learned building Orchard, and how AI Singapore’s Platforms team is bringing them into the organisation.',
    url: 'https://talks.bijan.app/2026-10-14-lorong-ai/',
    pdfUrl: 'https://talks.bijan.app/2026-10-14-lorong-ai/2026-10-14-lorong-ai.pdf',
    eventUrl: 'https://luma.com/npubhgx0',
  },
];
