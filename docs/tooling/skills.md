# Agent Skills — Vendored Capabilities

> Upstream: [AGENTS.md §8](../../AGENTS.md). Pin record (machine-readable):
> [skills.lock.json](skills.lock.json). All skills live under `.agents/skills/`.
> Application code is never modified while installing/updating skills.

---

## Inventory

| # | Skill | Path | Pinned commit | Capabilities |
| --- | --- | --- | --- | --- |
| 1 | **21st AI Interface Skills** | `.agents/skills/21st-ai` | `15c7436` | UI component intelligence for the 21st.dev ecosystem: `21st-ai`, `21st-cli-use`, `21st-design-sync`, `21st-registry`, `21st-ui-build`, `21st-ui-explore`, `21st-ui-review` — discovery, building, syncing and reviewing UI components |
| 2 | **Agent Skills (Osmani)** | `.agents/skills/agent-skills` | `8c99fa3` | Engineering discipline suite: TDD, code review & quality, code simplification, performance optimization, frontend UI engineering, accessibility engineering, API design, debugging, CI/CD, git workflow, planning/task breakdown, spec-driven & incremental implementation, security hardening, observability, deprecation/migration, ADRs (26 skills) |
| 3 | **REA — Reverse Engineering & Anatomy** | `.agents/skills/rea` | `088bc68` | Reverse engineering and codebase anatomy: native tooling, bridge, MCP server (`mcp.json`, `server.json`), tests with vitest/stryker — understanding unknown/legacy code deeply |
| 4 | **UI/UX Pro Max** | `.agents/skills/ui-ux-pro-max` | `f76d165` | UI/UX intelligence & design: design-system auditing (`stack/scripts/design-audit.mjs`), setup tooling, preview assets — advanced UI/UX research and design guidance |
| 5 | **Security Audit (Cloudflare)** | `.agents/skills/security-audit` | `c1c8a8c` | Web security auditing: threat modeling and audit methodology for web applications (security-audit skill) |

## Usage Rules

1. Skills are **reference material for agents** — read their `skills/<name>/SKILL.md`
   files when a task matches their domain. They do not run automatically.
2. Never edit vendored skill sources; propose changes upstream instead.
3. Each skill's own license applies (`LICENSE` in each repo). Redistribution rules
   of each upstream repository must be respected.

## Update Procedure

Vendored skill folders are **plain file copies** (their `.git` metadata was
stripped at vendoring time so they commit cleanly; pins live in the lock file).

```bash
# Update a skill: re-clone upstream, fast-forward, re-pin, re-vendor
cd .agents/skills/<skill-dir>
git init && git remote add origin <upstream-url>   # url from skills.lock.json
git fetch --depth 1 origin <new-sha> && git reset --hard FETCH_HEAD
git rev-parse HEAD        # new SHA
# strip the clone metadata again so it stays a plain vendor copy:
rm -rf .git
# → update docs/tooling/skills.lock.json AND the table above
python docs/scripts/verify-project.py   # gate must stay green
```

Full install history and rationale are recorded in the
[workflow delivery log](../workflow.md#delivery-log).
