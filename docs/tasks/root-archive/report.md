# Delivery Report: root-archive

Task plan: [plan.md](plan.md) · Date: 2026-11-21 · Branch: `design-unify`

## What Was Delivered

Repository root decluttered by **moving** all inert legacy material into
`docs/archive/` — owner directive: "move everything instead of deleting".
**Zero deletions.**

## Moves Executed

| Item | Method | Destination |
| --- | --- | --- |
| 8 log files (`build.log`, `dev.log`, `dev-3003.log`, `dev-server.log`, `dev-callback-preview{,-error}.log`, `dev-ecosystem-preview{,-error}.log`) | `mv` (untracked) | `docs/archive/logs/` |
| `scratch/` (ad-hoc scripts + backups) | `mv` (untracked) | `docs/archive/scratch/` |
| `tsconfig.tsbuildinfo` (regenerable TS cache) | `mv` (gitignored) | `docs/archive/build-artifacts/` |
| `project_overview.md` (outdated; superseded by `docs/project-guide.md`) | **`git mv`** (history preserved) | `docs/archive/project_overview.md` |
| `.agent/` legacy skill copy (28 tracked files; R-007) | **`git mv`** (history preserved) | `docs/archive/agent-legacy/` |

## Files Created / Modified

- Created: `docs/archive/README.md` (inventory + recovery paths), this task folder.
- Modified: `eslint.config.mjs` — replaced stale ignore entries
  (`scratch/**`, `ui-ux-pro-max-skill/**`, `.agent/**`) with
  `.agents/**` and `docs/archive/**`.
- Modified: `docs/scripts/verify-project.py` — content checks (links, English-only)
  now exclude `docs/archive/**` (frozen history), while required-file checks
  still cover it.
- Modified: `docs/workflow.md` — R-002/R-006/R-007 → Mitigated; delivery log entry.

## Not Touched (Important)

- `pencilstudio.zip` was **not archived because it no longer exists on disk** —
  the owner deleted it locally before this task (`git status` shows ` D`,
  a local, unstaged deletion). It remains fully recoverable from git history
  (`git checkout HEAD -- pencilstudio.zip`). Documented in
  [docs/archive/README.md](../../archive/README.md).
- `.freebuff/` (external-tool project marker), `.vscode/`, `.npmrc`, build dirs:
  active tooling — intentionally left in place.
- All ~199 owner-modified files on `design-unify`: untouched.

## Commands Executed & Results

| Command | Result |
| --- | --- |
| `mv` × 10 (logs, scratch, tsbuildinfo) | OK |
| `git mv project_overview.md docs/archive/` | OK (staged rename) |
| `git mv .agent docs/archive/agent-legacy` | OK (staged rename) |
| `python docs/scripts/verify-project.py` (after-move, pre-report) | RED ×1 — delivery-log link to this not-yet-written report (expected ordering; same pattern as [governance-foundation](../governance-foundation/report.md)) |
| `python docs/scripts/verify-project.py` (final) | GREEN — all 163 checks — [evidence/gate-final-root-archive.txt](evidence/gate-final-root-archive.txt) |
| `pnpm lint` | Exit 1: **pre-existing** issues in owner code only — 14 errors (`no-explicit-any`, `jsx-no-comment-textnodes`) + 275 warnings across 57 files, all under `app/`/`components/`/`hooks/`. Verified none of the linted files belong to this task (`docs/**`, `.agents/**`, `eslint.config.mjs` never appear). This task only *removed* ignore paths, which cannot introduce errors elsewhere. Evidence: [evidence/lint-after-archive.txt](evidence/lint-after-archive.txt). The 14 errors align with Constitution Law 2 — candidate for a future code-quality task |

## Verification Evidence

- [evidence/before-state.txt](evidence/before-state.txt) — root listing + git status before
- [evidence/after-state.txt](evidence/after-state.txt) — clean root after
- [evidence/gate-after-archive.txt](evidence/gate-after-archive.txt) — mid-task gate run
- [evidence/gate-final-root-archive.txt](evidence/gate-final-root-archive.txt) — final gate run

## Remaining Obstacles / Follow-ups

- `git mv` results are **staged renames awaiting commit** — owner decides when.
- R-001 (uncommitted design-unify work), R-003 (favcion.png), R-004 (latest deps),
  R-005 (no tests/CI) remain Open.
