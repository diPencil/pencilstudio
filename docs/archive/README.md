# Archive — Preserved Legacy Material

> Nothing in this folder was deleted. This is the owner-directed archive
> ("move everything instead of deleting") created by task
> [root-archive](../tasks/root-archive/report.md) on 2026-11-21.
> Archived files are **frozen historical material**: they are excluded from the
> governance content checks ([verify-project.py](../scripts/verify-project.py))
> and from eslint, and they receive no maintenance.

| Item | Origin | What it is | Recovery |
| --- | --- | --- | --- |
| `logs/` (8 files) | repo root | Development/preview server logs (`dev-*.log`, `build.log`) | Move back to root if ever needed |
| `scratch/` | repo root | Ad-hoc scripts (`capture-callback-sections.mjs`, `check_logos.js`, `crop.ps1`) and backups | Move back; was eslint-ignored |
| `build-artifacts/tsconfig.tsbuildinfo` | repo root | TypeScript incremental-build cache — **regenerates automatically** on next build; archived copy is disposable | Safe to ignore entirely |
| `project_overview.md` | repo root (git-tracked, `git mv` — history preserved) | Original project overview; **outdated** (port 3000 vs real 3003, pre-refactor structure) — superseded by [docs/project-guide.md](../project-guide.md) | No longer recoverable from git history (see note below) — preserved here as a plain file |
| `agent-legacy/` | `.agent/` (git-tracked, `git mv` — history preserved) | Old partial copy of the ui-ux-pro-max skill (28 files) — superseded by the pinned vendored copy at `.agents/skills/ui-ux-pro-max` (see [skills.md](../tooling/skills.md)) | Preserved here as plain files |

> **History note (2026-11-21, owner decision):** the repository's old git
> history was permanently discarded in the [repo-fresh-start](../tasks/repo-fresh-start/report.md)
> task — the current project state became the single baseline commit. Git-based
> recovery of archived items is therefore **no longer possible**; this folder is
> now the only copy of everything listed above. `pencilstudio.zip` (owner-deleted
> before the archive existed, previously "recoverable from history") is **gone
> permanently** as part of the same accepted decision.

Active tooling folders intentionally **not** archived: `.freebuff/` (project
marker for an external tool), `.vscode/`, `.npmrc`, build dirs (`.next*`).
