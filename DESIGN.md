---
name: Najib Ninaba
description: A minimal engineer's homepage. One reading column beside a sticky index rail, with hierarchy carried by type alone.
colors:
  paper: "#fcfcfb"
  paper-2: "#f4f4f2"
  ink: "#151515"
  ink-2: "#555552"
  ink-3: "#6f6f6b"
  rule: "#e6e6e3"
  accent: "#1a56c4"
  selection: "#d9e5fb"
  paper-dark: "#0f0f10"
  paper-2-dark: "#18181a"
  ink-dark: "#ececea"
  ink-2-dark: "#a8a8a4"
  ink-3-dark: "#8b8b87"
  rule-dark: "#242426"
  accent-dark: "#8fb3ff"
  selection-dark: "#23365c"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(34px, 4.6vw, 48px)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 500
    letterSpacing: "-0.015em"
  role-line:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "'ss01'"
  body-lead:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
    fontFeature: "'ss01'"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.65
    fontFeature: "'ss01'"
  body-small:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "'ss01'"
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
  meta:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
  mono-date:
    fontFamily: "'Geist Mono', ui-monospace, monospace"
    fontSize: "12.5px"
    fontWeight: 400
    fontFeature: "'tnum'"
rounded:
  focus: "3px"
  control: "6px"
  frame: "12px"
  round: "50%"
spacing:
  2xs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "24px"
  2xl: "40px"
  3xl: "56px"
  gutter: "64px"
  section: "96px"
components:
  rail-link:
    textColor: "{colors.ink-3}"
    typography: "{typography.body-small}"
    height: "24px"
  rail-link-active:
    textColor: "{colors.ink}"
  rail-dot:
    backgroundColor: "{colors.accent}"
    rounded: "{rounded.round}"
    size: "5px"
  theme-toggle:
    textColor: "{colors.ink-3}"
    rounded: "{rounded.round}"
    size: "32px"
  theme-toggle-hover:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
  project-preview:
    backgroundColor: "{colors.paper-2}"
    rounded: "{rounded.frame}"
  writing-row:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "10px 12px"
  writing-row-hover:
    backgroundColor: "{colors.paper-2}"
  copy-button:
    textColor: "{colors.ink-2}"
    typography: "{typography.meta}"
    rounded: "{rounded.control}"
    padding: "3px 10px"
    height: "28px"
  copy-button-hover:
    textColor: "{colors.ink}"
  bio-panel:
    backgroundColor: "{colors.paper-2}"
    rounded: "{rounded.frame}"
    padding: "24px"
---

# Design System: Najib Ninaba

## Overview

**Creative North Star: "The Index Card"**

The site is a minimal engineer's homepage, done straight: one reading column of plain facts next to a small sticky index of the sections. Type does all the ranking. There is one large line on the page (the name). Everything else sits between 12.5px and 18px, and weight, grey step and spacing do the rest of the work. Near-white paper, near-black ink, three greys and a hairline. The single blue accent is almost never seen: it marks keyboard focus and the active section in the rail, and nothing else.

Density is low and the measure is short. Sections are separated by whitespace instead of rules. Hairlines appear only between rows of a list. Project screenshots are the only images of any size, and they sit in quiet 12px frames rather than cards. The dark theme is a separate palette with its own values, not an inversion of the light one.

Motion is limited to a single entrance: blocks rise 6px out of a 3px blur on load, and hover and state changes are 150 to 500ms. All of it stops under `prefers-reduced-motion`.

**Key Characteristics:**
- One column (at most 680px) beside a 168px sticky rail, centred in a 1040px frame.
- Hierarchy through size, weight 500 against 400, and a three-step grey text ladder.
- Accent reserved for focus and the active-section dot; links stay ink-coloured.
- Flat throughout: no shadows or gradients, and depth only through one tinted surface (`paper-2`).
- Geist for all text, Geist Mono with tabular figures only for dates and year ranges.
- Paired light and dark palettes, following the system preference by default with a stored manual override.

An independent finish review returned "ship" on 2026-09-29.

## Colors

A warm-neutral paper-and-ink palette with one cobalt accent that almost never appears.

