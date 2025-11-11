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
Notes: Node `18` per `.nvmrc`. Use `pnpm` (install via `corepack enable` or `npm i -g pnpm`).

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
- Use RepoPrompt (RP) tools for all file operations. Scans/searches: `get_file_tree`, `file_search`; reads: `read_file` in ≤250‑line chunks; edits: `apply_patch` (no raw shell edits like `sed`); workspace management: `manage_selection`, `workspace_context`.
- Do not use shell search tools (`rg`, `grep`). For repository searches, use RP `file_search` exclusively. Provide a one‑sentence preamble before running build/test commands and group related actions.
