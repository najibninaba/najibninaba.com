# Repository Guidelines

This repository powers najibninaba.com, an Astro (static) site. Keep changes small, focused, and consistent with the current style.

## Project Structure & Module Organization
- `src/pages/` — route files (e.g., `index.astro`).
- `src/layouts/` — HTML document wrappers (site‑wide `<head>` lives in `Layout.astro`).
- `src/components/` — reusable UI fragments.
- `src/data/site.ts` — centralized content and types.
- `public/` — static assets copied verbatim to `dist/` (include `public/CNAME`).
- `dist/` — build output (generated).

## Build, Test, and Development Commands
- `pnpm dev` — start local dev server.
- `pnpm build` — produce static site in `dist/`.
- `pnpm preview` — serve the built site locally.
Notes: Node `24` per `.nvmrc` and the pnpm version pinned in `package.json`; `.agents/setup` installs both plus dependencies in Amp orbs.
- In orbs, run `amp orb services ensure` to start the dev server from `.amp/services.yaml` and get its portal URL. Check rendered UI changes with `agent-browser` against that URL.

## Coding Style & Naming Conventions
- TypeScript: 2‑space indentation; `.astro` files currently use tabs — follow the existing style per file. Do not reformat unrelated lines.
- Keep components small and co‑locate styles within `.astro` files when practical.
- Prefer named exports in `src/data/` and clear prop names for components.

## Testing Guidelines
- No formal test suite yet. If adding tests, use `vitest` and place files under `tests/` with `*.test.ts`. Keep tests deterministic and fast.

## Commit & Pull Request Guidelines
- Use Conventional Commits: `type(scope): summary`.
  - Example: `feat(analytics): add Umami tracking site‑wide`.
- PRs should include:
  - What changed and why; link related issues.
  - Screenshots for UI changes (before/after of the homepage).
  - Checklist: builds locally (`pnpm build`) and no unrelated formatting.

## Security & Configuration Tips
- Third‑party scripts (e.g., Umami) belong in `src/layouts/Layout.astro` inside `<head>`.
- Keep domain config in `public/CNAME` so it copies to `dist/` on build. Avoid duplicates at the repo root.
- Do not commit secrets. Use environment variables if future features require them.

## Agent‑Specific Instructions
- When automating changes, make surgical patches and keep diffs minimal.
- Respect existing file styles; do not mass‑reformat.
- Reference files explicitly in discussions (e.g., `src/layouts/Layout.astro:44`).
- Provide a one‑sentence preamble before running build/test commands and group related actions.

## Reference Repositories
Amp orbs for this project clone two read-only reference repos under `../repos/`. Only this repo's `.agents/setup` runs, so their tooling is not installed; read their files but don't build or edit them from here.
- `../repos/najib-talks/` — source of talks.bijan.app. `site/<date>-<slug>/` holds each deck and PDF; `20261014-lorong-ai/` holds outlines, speaker notes and `post-talk-feedback.md`. Use it for talk titles, descriptions and URLs in `src/data/talks.ts` and talk posts in `src/data/posts.ts`.
  - The repo is private: never link it from the site (see `PRODUCT.md`). Link only talks.bijan.app URLs, and keep its private links (AISG mail, GitLab) out of site copy.
  - New talk, or a changed deck URL or title slide: update `src/data/talks.ts` and re-render the thumbnail as recorded in `DESIGN.md`.
  - Its Amp project is `najib/najib-talks`; prior context lives in threads such as "Orb setup configuration" (T-01a1949b-85b3-75f8-8cfa-34549cb789a2) and "Orchard talk strategy" (T-01a0b8ac-6624-7379-8b99-c813dbaef584).
- `../repos/najibninaba/` — GitHub profile README. Keep the bio and HPC-habits wording consistent with `src/data/site.ts`.
