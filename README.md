# PENCIL Studio — Creative Digital Studio

Bilingual (English / Arabic, full RTL) marketing site and service pages for
**PENCIL Studio** — brand identity, websites, mobile apps, business systems,
marketing and cloud. Built with love in Cairo. "Art From Scratch."

Live: https://dipencil.com

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4** + Radix UI primitives (shadcn-style)
- **Framer Motion** + GSAP for motion
- `react-hook-form` + `zod`, `recharts`, `embla-carousel`
- **pnpm** as package manager

## Getting started

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
pnpm start
```

## Project structure

```
app/
  page.tsx                 # Homepage (all sections)
  layout.tsx               # Fonts (Inter + Alexandria), SEO metadata
  services/
    page.tsx               # Services index
    [slug]/page.tsx        # Service detail pages (SSG)
components/
  header.tsx / footer.tsx
  hero-section.tsx
  featured-products.tsx    # Signature capabilities (links to service pages)
  service-detail.tsx       # Service page sections
  currency-converter.tsx   # Live bank-rate price converter
  collection-strip.tsx     # Business sectors
  superfeliz-cinematic-section.tsx  # SuperFeliz AI agent story
  language-context.tsx     # EN/AR translations + RTL handling
  ui/                      # Reusable primitives
lib/
  services.ts              # Service content (bilingual, human-written)
  utils.ts
public/
  hero-section.jpg, logoblack/whitelogos, business-sectors/, brands/, ...
```

## Notes

- Language state lives in `LanguageProvider` (localStorage + `?lang=`),
  mirrored layouts via `dir="ltr|rtl"` and logical Tailwind properties.
- Service pages are statically generated (`generateStaticParams`).
- Prices are USD-based; the converter fetches live bank rates with a
  static fallback when offline.
