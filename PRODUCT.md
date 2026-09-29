# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
- **Engineering peers and leaders** (primary): platform, infra and AI engineers and their managers. They arrive from a LinkedIn/X/Substack post or a conference mention and want to judge, in a minute or two, whether Najib's view on AI platforms and agent-assisted development is worth following.
- **Event organisers and press**: they need an accurate title, a short or long bio, a headshot and links, and they need them fast and copy-pasteable.
- **Collaborators and hiring**: potential partners, contributors and recruiters checking his track record and what he is building now.

## Product Purpose
A personal site for Najib Ninaba. It states who he is (Senior Associate Director at NTU; Head of Platforms Engineering at AI Singapore; hands-on builder of tools for agent-assisted development), shows the work that proves it, and points to his writing. Success means a visitor leaves knowing his position and his flagship projects, and follows, reads or gets in touch.

## Positioning
He's a platform engineer who has run production systems for 25 years (early Linux HPC clusters in Singapore since around 2000, two startups, Platform Computing, Revolution Analytics, and one of AI Singapore's original four engineers) and who still ships code himself, for example Orchard's roughly 1,400 commits in 6 months. His thesis: "AI makes software cheaper to build, but not cheaper to own." Old HPC habits still apply: clear contracts, observable behaviour, disciplined workflows, and ownership after the demo.

## Operating Context
Static Astro site on GitHub Pages at najibninaba.com. Content is hand-curated in TypeScript (`src/data/site.ts`, `src/data/posts.ts`, `src/data/projects.ts`). The writing feed links out to LinkedIn, X and Substack. Visitors come mostly on mobile from social links, and on desktop from event pages.

## Capabilities and Constraints
- The canonical bio source is the Amp thread "Professional Bio" (T-01a0bda2, 20 Sep 2026) and its 22 Sep revision. The formal title is Senior Associate Director, NTU; the functional role is Head of Platforms Engineering, AI Singapore. AI Singapore moved from NUS to NTU in April 2026.
- Featured projects (only these three):
  - **Orchard** (kapitan-ai/orchard, public, Apache-2.0, pre-release pilot): created by Najib.
  - **Cuaca** (private, not launched): describe it but don't link it until a live URL is confirmed.
  - **RepoPrompt CE** (repoprompt/repoprompt-ce, public): Najib is a contributor and reviewer, not the author. Always frame it that way.
- No Talks section yet.
- Don't publish headcount, team counts or hardware figures (10-person org, 7+ teams, 32×H100, 500TB+). The user decided on 2026-09-29 to drop them.
- Don't link private repos (orchard-demo, orchard-workbench, homebrew-orchard, cuaca) or mention Cuaca's unreleased features.
- Umami analytics stays in the `<head>` of `Layout.astro`.

## Brand Commitments
- Voice: plain, direct and practical. Delivery over theory, ownership over hype. No superlatives or buzzwords.
- Name as written: "Najib Ninaba".
- Assets on hand: `public/profile.png` (casual headshot).
- Visual direction (standing preference, chosen 2026-09-29): the category standard played straight, a minimal engineer's homepage with no themed metaphor. The craft bar comes from paco.me, rauno.me, leerob.com, brianlovin.com, mitchellh.com and simonwillison.net: typography first, restrained, precise interaction details, writing and projects as clean lists, and polished light/dark themes.

## Evidence on Hand
- Canonical long, speaker, short and one-line bios (Amp Professional Bio thread).
- Orchard: 35★, about 1,525 commits, a demo video (https://youtu.be/lChCSLT3ra8), Console screenshots and a logo in the orchard repo `docs/media/` and `apps/orchard_controller/priv/static/images/`.
- Cuaca: brand marks that change colour with air quality (`docs/brand/`) and screenshots (`docs/pr/all-forecast-areas/`) in the private cuaca repo.
- RepoPrompt CE: 938★, 32 contributors, v1.5.0. Najib's merged PRs include Cursor ACP support (#902), Cursor Effort/Speed controls (#960), Codex goals by default (#33), and he maintains the Homebrew cask.
- There are no testimonials, client logos or press quotes. Don't invent any.

## Product Principles
1. Proof over claims: show the work (repos, commits, screenshots) instead of adjectives.
2. Accurate to the canonical bio: every factual statement must trace back to it or to a public repo.
3. Easy for organisers: title, bio and headshot must be easy to find and copy.
4. Built like he builds: fast, static, accessible and nothing extra, so the site itself shows good ownership.

## Accessibility & Inclusion
WCAG 2.2 AA. Respect `prefers-reduced-motion` and `prefers-color-scheme`.
