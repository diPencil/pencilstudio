# Task Folders — Convention

Every non-trivial task gets a folder `docs/tasks/<task-name>/`. Upstream:
[Workflow](../workflow.md). The active register of tasks is the
[Workflow delivery log](../workflow.md#delivery-log).

```
docs/tasks/<task-name>/
├── plan.md       # Phase 1–2: goal, acceptance criteria, git snapshot, step list
├── report.md     # Phase 6: permanent delivery record
└── evidence/     # Phase 4: logs, screenshots, JSON proof — real outputs only
```

## Rules

1. `plan.md` exists **before** implementation starts; `report.md` and `evidence/`
   exist **before** the task is declared done.
2. Evidence contains only real captured output — never handwritten "results"
   ([AGENTS.md §4](../../AGENTS.md)).
3. Task names are `kebab-case` and verb/noun descriptive:
   `governance-foundation`, `pricing-rtl-fix`, `marketplace-content-model`.
4. The governance gate (`python docs/scripts/verify-project.py`) must be green
   at delivery; its output belongs in `evidence/`.
