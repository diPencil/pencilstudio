# Project Overview: PENCIL Studio (Creative Digital Studio)

This document provides a comprehensive overview of the **PENCIL Studio** web application.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 15.2.6](https://nextjs.org/) (using the App Router).
- **Language**: [TypeScript](https://www.typescript.org/).
- **Styling**: [Tailwind CSS v4.0.0](https://tailwindcss.com/) with PostCSS (`postcss.config.mjs`, `@tailwindcss/postcss`).
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for premium micro-animations, transitions, and parallax scrolling.
- **UI Components**: Built on top of [Radix UI](https://www.radix-ui.com/) primitives styled using Tailwind and structured with `class-variance-authority` (shadcn-like pattern).
- **Bilingual & RTL Foundation**: Clean localization helper (`LanguageProvider`) manages active locale state (English and Arabic) and dynamically applies layout mirroring using HTML `dir` tags and logical Tailwind properties (`start-*`, `ps-*`, `pe-*`), ensuring high-fidelity layouts across both languages.
- **State & Interactions**: Form validation via `react-hook-form` + `zod`, custom toasts, charts via `recharts`, and carousel sliders with `embla-carousel-react`.

---

## 📂 Project Directory Structure

```
pencilnew/
├── app/                  # Next.js App Router root
│   ├── globals.css       # Core Tailwind CSS rules and overrides
│   ├── layout.tsx        # Base root layout wrapper with ThemeProvider & Toasters
│   └── page.tsx          # Main entrypoint landing page
│
├── components/           # UI Components
│   ├── ui/               # Lower-level Radix & custom primitive UI blocks (Button, Dialog, Accordion, etc.)
│   ├── animated-text.tsx # Custom micro-animation components for smooth text rendering
│   ├── blur-panel.tsx    # Glassmorphism/blur visual panels
│   ├── collection-strip.tsx # Visual strips highlighting sector capabilities
│   ├── featured-products.tsx# Grid showcasing signature capabilities (Brand design, Web, Mobile, Growth, Hosting)
│   ├── footer.tsx        # Detailed web app footer with newsletter/social links
│   ├── header.tsx        # Navigation header with responsiveness and language switcher
│   ├── hero-section.tsx  # Dynamic introductory banner with interactive animations and branding slogan
│   ├── materials-section.tsx# Detailed highlights of our craft pillars (Design & UI/UX, Operations & Automation, Infrastructure & Devops)
│   ├── newsletter-section.tsx# Inquiry CTA segment for projects
│   ├── parallax-image.tsx# Smooth scroll parallax container
│   ├── product-card.tsx  # Individual capability visualization with view scope action
│   ├── quick-look-modal.tsx# Overlay displaying service scope details and deliverables
│   ├── reveal.tsx        # Animation wrapper for scroll reveals
│   └── theme-provider.tsx# Context provider for dark/light themes
│
├── hooks/                # Custom React Hooks
│   ├── use-mobile.ts     # Mobile view detection hook
│   └── use-toast.ts      # UI helper to trigger reactive notifications
│
├── lib/                  # Shared Utility Libraries
│   └── utils.ts          # Classname merger utilizing clsx and tailwind-merge
│
├── public/               # Asset Directory (Premium Images & Icons)
│   ├── icon.svg          # Application vector logo
│   └── *.png             # High-quality visual assets
│
└── configuration files   # next.config.mjs, tsconfig.json, components.json, tailwindcss config
```

---

## 🎨 Content & Core Features

The UI highlights PENCIL Studio's business operations:
- **Brand Slogan**: "Art From Scratch" / "الفن من الصفر"
- **Signature Services**: Showcase of core digital systems (creative brand identity design, Next.js web applications, React Native mobile apps, business systems, SEO optimization, and technical cloud monitoring).
- **Core Pillars**: Focus on Strategic Design, System Logic, and Scale & Deploy.

---

## ⚙️ Development Commands

This project uses **pnpm** as its primary package manager. 

- **Install Dependencies**:
  ```bash
  pnpm install
  ```

- **Run Locally (Development Server)**:
  ```bash
  pnpm dev
  ```
  *(Server runs at [http://localhost:3000](http://localhost:3000))*

- **Build Production Bundle**:
  ```bash
  pnpm build
  ```

- **Start Production Server**:
  ```bash
  pnpm start
  ```

