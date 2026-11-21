# Project Guide — PENCIL Studio

> Upstream: [AGENTS.md](../AGENTS.md) · [Constitution](constitution.md) ·
> Related: [Module Map](architecture/modules.md) · [Design System](DESIGN_SYSTEM.md) ·
> [Workflow](workflow.md)

---

## 1. What This Project Is

**PENCIL Studio** is the bilingual (English / Arabic, full RTL) marketing and service
website of a creative digital studio, live at **<https://dipencil.com>**. Slogan:
"Art From Scratch". The site presents the studio's brand identity, web, mobile,
business systems, marketing, and cloud offerings, with editorial service pages, a
portfolio, a marketplace, pricing, support, and help-center sections.

All content is code-resident (typed TypeScript modules under `lib/**`) — there is
**no database and no backend API today** (see [ERD](ERD.md) for the content data
model). Pages are statically generated where possible (`generateStaticParams` on
dynamic routes).

## 2. Tech Stack

| Concern | Technology |
| --- | --- |
| Framework | Next.js 15 (App Router, Turbopack dev) · React 19 |
| Language | TypeScript (strict expected — see [Constitution Law 2](constitution.md#law-2--type-safety--diagnostics)) |
| Styling | Tailwind CSS v4 (`@theme inline` tokens in `app/globals.css`) |
| UI primitives | Radix UI, shadcn pattern (`components/ui/*`), project-composed controls (`components/shared/ui/*`) |
| Motion | Framer Motion, GSAP, `@lottiefiles/dotlottie-react` |
| Forms & validation | react-hook-form + zod |
| Charts / carousels | recharts · embla-carousel-react |
| Fonts | Inter (Latin) + Alexandria (Arabic) via `next/font` |
| Package manager | **pnpm** (10.x) |
| Analytics | `@vercel/analytics` |

## 3. Running Locally

```bash
pnpm install     # install dependencies

pnpm dev         # dev server (Turbopack) → http://127.0.0.1:3003
pnpm dev:webpack # same, forced Webpack (if a dev tool needs it)

pnpm build       # production build
pnpm start       # serve the production build
pnpm preview     # build + start on :3003 (production-fidelity navigation)

pnpm lint        # eslint
pnpm verify      # full next build into an isolated .next-verify dist
```

Notes (verified behavior):

- Dev runs on **port 3003** bound to `127.0.0.1` — not the Next.js default 3000.
- Development compiles routes on first visit; use `pnpm preview` to judge production
  navigation speed. Stop the dev server before starting preview (same port).
- `pnpm verify` sets `NEXT_DIST_DIR=.next-verify` so verification builds do not
  clobber the working `.next/`.

## 4. Deployment

- Production domain: `https://dipencil.com` (metadata base URL in `app/layout.tsx`).
- `@vercel/analytics` is integrated, indicating Vercel hosting. Standard flow:
  merge to `main` → deploy.
- Branch model: `main` (protected target) · `design-unify` (active design-unification
  work) · `backup/pre-components-refactor`, `backup/pre-lib-refactor` (safety
  snapshots before the 2026-11 structural refactors).
- `app/sitemap.ts` and `app/robots.ts` manage crawler directives.

## 5. Repository Layout (top level)

```
app/            # Next.js App Router routes (~33 pages, see Module Map)
components/     # Domain components + shared/ + ui/ primitives
lib/            # Typed bilingual content and domain data (the "data layer")
hooks/          # use-mobile, use-toast
public/         # Static assets (images, video, lottie)
docs/           # Governance: this guide, constitution, design system, ERD, workflow
.agents/skills/ # Vendored agent skills (see docs/tooling/skills.md)
```

## 6. Bilingual / RTL System

- `components/language-context.tsx` provides `LanguageProvider`: locale state in
  `localStorage` + `?lang=` URL parameter.
- It flips the document `dir` attribute (`ltr` / `rtl`); `app/globals.css` switches
  the font stack to Alexandria under `dir="rtl"`.
- Components use logical Tailwind properties (`ps-*`, `pe-*`, `start-*`, `end-*`)
  so layouts mirror correctly. This is a hard contract —
  [Constitution Law 5](constitution.md#law-5--bilingual--rtl-contract).

## 7. Governance Quick Links

| Document | Purpose |
| --- | --- |
| [AGENTS.md](../AGENTS.md) | Binding contract for all agents and engineers |
| [Constitution](constitution.md) | Layer, security, data, and quality laws |
| [Module Map](architecture/modules.md) | Ownership and import boundaries per module |
| [Design System](DESIGN_SYSTEM.md) | Tokens and UI contracts (source: `app/globals.css`) |
| [ERD](ERD.md) | Content data model (no DB today) |
| [Workflow](workflow.md) | 6-phase task lifecycle, evidence, risk register |
| [Skills](tooling/skills.md) | Vendored agent capabilities, pinned versions |
