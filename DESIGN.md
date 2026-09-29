# Homepage: index rail

Implemented and reviewed on 2026-09-29 against the approved MagicPath variant C. The reference files and direction contract are build-time documentation only; none of their contract prose is shipped to the browser.

## Implementation decisions

- Plain Astro and scoped CSS; no React, Tailwind, client framework or hydration runtime. Geist and Geist Mono are self-hosted variable WOFF2 fonts with swap; the text face is preloaded. Mono is limited to dates.
- A 1040px frame contains the 168px sticky rail and a maximum 680px reading column. Below 768px, the rail becomes a headshot/theme bar. Projects remain visible, with a 1.015 hover scale and 16:9 top-aligned images.
- Reference light/dark tokens drive text, surfaces, selection, focus and scrollbars. System preference is the default; a stored override is read in the head before paint. Storage failures do not break the page.
- All content is server-rendered. Without JavaScript, the long bio is available through native details/summary, and nonfunctional copy/theme controls stay hidden. The download points to the original profile file.
- Both role titles remain visible, AI Singapore first. Experience dates are preserved from the verified site data rather than the abbreviated reference dates. Writing is sorted newest-first and limited to five posts.
- Later approvals replace the RepoPrompt icon with its real screenshot and attribution, and link Cuaca's live site. Cuaca's private repository is never linked. Umami remains in the head; canonical, social metadata and Person JSON-LD describe the current roles.

## Finish review and verdict

**Verdict: ready for review.** The built site was visually inspected at 1440×900 and 390×844 CSS pixels, both light and dark, at 2× DPR. These are Chromium viewport checks, not real-device or Safari certification. Expanded bio was also inspected. No clipping, blank images or unintended blur remained after images and the entrance animation settled.

- `pnpm build`: one static page, 14 optimised images, no warnings.
- `git diff --check`: clean.
- Chromium interaction checks: system themes and persisted override; all three exact clipboard payloads; short/long bio visibility; every rail link's `aria-current`; sticky positioning; keyboard skip-link focus; no horizontal overflow; newest-first dates; no page errors.
- Progressive enhancement: all three projects and both bios available without JavaScript; native long-bio disclosure works. Reduced motion removes the entrance animation. Theme switching still works with blocked localStorage.
- axe checks with WCAG 2 A/AA, 2.1 AA and 2.2 AA tags: zero violations in all four width/theme combinations, including text contrast. Automated checks are not a complete accessibility certification.
- Lighthouse 13.5.0, production build served by `pnpm preview`, local Chromium: mobile **100 performance / 100 accessibility / 100 best practices / 100 SEO**; desktop **100 / 100 / 100 / 100**. Both JSON reports have empty runWarnings. The mobile CLI printed an internal Lantern NO_LCP diagnostic, but completed with measured LCP 1.8s and all four scores; this is not an Astro build warning.
- Built HTML checked for contract headings, seed text, private Cuaca repository links and prohibited team/hardware figures: none found.

No known unfulfilled functional requirement. The low-resolution supplied headshot remains intentionally temporary. Reference rounding is retained on image frames and the bio utility block; there are no project cards, shadows or gradients. Full verified Experience dates wrap where the reference's abbreviated dates did not.

## Raster provenance

All generated responsive WebP derivatives inherit their source's attribution below. The original files under `public/` are also copied by Astro, including the existing unused request-details image. No generated artwork or app icon was introduced.

| Asset | Source and handling | Attribution |
| --- | --- | --- |
| `public/profile.png` | Existing user-supplied portrait, retained unchanged. Used for the avatar, bio, original download and social image. Astro creates resized WebP derivatives. Original photographer and creation date are not recorded. | Portrait supplied by Najib Ninaba; no additional rights claim made. |
| `public/projects/orchard/playground-inference.webp` | Existing asset from `kapitan-ai/orchard`, `docs/media/playground-inference.png`, imported on 2026-09-29. Prior production: ImageMagick `-resize '1600x>' -quality 82`. Astro creates top-aligned 16:9 WebP derivatives. | © 2026 AI Singapore, Orchard repository material under its Apache-2.0 documentation terms. Visible caption: Screenshot: Orchard Console. |
| `public/projects/orchard/request-details.webp` | Existing asset from `kapitan-ai/orchard`, `docs/media/request-details.png`, imported on 2026-09-29 with the same ImageMagick settings. Retained but not displayed on the homepage. | © 2026 AI Singapore, same Orchard attribution. |
| `public/projects/cuaca/now-1440.png` | Fresh capture of https://cuaca.bijan.app/ on 2026-09-29, Now view, 1440×900 CSS px at 2× DPR (2880×1800 raster). Replaces the offline fixture capture. HTTP HEAD returned 200. The page initially showed fallback data; the captured settled view displays LIVE OFFICIAL DATA, 17:00 SGT. Astro creates top-aligned WebP derivatives. | Cuaca, created by Najib Ninaba. Visible linked caption: Screenshot: cuaca.bijan.app. |
| `src/assets/projects/repoprompt-agent-new-session.webp` | Downloaded https://repoprompt.com/images/agent-new-session.webp on 2026-09-29; source is 2584×1794. Astro creates top-aligned 16:9 WebP derivatives. Exact requested alt text is retained. | © Repo Prompt, used with attribution. Visible linked caption: Screenshot: repoprompt.com. |

Orchard source provenance was recovered from the prior content-build thread, whose commands are recorded in [that thread](https://ampcode.com/threads/T-01a0ec44-ab92-75bd-8c23-51fc3823baba). Its source checkout commit was not recorded; no revision is invented here.
