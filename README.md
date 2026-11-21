# PENCIL Studio - Creative Digital Studio

Bilingual (English / Arabic, full RTL) marketing site and service pages for
**PENCIL Studio** - brand identity, websites, mobile apps, business systems,
marketing and cloud. Built with love in Cairo. "Art From Scratch."

Live: https://dipencil.com

## Governance (read first)

This repository runs on constitution & evidence-driven development:

- [AGENTS.md](AGENTS.md) — binding contract for every AI agent, engineer, and tool
- [docs/constitution.md](docs/constitution.md) — engineering laws (layers, security, data, quality)
- [docs/project-guide.md](docs/project-guide.md) — how to run, build, and deploy
- [docs/workflow.md](docs/workflow.md) — 6-phase task lifecycle, evidence, risk register
- [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) · [docs/ERD.md](docs/ERD.md) ·
  [docs/architecture/modules.md](docs/architecture/modules.md) ·
  [docs/tooling/skills.md](docs/tooling/skills.md)

Governance gate (must be green before any delivery):

```bash
python docs/scripts/verify-project.py
```

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4** + Radix UI primitives (shadcn-style)
- **Framer Motion** + GSAP for motion
- `react-hook-form` + `zod`, `recharts`, `embla-carousel`
- **pnpm** as package manager

## Getting started

```bash
pnpm install
pnpm dev      # Turbopack, http://localhost:3003
pnpm preview  # Build + production preview, http://localhost:3003
pnpm build
pnpm start
```

Development compiles routes on first visit. Use `pnpm preview` to check production
navigation speed without on-demand compilation. Stop the development server before
starting preview; both use port 3003. `pnpm dev:webpack` is available if a development
tool requires Webpack.

## Project structure

```
app/                        # Routes (~33 pages): services, work, marketplace,
  layout.tsx                #   pricing, solutions, help, support, superfeliz...
  services/[slug]/page.tsx  # Service detail pages (SSG)
components/                 # One folder per UI domain (home, services, work...)
  shared/                   # Cross-domain: typography, motion, sections, media
  ui/                       # Radix/shadcn primitives (design-system controls)
  language-context.tsx      # EN/AR translations + RTL handling
  layout/                   # Site chrome (header, footer)
lib/                        # Typed bilingual content per domain (the data layer)
hooks/                      # use-mobile, use-toast
public/                     # Images, video, Lottie assets
docs/                       # Governance (constitution, workflow, ERD...)
.agents/skills/             # Vendored agent skills (pinned, see docs/tooling/)
```

## Notes

- Language state lives in `LanguageProvider` (localStorage + `?lang=`),
  mirrored layouts via `dir="ltr|rtl"` and logical Tailwind properties.
- Service pages are statically generated (`generateStaticParams`).
- Prices are USD-based; the converter fetches live bank rates with a
  static fallback when offline.
