# Task Plan: repo-fresh-start

## Goal

Replace the repository's old git history with a clean single-commit baseline
containing the **full current project state** (owner directive 2026-11-21, in
Egyptian Arabic: "the current project is what will be pushed to the repo" —
old history not needed, wipe permanently, no backup).

## Acceptance Criteria

1. Old history, backup branches, and remote stale branches are gone.
2. New history = exactly **one commit** on `main` holding: all working files
   (design-unify work included), governance docs, `.agents/skills` (vendored,
   `.git` metadata stripped), `docs/archive/` (frozen legacy).
3. Working tree files: **zero deletions of project content** (only git metadata
   `.git` dirs and vendored skill `.git` clones removed — files intact).
4. Remote `origin/main` force-pushed to the new baseline; stale remote
   `design-unify` deleted (otherwise old history stays reachable on GitHub).
5. Honest post-wipe doc updates: archive README recovery notes, skills update
   procedure, R-001 closed.
6. Governance gate GREEN; evidence captured; delivery record written.

## Context Snapshot

- Before: ~40 commits, branches `main`, `design-unify`, 2 `backup/*` branches,
  remote origin on GitHub.
- Known permanent losses (explicitly accepted by owner): old commits incl. the
  only remaining copies of `pencilstudio.zip`, backup-branch snapshots, all
  prior file versions — locally AND on remote after force-push.
- `.gitignore` updates needed pre-commit: `/.next-bak/` (stale build output,
  currently untracked+unignored).
- Note: `docs/archive/build-artifacts/tsconfig.tsbuildinfo` stays on disk but
  matches the `*.tsbuildinfo` ignore pattern — it is regenerable cache; archive
  copy remains as a disk artifact only (documented, honest).

## Steps

1. Pre-flight evidence: remote URL, git identity, branch list, last commits,
   tracked-file count.
2. Pre-commit doc updates (archive README, skills.md procedure, .gitignore).
3. Wipe: `rm -rf .git` + vendored skills' `.git` dirs (pin SHAs already in lock file).
4. `git init -b main`, restore repo-local identity, `git add -A`, verify staged
   set (no node_modules/.next), single baseline commit.
5. Re-add origin, `push --force origin main`, delete remote `design-unify`.
6. Gate run, report, amend baseline to include its own record, push.
