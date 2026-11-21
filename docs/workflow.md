# Workflow — Task Lifecycle, Evidence & Risk Register

> Upstream: [AGENTS.md §7](../AGENTS.md) · [Constitution](constitution.md).
> Every non-trivial task (feature, fix, refactor, content module change) MUST pass
> through the six phases below. Trivial single-line fixes may compress phases, but
> Phases 4–6 (proof, QA, record) are never skipped.

---

## The 6-Phase Lifecycle

### Phase 1 — Define Outcome

- State the goal as **verifiable acceptance criteria** ("`/pricing` renders both
  languages with no console errors", not "improve pricing").
- Review existing code that the task touches (brownfield duty,
  [Constitution Law 0](constitution.md)).
- Identify affected modules via the [Module Map](architecture/modules.md).
- For complex tasks, create the task folder now:
  `docs/tasks/<task-name>/plan.md` (template in [tasks/README.md](tasks/README.md)).

### Phase 2 — Context Snapshot

- Record the git state before touching anything:

```bash
git status --short
git log --oneline -5
git branch --show-current
```

- Note uncommitted owner work — it is untouchable ([AGENTS.md §2](../AGENTS.md)).
- Save the snapshot into the task's `plan.md`.

### Phase 3 — Incremental Implementation

- Small, separable, reviewable slices. One logical change per increment.
- After each slice: `pnpm lint` and, at milestones, `pnpm verify` (isolated build).
- Follow all quality laws: strict types, no suppressed diagnostics, design-system
  controls only, bilingual+RTL complete per slice.

### Phase 4 — Verification & Proof

Evidence or it did not happen ([Constitution Law 7](constitution.md)):

```bash
pnpm lint                 # zero errors
pnpm verify               # production build into .next-verify → capture output
python docs/scripts/verify-project.py   # governance gate → all green
```

- Capture real outputs (build logs, lint results, screenshots of both LTR and RTL,
  both light and dark) into `docs/tasks/<task-name>/evidence/`.
- If a step fails: report the failure and the actual output. Never fabricate a pass.

### Phase 5 — QA Checklist

Before delivery, every item must be checked:

- [ ] Acceptance criteria from Phase 1 all met
- [ ] `pnpm lint` clean · `pnpm verify` build succeeds
- [ ] Both EN and AR render correctly; RTL layout verified
- [ ] Light + dark themes verified
- [ ] Responsive: 360px → 1920px
- [ ] No raw browser controls introduced ([Design System §6](DESIGN_SYSTEM.md))
- [ ] Loading / empty / error states handled
- [ ] No secrets, no `any`, no suppressed diagnostics
- [ ] Docs updated if shapes/modules changed ([ERD](ERD.md),
      [Module Map](architecture/modules.md))
- [ ] [Risk Register](#risk-register) updated if a risk was created/closed

### Phase 6 — Delivery Record (Permanent)

Append to `docs/tasks/<task-name>/report.md` (create the folder for any task that
touched more than one file):

| Section | Content |
| --- | --- |
| Files modified | Full list |
| Commands executed | Exact commands + exit status |
| Test/verification results | Real outputs, linked to `evidence/` artifacts |
| Remaining obstacles | Honest list; "none" only if truly none |
| Risk register deltas | New/closed risks |

---

## Risk Register

Live table of known historical/current problems requiring attention. Updated with
every delivery. Status: **Open · Mitigated · Closed**.

| ID | Risk | Evidence | Impact | Status |
| --- | --- | --- | --- | --- |
| R-001 | Large uncommitted design-unification work on branch `design-unify` (~199 modified files) — risk of loss/conflict | `git status` on 2026-11-21 | Loss of work; hard review | **Closed** 2026-11-21 — [repo-fresh-start](tasks/repo-fresh-start/report.md): owner discarded old history; the entire current state (design-unify work included) became the single baseline commit on `main` |
| R-002 | Root directory clutter: logs, `scratch/`, `tsconfig.tsbuildinfo`, outdated `project_overview.md` | repo root listing 2026-11-21 | Confusion, repo bloat, stale docs mislead agents | **Mitigated** 2026-11-21 — moved (not deleted) to `docs/archive/` by [root-archive](tasks/root-archive/report.md) |
| R-003 | Favicon asset misspelled: `public/favcion.png` referenced in `app/layout.tsx` | `ls public/` + layout.tsx metadata | Works today, but fragile — any "fix the typo" rename breaks icons silently | Open |
| R-004 | Unpinned runtime deps: `framer-motion: latest`, `@emotion/is-prop-valid: latest` in `package.json` | package.json dependencies | Non-reproducible builds; breaking upstream releases | Open |
| R-005 | No automated test suite and no CI pipeline | repo has no test config/scripts | Regressions ship undetected | Open |
| R-006 | `project_overview.md` outdated (port 3000 vs actual 3003; pre-refactor structure) | file vs actual repo | Misled agents/humans | **Mitigated** 2026-11-21 — archived to `docs/archive/project_overview.md` (history preserved via `git mv`); superseded by [project-guide.md](project-guide.md) |
| R-007 | Duplicate skill location: legacy tracked `.agent/skills/ui-ux-pro-max/` (28 files) coexists with the pinned `.agents/skills/` vendor set | `git ls-files .agent` on 2026-11-21 | Two sources of truth for the same skill; agents may read the stale copy | **Mitigated** 2026-11-21 — legacy copy archived to `docs/archive/agent-legacy/` (history preserved); final removal is a future `git rm` once the owner commits `.agents/` |

---

## Task Folder Convention

```
docs/tasks/<task-name>/
├── plan.md       # Phase 1–2: goal, acceptance criteria, context snapshot, steps
├── report.md     # Phase 6: permanent delivery record
└── evidence/     # Phase 4 artifacts: logs, screenshots, JSON proof files
```

Template and rules: [docs/tasks/README.md](tasks/README.md).

## Delivery Log

*Append one line per completed task, using the format: `YYYY-MM-DD — <task-name> — <one-line outcome> — link: tasks/<task-name>/report.md`*

- 2026-11-21 — `governance-foundation` — Governance docs, skills vendoring, verification gate established — link: tasks/governance-foundation/report.md
- 2026-11-21 — `root-archive` — Root decluttered by moving all legacy material into `docs/archive/` (zero deletions; git history preserved) — link: tasks/root-archive/report.md
- 2026-11-21 — `repo-fresh-start` — Old history discarded (owner decision); single baseline commit `a076836` force-pushed to origin; R-001 closed — link: tasks/repo-fresh-start/report.md
