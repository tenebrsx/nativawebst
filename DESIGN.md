# Nativa Web Studio Design System

Extracted from live CSS in `src/app/globals.css` and homepage components. Codifies what exists. New work must use these tokens; extend this file before introducing a new value.

## 1. Atmosphere & Identity

Caribbean studio selling live websites that put clients in WhatsApp. Quiet Atlantic ink, not a beach postcard: cool paper, true black structure, one signal blue for “live.” The **horizon** stays — a single blue wave, not sun-yellow CTAs or sand fills. Mini-dioramas (WhatsApp, phone, Maps) are product proof, not decoration.

## 2. Color

### Palette

| Role | Token | Light | Dark | Usage |
|------|-------|-------|------|-------|
| Canvas | `--sand` | `#F7F8FA` | — | Page background (cool paper) |
| Surface | `--white` / `--surface` | `#FFFFFF` | — | Cards |
| Foam | `--gray-foam` | `#EEF1F5` | — | Strips, nested wells |
| Border | `--border` / `--border-sand` | `#E3E6EC` | — | Hairlines |
| Structure | `--navy-trench` | `#0B0D12` | — | Text, dark sections |
| Structure mid | `--navy-mid` | `#1A1D26` | — | Secondary ink |
| Muted text | `--gray-muted` | `#5C6470` | — | Body, captions |
| CTA | `--sun-yellow` | `#1E4FD7` | — | Primary launch buttons only |
| CTA press | `--sun-dark` | `#163DB0` | — | CTA hover/active |
| Accent | `--coral-blue` | `#1E4FD7` | — | Labels, live dots, pins, focus |
| Accent wash | `--coral-light` | `#E8EEFB` | — | Soft highlight |

### Scene tokens (product dioramas only)

| Role | Value | Usage |
|------|-------|-------|
| WA shell | `#111b21` | WhatsApp body |
| WA header | `#202c33` | Chat header |
| WA text | `#e9edef` | Incoming/outgoing copy |
| WA meta | `#8696a0` | Timestamps, subtitles |
| WA bubble out | `#005c4b` | Client chips / outbound |
| Maps land | `#dcefe4` → `#c5e0d3` | Map field |
| Lead ping | `#25d366` | WhatsApp-green status |
| Shop gold | `#F5C400` | Ecommerce preview CTAs and dock only |

### Rules
- 70% paper, 20% ink, 10% signal blue.
- `--sun-yellow` is CTA-only. Never as a fill wash. It is blue now.
- `--coral-blue` marks “live / next / here.”
- Do not add purple, orange, or extra accent hues.

## 3. Typography

### Scale

| Level | Size | Weight | Tracking | Usage |
|-------|------|--------|----------|-------|
| Display | `clamp` ~1.85–3.2rem | 600–700 | -0.035em | Hero H1 |
| Section | `clamp(1.65rem, 3vw, 2.2rem)` | 600 | -0.03em | Section H2 |
| Body | 16px | 400–500 | 0 | Default |
| Lede | 16–17px | 400 | 0 | Section sub |
| Caption | 12–13px | 500–600 | 0.02–0.06em | Labels, kickers |
| Overline | 11px | 600 | 0.12em | `.section-label` |

### Font Stack
- Head: `'Instrument Sans', system-ui, sans-serif` (`--font-head`)
- Body: `'Instrument Sans', system-ui, sans-serif` (`--font-body`)

### Rules
- One family.
- Section labels: uppercase, signal blue, tracking 0.12em, weight 600.
- No Inter on the site. No emoji as icons.
- Display weight caps at 700. Do not use 800–900 on marketing type.

## 4. Spacing & Layout

