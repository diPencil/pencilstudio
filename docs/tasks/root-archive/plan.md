# Task Plan: root-archive

## Goal

Declutter the repository root by **moving** (never deleting) all inert legacy
material into `docs/archive/`, preserving git history for tracked files
(`git mv`) and byte-level content for untracked files. Owner directive:
"move everything instead of deleting".

## Acceptance Criteria

1. `docs/archive/` contains all items below; none are deleted:
   - 8 root log files → `docs/archive/logs/`
   - `scratch/` → `docs/archive/scratch/`
   - `tsconfig.tsbuildinfo` → `docs/archive/build-artifacts/` (regenerable cache)
   - `pencilstudio.zip` → `docs/archive/pencilstudio.zip` (git mv)
   - `project_overview.md` → `docs/archive/project_overview.md` (git mv; superseded by docs/project-guide.md)
   - `.agent/` legacy skill copy → `docs/archive/agent-legacy/` (git mv)
2. `eslint.config.mjs` ignore entry updated from `.agent/**` to the archive path.
3. `docs/archive/README.md` documents the archive and its recovery paths.
4. Governance gate (`python docs/scripts/verify-project.py`) stays GREEN
   (archive excluded from doc-content checks — historical material is frozen).
5. Risk register updated: R-002, R-006, R-007 → Mitigated with evidence.
6. Nothing committed; `git mv` results are staged renames only (owner decides).

## Context Snapshot (Phase 2)

- Tracked (git mv): `pencilstudio.zip`, `project_overview.md`, `.agent/` (28 files).
- Untracked (plain mv): `build.log`, `dev.log`, `dev-3003.log`, `dev-server.log`,
  `dev-callback-preview{,-error}.log`, `dev-ecosystem-preview{,-error}.log`,
  `scratch/`, `tsconfig.tsbuildinfo` (gitignored cache, regenerates).
- Only reference to `.agent/` in tooling: `eslint.config.mjs:25` ignore entry.
- Branch `design-unify`; owner's 199 modified files untouched.

## Steps

1. Capture before-state evidence (root listing + git status).
2. Create `docs/archive/{logs,build-artifacts}`; move all items per table above.
3. Update `eslint.config.mjs`; exclude `docs/archive` from gate content scans.
4. Write `docs/archive/README.md`; update risk register + delivery log.
5. Re-run gate; capture evidence; write report.
