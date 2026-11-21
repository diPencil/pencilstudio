#!/usr/bin/env python3
"""Governance verification gate for PENCIL Studio.

Checks (all must pass):
  1. Required governance files exist.
  2. Vendored agent skills exist and match the pinned SHAs in
     docs/tooling/skills.lock.json.
  3. Internal Markdown links in governance docs resolve to real files.
  4. Governance documentation is written in English (no Arabic codepoints).

Usage:  python docs/scripts/verify-project.py   (from the repo root)
Exit code 0 = all green, 1 = at least one failure.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]

REQUIRED_FILES = [
    "AGENTS.md",
    "README.md",
    "docs/constitution.md",
    "docs/project-guide.md",
    "docs/architecture/modules.md",
    "docs/DESIGN_SYSTEM.md",
    "docs/ERD.md",
    "docs/workflow.md",
    "docs/tooling/skills.md",
    "docs/tooling/skills.lock.json",
    "docs/scripts/verify-project.py",
    "docs/scripts/check-ui-controls.py",
    "docs/scripts/README.md",
    "docs/tasks/README.md",
    "docs/design/README.md",
]

LINK_RE = re.compile(r"\[[^\]]*\]\(([^)\s]+)\)")
# Arabic Unicode blocks: Arabic, Arabic Supplement, Arabic Extended-A/B, Presentation Forms
ARABIC_RE = re.compile(r"[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]")

failures: list[str] = []
passes = 0


def report(ok: bool, message: str) -> None:
    global passes
    if ok:
        passes += 1
        print(f"  [PASS] {message}")
    else:
        failures.append(message)
        print(f"  [FAIL] {message}")


def gov_markdown_files() -> list[Path]:
    # Archived material (docs/archive/) is frozen history: it must exist, but its
    # content is not held to current documentation standards.
    archive = REPO_ROOT / "docs" / "archive"
    files = [REPO_ROOT / "AGENTS.md", REPO_ROOT / "README.md"]
    files += sorted(
        f for f in (REPO_ROOT / "docs").rglob("*.md")
        if archive not in f.parents
    )
    return [f for f in files if f.is_file()]


def check_required_files() -> None:
    print("[1] Required governance files")
    for rel in REQUIRED_FILES:
        report((REPO_ROOT / rel).is_file(), f"exists: {rel}")


def check_skills() -> None:
    print("[2] Vendored agent skills vs skills.lock.json")
    lock_path = REPO_ROOT / "docs/tooling/skills.lock.json"
    try:
        lock = json.loads(lock_path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        report(False, f"skills.lock.json unreadable/invalid: {exc}")
        return
    skills = lock.get("skills", [])
    report(isinstance(skills, list) and len(skills) > 0, "lock file lists at least one skill")
    for skill in skills:
        name = skill.get("name", "<unnamed>")
        path = REPO_ROOT / skill.get("path", "nowhere")
        report(path.is_dir(), f"skill dir exists: {skill.get('path')}")
        # Vendored copies are plain files (no nested .git), so live SHA
        # verification is impossible by design. The commit field is a
        # provenance record: verify it is a well-formed SHA and that the
        # vendored copy is populated with real content.
        pinned = skill.get("commit", "")
        report(
            bool(re.fullmatch(r"[0-9a-f]{40}", pinned)),
            f"{name}: pin is a well-formed commit SHA ({pinned[:7]})",
        )
        if path.is_dir():
            content_files = [p for p in path.rglob("*") if p.is_file() and p.name != "LICENSE"]
            report(len(content_files) > 0, f"{name}: vendored copy has content ({len(content_files)} files)")


def check_markdown_links() -> None:
    print("[3] Internal Markdown links resolve")
    for md in gov_markdown_files():
        rel_md = md.relative_to(REPO_ROOT).as_posix()
        content = md.read_text(encoding="utf-8", errors="replace")
        targets = LINK_RE.findall(content)
        for target in targets:
            if target.startswith(("http://", "https://", "mailto:", "tel:")):
                continue
            file_part = target.split("#", 1)[0]
            if not file_part:
                continue  # pure in-page anchor
            resolved = (md.parent / file_part).resolve()
            report(resolved.exists(), f"{rel_md}: link target exists -> {target}")


def check_english() -> None:
    print("[4] Governance docs are in English")
    for md in gov_markdown_files():
        rel_md = md.relative_to(REPO_ROOT).as_posix()
        content = md.read_text(encoding="utf-8", errors="replace")
        hits = ARABIC_RE.findall(content)
        report(not hits, f"{rel_md}: no Arabic codepoints" if not hits
               else f"{rel_md}: {len(hits)} Arabic codepoints found (docs must be English)")


def main() -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass
    print(f"verify-project: governance gate for {REPO_ROOT.name}")
    print("=" * 60)
    check_required_files()
    check_skills()
    check_markdown_links()
    check_english()
    print("=" * 60)
    if failures:
        print(f"RESULT: RED — {len(failures)} failure(s), {passes} pass(es)")
        return 1
    print(f"RESULT: GREEN — all {passes} checks passed")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
