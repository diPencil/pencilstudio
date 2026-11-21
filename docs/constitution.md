# Engineering Constitution — PENCIL Studio

> Binding law for all engineering work in this repository.
> Upstream: [AGENTS.md](../AGENTS.md) · Downstream: [Module Map](architecture/modules.md) ·
> [Design System](DESIGN_SYSTEM.md) · [ERD](ERD.md) · [Workflow](workflow.md)

---

## Law 0 — Protection of Existing Value

This is a **brownfield production project** (live at <https://dipencil.com>).

1. Working production code must not be deleted, overwritten, or rewritten without
   explicit owner approval.
2. Refactors happen only through the [Workflow](workflow.md) lifecycle with a written
   plan and owner sign-off.
3. Owner work-in-progress (uncommitted changes) is untouchable: no staging, committing,
   stashing, or discarding unless instructed.

## Law 1 — Layer Responsibilities

| Layer | Path | Owns | Must NOT |
| --- | --- | --- | --- |
| Route shell | `app/**/page.tsx`, `layout.tsx` | Routing, metadata/SEO, static params, composing sections | Contain business logic or heavy markup; delegate to components |
| Feature components | `components/<domain>/*` | Domain-specific UI sections and pages | Import other domains' internals — only their public exports (see [Module Map](architecture/modules.md)) |
| Shared primitives | `components/ui/*`, `components/shared/**` | Reusable, domain-agnostic UI, motion, typography | Know about any specific route or domain |
| Content & data | `lib/**` | Typed bilingual content, data helpers, domain constants | Import React components or hold render logic |
| Hooks | `hooks/*` | Cross-cutting React behavior (mobile, toasts) | Duplicate state that a provider already owns |
| Static assets | `public/**` | Images, videos, Lottie files | Contain code or secrets |

**Dependency direction (one-way):** `app` → `components/<domain>` →
`components/{shared,ui}` → `lib` → (nothing project-internal). Violations of this
direction are defects.

## Law 2 — Type Safety & Diagnostics

1. TypeScript in strict mode; `noUncheckedIndexedAccess`-level care around dynamic
   lookups (e.g. slug maps must handle `undefined`).
2. No lazy `any`. No `@ts-ignore`. `@ts-expect-error` only with a justification
   comment naming the upstream issue.
3. No `eslint-disable` without a scoped rule list and reason on the same line.
4. Content arrays in `lib/**` are typed by their interfaces (e.g. `Service[]`,
   `WorkCategory[]`); adding content means satisfying the type, not loosening it.

## Law 3 — Security & Trust Boundaries

1. **Server-side authority.** Any future authentication, authorization, ownership
   checks, or input validation that guards data **must** execute on the server
   (Route Handlers / Server Actions). The browser is never trusted.
2. **Input validation** with a schema library (`zod` is already a dependency) at
   every trust boundary.
3. **Parameterized everything.** When a database or external query layer is
   introduced, string-concatenated queries are forbidden; use parameterized
   queries/ORM bindings.
4. **Secrets never live in code.** No tokens, keys, or credentials in the repo,
   client bundles, or `public/`. Environment variables only, with `.env*` ignored
   by git.
5. Third-party scripts and iframes are loaded consciously (SRI / trusted domains),
   not pasted blindly.

*Current state note (evidence-based): the site today is a static/content-driven
marketing site with no database, no auth, and no persisted user input. Laws 3.1–3.3
activate automatically the moment any backend/API layer is added.*

## Law 4 — Data Integrity & Transactions

Applies to every current or future write path:

1. Multi-step writes are **atomic** (transactions) — no partial states.
2. Mutations are **idempotent** where retries are possible (safe re-submission).
3. **Backward compatibility:** schema/content-shape changes must not break existing
   consumers in the same release; deprecate, migrate, then remove.
4. Any change to data shapes (today: the `lib/**` content interfaces; tomorrow: DB
   schemas) **must** update [ERD.md](ERD.md) in the same task, before delivery.

## Law 5 — Bilingual & RTL Contract

1. All user-facing copy ships in **both English and Arabic** through the project's
   translation mechanism (`LanguageProvider`); no hardcoded single-language strings
   in components.
2. Layouts use **logical properties** (`ps-*`, `pe-*`, `start-*`, `end-*`,
   `ms-*`/`me-*`) — never physical `left/right` for anything that must mirror.
3. Both `dir="ltr"` and `dir="rtl"` renderings are part of the definition of done;
   verify both before delivering UI work.

## Law 6 — UI & Design System Conformity

1. Every interactive control comes from `components/ui/*` or
   `components/shared/ui/*` (see [AGENTS.md §6](../AGENTS.md)). No raw browser
   controls.
2. Colors, spacing, radii, typography come from the tokens defined in
   [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) (source of truth: `app/globals.css`).
   Ad-hoc hex values require a token addition instead.
3. Accessibility floor: WCAG 2.2 AA — visible focus states, keyboard operability,
   contrast, alt text. See the [Design System accessibility section](DESIGN_SYSTEM.md#8-accessibility-wcag-22-aa).

## Law 7 — Evidence & Truthfulness

1. Claims of success require captured evidence (build output, test output,
   screenshots) stored under `docs/tasks/<task-name>/evidence/`.
2. Fabricating results is a critical, non-negotiable failure
   ([AGENTS.md §4](../AGENTS.md)).
3. Obstacles are reported, never papered over.

## Law 8 — Dependency Discipline

1. `pnpm` only. Never commit other lockfiles.
2. New dependencies require justification in the task plan (what problem, what
   alternatives).
3. Versions are pinned by range; **`latest` is forbidden** for runtime dependencies
   (existing `latest` entries are tracked as risk R-005 in the
   [Risk Register](workflow.md#risk-register)).
4. Vendored agent skills are pinned by commit SHA in
   [skills.lock.json](tooling/skills.lock.json).

---

## Amendment Process

Changes to this constitution require an explicit owner decision, recorded as a new
section in [workflow.md's delivery records](workflow.md) with the rationale. Silent
edits are void.
