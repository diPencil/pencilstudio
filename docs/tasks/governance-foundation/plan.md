# Task Plan: governance-foundation

## Goal

Establish the constitution & evidence-driven governance system for PENCIL Studio:
vendored agent skills, the seven core governance documents, verification scripts,
and a green governance gate — **without touching application code** (brownfield
protection, Constitution Law 0).

## Acceptance Criteria

1. `docs/{architecture,design,scripts,tasks,tooling}/` and `.agents/skills/` exist.
2. Five skills vendored and pinned in `docs/tooling/skills.lock.json` (SHAs match).
3. Seven core governance documents exist and are cross-linked:
   `AGENTS.md`, `docs/constitution.md`, `docs/project-guide.md`,
   `docs/architecture/modules.md`, `docs/DESIGN_SYSTEM.md`, `docs/ERD.md`,
   `docs/workflow.md`; `README.md` links to them.
4. `python docs/scripts/verify-project.py` ends with `RESULT: GREEN`.
5. No file under `app/`, `components/`, `lib/`, `hooks/`, `public/` is modified.

## Context Snapshot (Phase 2, 2026-11-21)

- Branch: `design-unify` (active design-unification work, ~199 uncommitted
  owner-modified files — untouched by this task; tracked as risk R-001).
- Existing backups: `backup/pre-components-refactor`, `backup/pre-lib-refactor`.
- The `ui-ux-pro-max-skill` folder already existed at the repo root (a git
  checkout of nextlevelbuilder/ui-ux-pro-max-skill) → moved into
  `.agents/skills/ui-ux-pro-max` and fast-forwarded instead of re-cloned.
- Tooling available: Python 3.11.7, Node v24.13.0, pnpm 10.28, git.

## Steps

1. Inspect workspace; extract real tokens (globals.css), routes, module imports,
   and lib exports (evidence over assumption).
2. Create directory skeleton; move + update existing skill; clone remaining 4
   skills (shallow) and record SHAs.
3. Author the seven governance documents, cross-linked.
4. Author `verify-project.py` + advisory `check-ui-controls.py`.
5. Run the gate; fix findings; capture outputs as evidence.
6. Write the delivery record (`report.md`) with real command outputs.

## Out of Scope

- Committing/pushing anything (owner decision).
- Cleaning root clutter (R-002), renaming `favcion.png` (R-003), pinning deps
  (R-004) — all recorded in the Risk Register for follow-up tasks.
- Any modification of the 199 uncommitted working files.