### Primary
- **Cobalt Focus** (`accent`; `accent-dark` in dark): the 2px focus ring on every focusable element and the 5px dot beside the active rail link. It is not used for link text, buttons or surfaces.

### Neutral
- **Paper** (`paper` / `paper-dark`): the page background, also the scrollbar track.
- **Shelf** (`paper-2` / `paper-2-dark`): the only tinted surface. Used for the bio panel, the frame behind project screenshots, the writing-row hover and the theme-toggle hover.
- **Ink** (`ink` / `ink-dark`): headings, the name, list titles and active or hovered navigation.
- **Graphite** (`ink-2` / `ink-2-dark`): reading prose (intro, project descriptions, bio copy) and secondary controls.
- **Pencil** (`ink-3` / `ink-3-dark`): section labels, role lines, metadata, captions, dates, idle rail links, the footer and the scrollbar thumb.
- **Hairline** (`rule` / `rule-dark`): 1px row dividers, the screenshot frame border, the avatar outline and the copy-button border.
- **Highlight** (`selection` / `selection-dark`): the text selection background. Text keeps its ink colour when selected.

### Named Rules
**The Ink Link Rule.** Links are ink (inherited colour) with a 1px underline mixed from ink at 25%, which turns to full `currentColor` on hover. The accent never colours a link.

**The Grey Ladder Rule.** Text uses exactly three steps, ink, ink-2 and ink-3. Add emphasis with weight or size, not with a fourth grey.

**The Dimmed Screenshot Rule.** In dark mode, project screenshots sit at `brightness(.88)` and return to full brightness on hover or focus within the item.

## Typography

**Display and Body Font:** Geist (variable, self-hosted WOFF2, preloaded, `font-display: swap`), falling back to ui-sans-serif and system-ui
**Mono Font:** Geist Mono (variable, self-hosted), falling back to ui-monospace

**Character:** A single neo-grotesque family at two weights, 400 and 500. Body text enables Geist's `ss01` stylistic set. The mono face appears only where numbers need to align.

### Hierarchy
- **Display** (500, clamp 34 to 48px, line-height 1.08, -0.03em, balanced): the h1 name only. It is the one large line on the page.
- **Title** (500, 18px, -0.015em): project names.
- **Body lead** (400, 16px, line-height 1.7, max 60ch): the first-person intro, set in Graphite.
- **Body** (400, 15.5px, line-height 1.65, max 60ch): project descriptions and writing and experience rows.
- **Role line** (400, 16px, line-height 1.55, max 52ch, Pencil): the roles under the name, 16px below it.
- **Body small** (400, 14px, line-height 1.6): rail links and experience summaries (line-height 1.55). Bio copy is a 14.5px variant at line-height 1.7.
- **Label** (500, 13px, Pencil): the section headings (Projects, Writing, Experience, Bio).
- **Meta** (400, 13px): project role and status lines, captions, project URLs, copy buttons and the footer.
- **Mono date** (Geist Mono, 12.5px, tabular figures, Pencil): post dates and experience year ranges.

### Named Rules
**The One Loud Line Rule.** Only the name goes above 18px. Section headings are small, and space and position set them apart.

**The Mono Is For Time Rule.** Geist Mono is used only for dates and year ranges, always with tabular figures.

## Layout

A centred 1040px frame with 24px side padding, a top padding of `clamp(3rem, 11vh, 7.5rem)` and 96px at the bottom. It holds a two-column grid: a 168px rail and a `minmax(0, 1fr)` column capped at 680px, with a 64px gap. The rail is sticky at `clamp(24px, 6vh, 56px)` from the top. From top to bottom it holds a 36px round avatar, the section nav 40px below it (items 8px apart, at least 24px tall) and the theme toggle 40px below that.

Vertical rhythm: 96px between sections, and 96px before the footer, which has a hairline above it.
Within the About block the role line sits 16px below the name and the intro 40px below the role line.
Section labels sit 24px above their content.
Projects are 40px apart, with a 192px thumbnail and text in columns separated by 24px.
At 600px and below, the thumbnail stacks above the text with a 16px gap.
Writing and experience rows share a two-column grid: a 104px date column, a 16px gap and the text.
Rows are padded 10px (writing) or 12px (experience).

