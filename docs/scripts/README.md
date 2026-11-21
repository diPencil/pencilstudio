# Verification Scripts

Gate scripts for the governance system. Upstream: [Workflow Phase 4](../workflow.md).

| Script | Purpose | Failure behavior |
| --- | --- | --- |
| [`verify-project.py`](verify-project.py) | Governance gate: required files, vendored skills vs [`skills.lock.json`](../tooling/skills.lock.json) pins, internal Markdown links, English-only docs | Exit 1 — delivery blocked |
| [`check-ui-controls.py`](check-ui-controls.py) | Advisory: native `<select>` dropdowns in `app/` routes (forbidden by [Design System §6](../DESIGN_SYSTEM.md)) | Warnings — must be reviewed |

## Usage (from repo root)

```bash
python docs/scripts/verify-project.py    # must end with: RESULT: GREEN
python docs/scripts/check-ui-controls.py # advisory
```

Both are standard-library only (no pip installs) and run on Python 3.11+.
