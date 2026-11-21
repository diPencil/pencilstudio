# Module Map — Ownership & Import Boundaries

> Upstream: [Constitution](../constitution.md) (Law 1) · [Project Guide](../project-guide.md) ·
> Siblings: [Design System](../DESIGN_SYSTEM.md) · [ERD](../ERD.md)

The route→component mappings below were **extracted from actual imports**
(`grep` over `app/**/page.tsx`), not assumed. Re-verify with the same method after
structural changes.

---

## 1. Verified Route → Component Map

| Route (`app/`) | Component domains imported |
| --- | --- |
| `/` (homepage) | `home`, `layout`, `sectors`, `superfeliz`, `work`, `language-context` |
| `/about` | `about` |
| `/ask` | *(self-contained — no component domain imports)* |
| `/askfeliz` | `superfeliz` |
| `/build-launch` | `method` |
| `/cloud-hosting` | `hosting` |
| `/company` | `company` |
| `/contact` | `contact` |
| `/design-experience` | `method` |
| `/enterprise` | `enterprise` |
| `/help`, `/help/{contact,faqs,guides}` | `help` |
| `/marketplace`, `/marketplace/[slug]` | `marketplace` |
| `/pricing` | `pricing` |
| `/sectors` | `sectors` |
| `/services` (index) | `editorial`, `layout`, `shared` |
| `/services/[slug]` (detail) | `services` |
| `/solutions` | `solutions` |
| `/strategy-direction` | `method` |
| `/superfeliz` | `superfeliz` |
| `/support`, `/support/{callback,customer,report,technical}` | `support` |
| `/work`, `/works`, `/work/[slug]`, `/work/[slug]/[project]` | `work` |

`components/language-context` (`LanguageProvider`) and `components/theme-provider`
are cross-cutting and used by nearly every route.

## 2. Module Ownership Table

| Module | Owns | Public interface (imports allowed by others) |
| --- | --- | --- |
| `app/**` | Routing, metadata, static params | — (nobody imports from routes) |
| `components/home` | Homepage sections (hero, features, ecosystem, newsletter…) | Homepage composition only |
| `components/about` `company` `contact` `enterprise` `help` `hosting` `marketplace` `method` `pricing` `sectors` `services` `solutions` `superfeliz` `support` `work` | One named UI domain each — pages/sections for their routes | Default exports of their page/section components |
| `components/editorial` | Shared editorial page scaffolding (e.g. page heroes) | `page-hero` and editorial layouts |
| `components/layout` | Site chrome: header, footer | Header/Footer exports |
| `components/shared` | Cross-domain building blocks: `typography/`, `motion/`, `sections/`, `media/`, `ui/` | Anything under `shared/**` is public to all domains |
| `components/ui` | Radix/shadcn primitives (button, dialog, accordion…) | Public to all domains |
| `components/language-context`, `components/theme-provider` | Locale + RTL state; theme state | Provider hooks (`useLanguage`-style exports) |
| `hooks/` | `use-mobile`, `use-toast` | Public to all components |
| `lib/<domain>` | Typed bilingual content + helpers per domain | See §3 |
| `public/**` | Static assets | Referenced by URL path only |

## 3. Content Layer (`lib/`) — Verified Exports

| Path | Exports (verified) | Consumed by |
| --- | --- | --- |
| `lib/services/services.ts` | `Service`, `ServiceFeature`, `ServiceStep`, `ServiceStat`, `ServiceFaq`, `ServiceSlug`, `serviceSlugById`, `services` | `components/services` (detail pages) |
| `lib/feliz/feliz.ts` (+ `feliz-demo.ts`) | `FelizTier`, `FelizModel`, `FelizJourneyStep`, `FelizFaq`, `felizModels`, `felizJourney`, `felizFaqs` | `components/superfeliz`, solutions |
| `lib/marketplace/marketplace-data.ts` | `MarketplaceMediaItem`, `MarketplaceProduct`, `MarketplaceCategory`, `MARKETPLACE_CATEGORIES`, `MARKETPLACE_PRODUCTS` | `components/marketplace` |
| `lib/portfolio/portfolio-content.ts` | `WorkSlug`, `WorkProject`, `WorkCategory`, `WORK_CATEGORIES`, `getWork` | `components/work` |
| `lib/method/method-content.ts` | Method page content | `components/method` |
| `lib/pricing/pricing-currency.ts` | Currency conversion helpers | pricing pages, `shared/ui/currency-converter` |
| `lib/studio-care/studio-care-content.ts` | Care/support content | support/studio-care UI |
| `lib/support/**`, `lib/help/**` | Support & help-center content modules | `components/support`, `components/help` |
| `lib/utils.ts` | `cn` class merger | everywhere |

Entity relations are documented in [ERD.md](../ERD.md).

## 4. Import Boundary Rules

1. **No deep cross-domain imports.** `components/marketplace` may import
   `components/shared/*` and `components/ui/*`, but **not**
   `components/enterprise/*` internals. Domain→Domain imports are forbidden;
   shared code moves down into `components/shared`.
   *(Exception: the homepage composes finished sections from `sectors`,
   `superfeliz`, `work` — these are their public page-level exports.)*
2. **`lib` never imports components.** Content is pure data + types.
3. **Domains never import from `app/`.**
4. Adding a new cross-domain need = extract to `components/shared/**` with owner
   approval (Workflow Phase 1).
5. When a module's public exports change, update this file in the same task
   ([Constitution Law 4.4](../constitution.md)).
