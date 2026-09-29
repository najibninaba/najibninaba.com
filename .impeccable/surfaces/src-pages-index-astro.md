---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Homepage (najibninaba.com /)

Scope: the single homepage. Mode: Experience (a personal site where the work leads). Build path: code-led (no image generation). Iterated in MagicPath first, then built in Astro.

Audience and job: engineering peers judge his point of view in about 60 seconds; organisers copy his title, bio and headshot; collaborators check his track record. Proof comes from Orchard, Cuaca and RepoPrompt CE (contributor), plus writing from posts.ts. Constraints are in PRODUCT.md (canonical bio, no unverified figures, no private links).

## Direction contract

THESIS: The minimal engineer's homepage, played straight at the craft level of paco.me, rauno.me, leerob.com and mitchellh.com. One column of plain facts, with hierarchy carried by typography alone. It refuses the portfolio pattern of a hero banner with a card grid, and any themed metaphor.

OWN-WORLD: Restrained colour. Near-white paper and near-black ink with a 4-step grey ramp. One accent, used only for links and focus, never for fills. There is a true dark theme, not an inverted one. Geist for text and Geist Mono for dates, codes and metadata, with tabular figures. 1px hairline rows, a measure of about 640px, left-aligned, and no cards, shadows or gradients.

STORY: The visitor learns who he is (name, NTU and AI Singapore titles), believes the thesis because the three projects show his role and specifics, then reads a post, copies the bio or follows a link.

FIRST VIEWPORT: Two columns in a centred 1040px frame. On the left, a 168px sticky rail: 36px round headshot, section nav (About, Projects, Writing, Experience, Bio & headshot) with an accent dot on the active section, and the theme toggle. On the right, a column of at most 680px: the name (15px, medium weight) with both full titles muted below, then the thesis as the only large type (clamped 34–48px, medium weight, -0.03em, balanced), then a two-paragraph first-person intro. On mobile the rail collapses to a top bar with the headshot and theme toggle.

FORM: Category standard (the canon exit, chosen by the user over the rolled "Career System Map"). Seed key 5aef4120. Variant C, "Index rail", was chosen in MagicPath from three options (A Prose, B Ledger, C Index rail). Signature interaction: the rail's active-section dot follows the scroll; project screenshots are always visible and scale 1.5% on hover. The "Bio & headshot" block has Copy title, Copy short bio and Copy long bio buttons with a Copied state, plus a short/long toggle and a headshot download. Motion: one staggered rise with blur on load (700ms expo-out, 70ms stagger), disabled under reduced motion. Mono type is used only for dates.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
