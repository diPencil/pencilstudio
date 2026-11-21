# AGENTS.md — AI Agent Contract for PENCIL Studio

> This file is the binding contract for every AI agent, human engineer, and automated
> tool working in this repository. It is the entry point of the governance chain.
> Reading it is **mandatory** before any task.

**Governance chain:**
[README](README.md) → **AGENTS.md (you are here)** → [Constitution](docs/constitution.md) →
[Project Guide](docs/project-guide.md) → [Module Map](docs/architecture/modules.md) →
[Design System](docs/DESIGN_SYSTEM.md) → [Data Model (ERD)](docs/ERD.md) →
[Workflow & Risk Register](docs/workflow.md) → [Agent Skills](docs/tooling/skills.md)

---

## 1. Project Identity

- **Project:** PENCIL Studio — bilingual (EN/AR, full RTL) marketing site for a creative
  digital studio. Live at <https://dipencil.com>. Slogan: "Art From Scratch".
- **Status:** Brownfield. Production code exists and ships. Treat all existing working
  code as protected (see Constitution, Law 0).
- **Stack:** Next.js 15 App Router · React 19 · TypeScript strict · Tailwind CSS v4 ·
  Radix UI (shadcn pattern) · Framer Motion / GSAP / Lottie · pnpm.
- Full details: [docs/project-guide.md](docs/project-guide.md).

## 2. Authority & Scope

- The **project owner** defines the scope of every task. The agent executes precisely
  within that scope.
- **No invented scope:** do not refactor, rename, delete, or "improve" code that the
  task did not ask for. Improvements are proposed, never applied unilaterally.
- **Never** delete, overwrite, or rewrite working production code without explicit
  owner approval (Constitution, Law 0).
- Uncommitted work-in-progress on the current branch belongs to the owner. Do not
  discard, commit, or push it unless instructed.

## 3. Language Policy

| Surface | Language |
| --- | --- |
| Conversation & discussion with the owner | Egyptian Arabic dialect (or the language the owner requests) |
| Technical documentation (`docs/**`, `README.md`, `AGENTS.md`) | English |
| Task plans, delivery reports, risk register entries | English |
| Code identifiers, comments, commit messages | English |
| User-facing site copy | Bilingual EN/AR via the project's translation system (never hardcode one language) |

## 4. Zero Hallucination Law

Fabrication is a critical failure. Specifically forbidden:

- Inventing test results, coverage numbers, or benchmark figures.
- Claiming a build/lint/deploy passed without its real output as evidence.
- Pretending a server, API, or external call responded when it did not.
- Inventing file paths, exports, dependency versions, or repository contents.

If blocked or uncertain: **state the obstacle plainly and stop.** A truthful
"I could not verify X because Y" is always acceptable; a confident guess is not.
Every claim of success must be backed by captured evidence under
`docs/tasks/<task-name>/evidence/` (see [Workflow](docs/workflow.md)).

## 5. Code Quality Laws

- **Strict types.** No lazy `any`, no `as any` escapes. Use generics, unions, and
  `unknown` with narrowing instead.
- **No suppressed diagnostics.** `@ts-ignore`, `@ts-expect-error` (without a linked
  justification comment and issue reference), and bare `eslint-disable` are forbidden.
- **Handle all UI states explicitly:** loading, empty, and error states must be
  designed and implemented — not left blank.
- **Small, reviewable increments.** One logical change at a time (Workflow, Phase 3).
- **Dead code and commented-out code are not delivered.**
- Full engineering laws: [docs/constitution.md](docs/constitution.md).

## 6. UI Controls Contract

Raw browser controls are forbidden in delivered UI:

- ❌ Native `<select>` dropdowns, default browser pickers, unstyled `<input>`/
  `<textarea>`/`<button>` outside the design system.
- ✅ All interactive controls must come from the project's design-system layer:
  `components/ui/*` (Radix primitives, shadcn pattern) and
  `components/shared/ui/*` (project-composed controls).
- Styling, focus rings, RTL mirroring, and accessibility must follow
  [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) tokens and contracts.

## 7. How to Work Here (summary)

Every non-trivial task follows the 6-phase lifecycle defined in
[docs/workflow.md](docs/workflow.md):

1. Define outcome & acceptance criteria
2. Context snapshot (git state, existing code review)
3. Incremental implementation
4. Verification & proof (build, lint, tests, captured evidence)
5. QA checklist
6. Permanent delivery record in `docs/tasks/<task-name>/report.md`

Run the governance gate before delivering:

```bash
python docs/scripts/verify-project.py
```

All checks must pass (green) — see [Verification Scripts](docs/scripts/README.md).

## 8. Vendored Agent Skills

Approved engineering skills are vendored under `.agents/skills/` and pinned in
[docs/tooling/skills.lock.json](docs/tooling/skills.lock.json). Capabilities and usage:
[docs/tooling/skills.md](docs/tooling/skills.md). Do not modify application code while
installing or updating skills.

## 9. Quick Reference

| Need | Go to |
| --- | --- |
| Run / build / deploy the project | [Project Guide](docs/project-guide.md) |
| Where a module lives / may import from | [Module Map](docs/architecture/modules.md) |
| Color, type, spacing tokens · form rules | [Design System](docs/DESIGN_SYSTEM.md) |
| Content entities (services, works, marketplace…) | [ERD](docs/ERD.md) |
| Task lifecycle · evidence · risks | [Workflow](docs/workflow.md) |
