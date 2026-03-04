/**
 * Published content across platforms.
 * Add new posts at the top (newest first).
 * This is the single source for the content feed on the site.
 */

export type Platform = 'linkedin' | 'x' | 'substack';

export type Post = {
  platform: Platform;
  date: string; // YYYY-MM-DD
  title: string; // short title for the card
  hook: string; // first line / hook text
  url: string;
  tags?: string[];
  type?: 'post' | 'repost' | 'thread' | 'reply' | 'article';
};

export const posts: Post[] = [
  // --- LinkedIn ---
  {
    platform: 'linkedin',
    date: '2026-03-04',
    title: 'Agent-Ready Platforms Break on Docs First',
    hook: 'I tried making our platform agent-ready. The first thing that broke was the docs.',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7434801376406372353/',
    tags: ['platform-engineering', 'ai-agents', 'documentation'],
    type: 'repost',
  },
  {
    platform: 'linkedin',
    date: '2026-03-02',
    title: "Jevons' Paradox and the Two-Track Talent Split",
    hook: 'We could not support every person who needed something built. Coding agents like Claude Code change that equation.',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7434188013691260928/',
    tags: ['platform-engineering', 'ai-agents', 'engineering-leadership'],
  },
  {
    platform: 'linkedin',
    date: '2026-02-25',
    title: 'CNA AI Talent: Workforce Readiness Is Where Plans Succeed or Fail',
    hook: "CNA's article on Singapore's AI missions gets one thing right: workforce readiness is where AI plans succeed or fail.",
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7432258743461093376/',
    tags: ['ai-singapore', 'talent', 'workforce'],
  },
  {
    platform: 'linkedin',
    date: '2026-02-24',
    title: 'AI Made Software Cheap to Build, Not Cheap to Own',
    hook: 'AI made software cheap to build, not cheap to own.',
    url: 'https://www.linkedin.com/posts/najibninaba_platformengineering-productstrategy-saas-activity-7431958902411329536-rxUR',
    tags: ['platform-engineering', 'build-vs-buy', 'saas'],
  },
  {
    platform: 'linkedin',
    date: '2026-02-22',
    title: '2.6B Tokens: Model Quality Is Improving, Results Still Depend on Workflow',
    hook: 'After around 2.6B tokens in the last 30 days, one lesson keeps repeating for me.',
    url: 'https://www.linkedin.com/posts/najibninaba_after-around-26b-tokens-in-the-last-30-days-activity-7431187160608829441-8Whx',
    tags: ['coding-agents', 'methodology', 'ai-engineering'],
  },
  // --- X ---
  {
    platform: 'x',
    date: '2026-02-19',
    title: 'Anthropic Ecosystem Lock-In',
    hook: 'The risk with Anthropic right now is ecosystem lock-in through developer experience.',
    url: 'https://x.com/najibninaba',
    tags: ['anthropic', 'ai-ecosystem'],
  },
  {
    platform: 'x',
    date: '2026-01-10',
    title: 'RepoPrompt on Product Hunt',
    hook: 'RepoPrompt is live on Product Hunt today.',
    url: 'https://x.com/najibninaba/status/2009807110117437641',
    tags: ['repoprompt', 'tools'],
    type: 'post',
  },
];

/** Helper: get posts filtered by platform */
export function getPostsByPlatform(platform: Platform): Post[] {
  return posts.filter((p) => p.platform === platform);
}

/** Helper: get unique platforms from posts */
export function getActivePlatforms(): Platform[] {
  return [...new Set(posts.map((p) => p.platform))];
}
