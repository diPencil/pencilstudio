# Design System — PENCIL Studio

> Upstream: [AGENTS.md §6](../AGENTS.md) · [Constitution Law 6](constitution.md) ·
> Source of truth for tokens: [`app/globals.css`](../app/globals.css) —
> this document mirrors it; when they disagree, **the CSS wins and this file must be
> updated**.

---

## 1. Brand & Fonts

| Token | Value | Usage |
| --- | --- | --- |
| `--font-inter` | Inter (`next/font`, latin) | Default sans (`--font-sans`) for LTR |
| `--font-arabic` | Alexandria (`next/font`, arabic+latin) | Forced font under `dir="rtl"` (globals.css applies it to all RTL content with `letter-spacing: normal`) |

Font rendering baseline: `kern/liga/calt` enabled, antialiasing, optimized
legibility, smooth scroll (globals.css `@layer base`).

## 2. Color Tokens

### 2.1 Semantic palette (shadcn mapping, OKLCH)

Light (`:root`) and dark (`.dark`) themes define the full semantic set. Key values:

| Token | Light | Dark |
| --- | --- | --- |
| `--background` | `oklch(1 0 0)` white | `oklch(0.145 0 0)` near-black |
| `--foreground` | `oklch(0.145 0 0)` | `oklch(0.985 0 0)` |
| `--primary` | `oklch(0.205 0 0)` | `oklch(0.985 0 0)` |
| `--muted` / `--muted-foreground` | `0.97` / `0.556` gray | `0.269` / `0.708` gray |
| `--border` / `--input` | `oklch(0.922 0 0)` | `oklch(0.269 0 0)` |
| `--ring` | `oklch(0.708 0 0)` | `oklch(0.439 0 0)` |
| `--destructive` | `oklch(0.577 0.245 27.325)` red | `oklch(0.396 0.141 25.723)` |
| `--chart-1..5` | warm chart set | cool chart set |

Full set (including `--card`, `--popover`, `--accent`, and the `--sidebar-*`
family) lives in `app/globals.css` `:root` and `.dark` blocks.

### 2.2 Brand color system (`@theme inline`)

| Token | Value |
| --- | --- |
| `--pencil-accent` | `#2563EB` (royal blue — used for SuperFeliz & key accents) |
| `--pencil-accent-soft` | `rgba(37, 99, 235, 0.12)` |
| `--color-neutral-50` | `#fafafa` |
| `--color-neutral-400` | `#a3a3a3` |
| `--color-neutral-800` | `#1a1a1a` |
| `--color-neutral-900` | `#0b0b0b` |
| `--color-white` | `#ffffff` |

**Rule:** new colors enter as tokens in `globals.css` first, then get used.
No ad-hoc hex values in components (Constitution Law 6.2).

## 3. Spacing Scale

| Token | px | Token | px |
| --- | --- | --- | --- |
| `--space-1` | 8 | `--space-6` | 48 |
| `--space-2` | 16 | `--space-8` | 64 |
| `--space-3` | 24 | `--space-10` | 80 |
| `--space-4` | 32 | `--space-12` | 96 |
| `--space-5` | 40 | `--space-15` | 120 |

## 4. Typography Scale

`--text-xs` 0.75rem → `--text-9xl` 8rem (`xs, sm, base, lg, xl, 2xl, 3xl, 4xl,
5xl, 6xl, 7xl, 8xl, 9xl` = 12px → 128px). Section headings come from
`components/shared/typography/section-heading.tsx`; animated text from
`animated-text.tsx` / `scroll-fill-text.tsx` — reuse these instead of hand-rolling
heading styles.

## 5. Radii & Elevation

| Token | Value |
| --- | --- |
| `--radius` | `0.625rem` (10px) base |
| `--radius-sm/md/lg/xl` | `base −4px / −2px / base / +4px` |

Shadows follow the shadcn component conventions in `components/ui/*`.

## 6. Form Controls Contract

1. **Forbidden:** native `<select>` dropdowns, default browser date/time pickers,
   unstyled raw `<input>` / `<textarea>` / `<button>` (AGENTS.md §6).
2. **Required sources:** `components/ui/*` (Radix-based: select, checkbox,
   radio-group, slider, switch, calendar, combobox via cmdk, input-otp…) and
   project-composed controls in `components/shared/ui/*`
   (`pencil-ui.tsx`, `studio-care-ui.tsx`, `currency-converter.tsx`…).
3. Every field must render its **label, helper/error, focus ring (`--ring`),
   disabled, and RTL-mirrored** states — Radix primitives already carry most of
   this; do not strip it with resets.
4. Forms validate with react-hook-form + zod; error messages are bilingual
   (EN/AR) through the translation system.

## 7. Motion Language

- Micro-interactions & page transitions: Framer Motion wrappers
  (`components/shared/motion/reveal.tsx`, `page-motion-backgrounds.tsx`,
  `tilted-grid-hero.tsx`).
- Scroll-driven and timeline animation: GSAP.
- Lottie animations load lazily via
  `components/shared/media/lazy-dot-lottie.tsx` (never block first paint).
- Respect reduced motion: check `prefers-reduced-motion` for anything
  autop­laying/parallax.

## 8. Accessibility (WCAG 2.2 AA)

- Visible focus states on all interactive elements (`outline-ring/50` baseline in
  globals.css; keep it).
- Full keyboard operability — Radix primitives provide the behavior; do not
  replace them with non-compliant custom controls.
- Text contrast ≥ 4.5:1 (AA) using the semantic tokens; test both light and dark.
- Meaningful `alt` text (bilingual via translation system); decorative media
  marked appropriately.
- Every page must be fully usable in **both** `dir="ltr"` and `dir="rtl"`
  (Constitution Law 5) — logical properties only.

## 9. Responsive Breakpoints

Tailwind v4 default breakpoints (`sm 640 / md 768 / lg 1024 / xl 1280 /
2xl 1536`). Mobile-first authoring; verify from 360px up to 1920px. Use
`hooks/use-mobile.ts` for JS behavior switches, not for hiding content that
carries meaning.