### Base Unit
4px. Common steps already in use: 8, 12, 14, 16, 22, 24, 28, 36, 40, 48, 56, 90.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | 8px | Chip gap, tab gap |
| `--space-3` | 12px | Compact padding |
| `--space-4` | 16px | Default inner |
| `--space-6` | 24px | Container gutter, scene pad |
| `--space-8` | 32px | CTA cluster |
| `--space-12` | 48px | Block gaps |
| Section Y | 90px / 100px | Homepage sections |
| `--radius-sm` | 6px | Buttons |
| `--radius` | 12px | Tabs, cards |
| `--radius-lg` | 20px | Stage, large wells |

### Grid
- Max content: 1140px (`.container`)
- Breakpoints in use: 700px (journey rail), 900px (hero stack)

## 5. Components

### LaunchJourney (`#how-it-works`)
- **Structure**: label + H2 + sub → 3-tab rail → one stage with three overlapping scenes → caption → sun CTA
- **Beats**: 01 brief (WhatsApp) → 02 preview (phone) → 03 live (Maps + lead)
- **States**: tab idle / selected / auto-progress; scene off / on; CTA hover
- **Motion**: see §6
- **A11y**: `role="tablist"` / `tab`; reduced-motion kills autoplay and transforms

### Button `.btn-launch`
- Sun yellow, navy text, radius-sm, press darkens to `--sun-dark`

## 6. Motion & Interaction

Library: **CSS only**. Do not add Motion/GSAP. Existing easing: `cubic-bezier(0.16, 1, 0.3, 1)`.

| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Micro | 200ms | same cubic | Button, tab color |
| Standard | 380ms | same cubic | Panel crossfade (`opacity` + `scale`) |
| Stagger pop | 550ms, delays 80/220/380ms | same cubic | Scene children enter |
| Beat cycle | 5200ms linear | progress bar on auto tab | Autoplay |
| Pin drop | 700ms, delay 280ms | same cubic | Maps pin |

### Catalog mapping (beui.dev)
- **tabs**: sliding/selected indicator. Adapt as CSS `transform` on a rail highlight (`left` via `translateX` on `data-beat`), not layout width animation. Reduced motion: instant state, no slide.
- **text-animation / number**: scene copy enters with opacity + `translateY`, not letter-split.
- **animated-badge**: lead ping is a scale/opacity pulse that *means* a new WhatsApp lead.

### Rules
- Animate only `transform`, `opacity`, `filter`.
- Autoplay pauses when the visitor pins a tab.
- `prefers-reduced-motion: reduce` → no autoplay, no keyframes, panels visible by selected state only.
- Motion explains the beat (chat arrives, site builds, pin drops + lead). No orbiting orbs in this section.

## 7. Depth & Surface

**Mixed**: paper pages use hairline + quiet ink shadow; ink sections use 1px white@8% hairline and inner `#11141C` wells.

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(11, 13, 18, 0.04)` | Quiet cards |
| `--shadow` | `0 8px 24px rgba(11, 13, 18, 0.06)` | Default |
| `--shadow-lg` | `0 16px 40px rgba(11, 13, 18, 0.08)` | Hero phone |

Journey stage: `#0c1524` well, `1px solid rgba(255,255,255,0.08)`, radius-lg. Phone chrome: 2px white@10% rim.

## 8. Accessibility Constraints & Accepted Debt

### Constraints
- WCAG 2.2 AA target.
- Visible focus on tabs and CTA.
- Keyboard: tabs are real buttons.
- Reduced motion as §6.

### Accepted Debt
| Item | Location | Why accepted | Owner / Exit |
|------|----------|--------------|--------------|
| No `DESIGN.md` historically | repo | Extracted 2026-08-25 from live CSS | Keep this file current |
| react-grab / react-scan / react-doctor not wired | Next app | Not installing extra CLIs mid-section work | Opt-in later |
| Journey scene hexes (WA / Maps) | `launch-journey.css` | Product-simulation chrome, not brand fills | Keep scoped to `.lj-*` |
| No unit test runner | package.json | Visual section; lock via visual QA | Add vitest if logic grows |