Breakpoints:
- **767px and below:** one column with a 40px row gap. The rail turns into a static top bar with the avatar on the left and the theme toggle on the right, and the section nav is hidden.
- **600px and below:** project thumbnails stack above the text at a fixed 192px width.
- **420px and below:** the date column narrows to 90px with a 14px gap.

Sections use `scroll-margin-top: 64px`, so in-page links land clear of the top edge.

## Elevation & Depth

The system is flat. There is no `box-shadow` or gradient anywhere. Depth comes from one tonal step: the Shelf tint (`paper-2`) behind the bio panel and the screenshot frames, and as a hover fill. Hairlines separate list rows. The only layered effects are motion: the load-in blur and the 1.015 screenshot zoom inside a clipped frame.

### Named Rules
**The No-Shadow Rule.** Surfaces never cast shadows. Separate things with the Shelf tint, a 1px hairline or whitespace.

## Shapes

Corners are soft and graded by object size: 12px for large frames (screenshot previews, the bio panel), 6px for small controls and row hovers (copy buttons, writing rows) and 3px on the focus ring.
Identity and icon marks are fully round: the avatar, the rail dot and the theme toggle.
Borders are always 1px hairlines.
Screenshots are cropped to 16:10 from the top.

## Components

### Index Rail (signature)
A quiet table of contents that follows the reader.
- **Links:** 14px Pencil, with no underline and a 150ms colour transition. Hovered and current links turn Ink.
- **Active dot:** a 5px round accent dot to the left of each link. It is hidden at `scale(.4)` and fades and scales in over 200ms when a script sets `aria-current="location"` on the current section. The current section is the last one whose top has passed 25% of the viewport height, or the last section once the page is scrolled to the bottom.
- **Mobile:** the nav is hidden and only the avatar and toggle remain.

### Theme Toggle
- **Shape:** a 32px round button with no border, holding a 16px half-filled circle icon.
- **States:** Pencil when idle. On hover it gets the Shelf background and turns Ink. When dark is active, the filled half rotates 180° (320ms, expo-out).
- **Behaviour:** it follows the system preference by default. The toggle writes `localStorage.theme`, and an inline head script applies it before paint. The button stays hidden without JavaScript.

### Links
- **Inline:** Ink text with a 1px, 25%-ink underline at a 0.22em offset. The underline turns full colour on hover.
- **Outbound (project URLs, footer):** only the text span is underlined, followed by an 11px up-right arrow drawn as inline SVG with a 3px left margin.

### Project Entry
- **Preview:** a 192px-wide, 16:10 top-aligned thumbnail beside the project text, in a clipped frame with a 1px hairline border, 12px radius and Shelf background.
  On narrow phones it stacks above the text without expanding to full width.
  On hover the image scales to 1.015 (500ms, expo-out).
- **Caption:** optional, 13px Pencil, 8px below the image, holding an attribution link.
- **Heading row:** the project name in Title style (linked without an underline), with the role, status and licence in 13px Pencil. They sit at either end of one wrapping baseline row.
- **Body:** a 15.5px Graphite description, then the bare URL in the outbound link style.

### List Rows (Writing, Experience)
- **Structure:** a mono date column and a text column, divided by 1px hairlines between rows (none above the first row).
- **Writing hover and focus:** the whole row is a link. It bleeds 12px into the margin on each side and gets the Shelf fill with a 6px radius (160ms). The date darkens to Graphite and the title gets a Pencil underline.
- **Experience:** the title is in Ink with the organisation in Pencil after a middle dot, and a 14px Pencil summary below.

### Bio Panel
- **Container:** a single-column Shelf panel with a 12px radius and 24px padding, containing three copy buttons above the bio text, followed by the short and long toggle. No portrait or download link.
- **Copy buttons:** transparent, with a 1px hairline border, 6px radius, 28px minimum height, 13px Graphite text and a 12px copy icon. On hover the border darkens to Pencil and the text turns Ink. On success the label reads "Copied" with a check icon for 1.8s. They appear only when the Clipboard API exists.
- **Short and long toggle:** a 13px Pencil text button. Without JavaScript, the long bio falls back to a native `details` element.

### Social card
Text-only `public/og.png`, rendered in Chromium at 1200×630 (1×) with self-hosted Geist. Paper background, Ink name (80px Medium, 1.08 line-height, -0.03em tracking); Pencil role lines (30px) and Geist Mono domain (22px). Left inset is 80px. No photo, logo, icons or gradient.

### Site icon
Text-only `NN` monogram in outlined Geist Medium, centred on Paper with Ink lettering and a 6px corner radius. The SVG follows `prefers-color-scheme`; the 180×180 Apple touch icon and 32×32 ICO fallback use the light palette. No photo.

### Entrance Motion
Blocks marked to rise animate from 6px below with 3px blur to rest over 700ms on `cubic-bezier(.16,1,.3,1)`, staggered 70ms per step. This runs only under `prefers-reduced-motion: no-preference`. Under `reduce`, every animation and transition is removed.

## Do's and Don'ts

### Do:
- **Do** keep all text in the Ink, Graphite and Pencil steps, and create emphasis with weight 500 or size.
- **Do** reserve the accent for the focus ring (2px solid, 3px offset) and the active rail dot.
- **Do** separate sections with 96px of space and list rows with 1px hairlines.
- **Do** frame thumbnails at 16:10, top-aligned, with a hairline border and a 12px radius, and dim them to 0.88 brightness in dark mode.
- **Do** set dates and year ranges in Geist Mono at 12.5px with tabular figures.
- **Do** define every new colour in both the light and the dark palette.
- **Do** keep interactive targets at least 24px tall.

### Don't:
- **Don't** add box shadows or gradients.
- **Don't** colour links, buttons or surfaces with the accent.
- **Don't** set any text other than the name above 18px.
- **Don't** use Geist Mono for labels, metadata or body text.
- **Don't** add a fourth text grey or a heavier font weight than 500.
- **Don't** put project entries or list rows in bordered or tinted cards at rest. The Shelf panel is kept for the bio block; rows get the tint only on hover or focus.

## Raster provenance

All generated responsive WebP derivatives inherit their source's attribution. Project screenshot sources live under `src/assets/projects/`, so Astro emits only the optimized derivatives used by the page.

| Asset | Source and handling | Attribution |
| --- | --- | --- |
| `public/profile.png` | Existing user-supplied portrait. Used for the avatar and social image. Astro creates resized WebP derivatives. The photographer and creation date are not recorded. | Portrait supplied by Najib Ninaba; no additional rights claim made. |
| `public/apple-touch-icon.png`, `public/favicon.ico` | Rendered from the outlined Geist Medium `NN` monogram in `public/favicon.svg` on 2026-09-29. Provenance is recorded in adjacent JSON sidecars because `impeccable embed-prompt` was unavailable. | Site-owned monogram; no photo or third-party artwork. |
| `src/assets/projects/playground-inference.webp` | From `kapitan-ai/orchard`, `docs/media/playground-inference.png`, imported on 2026-09-29. Prior production: ImageMagick `-resize '1600x>' -quality 82`. Astro creates top-aligned 16:10 WebP thumbnail derivatives. | © 2026 AI Singapore, Orchard repository material under its Apache-2.0 documentation terms. |
| `src/assets/projects/now-1440.png` | Capture of https://cuaca.bijan.app/ on 2026-09-29, Now view, 1440×900 CSS px at 2× DPR. Astro creates top-aligned WebP derivatives. | Cuaca, created by Najib Ninaba. Visible linked caption: "Captured 29 Sep 2026 from cuaca.bijan.app". |
| `src/assets/projects/repoprompt-agent-new-session.webp` | Downloaded from https://repoprompt.com/images/agent-new-session.webp on 2026-09-29 (source 2584×1794). Astro creates top-aligned 16:10 WebP thumbnail derivatives. | © Repo Prompt, used with attribution. Visible linked caption: "Screenshot © Repo Prompt, repoprompt.com". |

The Orchard source provenance comes from the prior content-build thread ([T-01a0ec44](https://ampcode.com/threads/T-01a0ec44-ab92-75bd-8c23-51fc3823baba)). Its source checkout commit was not recorded.
