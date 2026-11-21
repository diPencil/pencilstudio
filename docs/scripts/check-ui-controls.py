#!/usr/bin/env python3
"""UI controls guard (advisory) for PENCIL Studio.

Scans route files under app/ for the clearest raw-control violation signal:
native <select> dropdowns, which the Design System forbids
(docs/DESIGN_SYSTEM.md §6). Raw <input>/<textarea> are intentionally NOT
flagged here because the design-system primitives in components/ui/
legitimately render them inside fully styled, accessible wrappers.

This is a WARNING-level tool: findings must be reviewed, not auto-fixed.

Usage:  python docs/scripts/check-ui-controls.py
Exit code 0 always (advisory); findings are printed for the QA checklist.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
SCAN_DIR = REPO_ROOT / "app"
SELECT_RE = re.compile(r"<select[\s>]")

def main() -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass
    findings: list[str] = []
    files = sorted(SCAN_DIR.rglob("*.tsx")) if SCAN_DIR.is_dir() else []
    for tsx in files:
        content = tsx.read_text(encoding="utf-8", errors="replace")
        for match in SELECT_RE.finditer(content):
            line = content.count("\n", 0, match.start()) + 1
            findings.append(f"{tsx.relative_to(REPO_ROOT).as_posix()}:{line} native <select>")
    print("check-ui-controls: raw browser controls in app/ routes")
    print("=" * 60)
    if findings:
        for f in findings:
            print(f"  [WARN] {f} — replace with components/ui/select")
        print(f"RESULT: {len(findings)} finding(s) — review before delivery")
    else:
        print("  No native <select> dropdowns found in app/ routes.")
        print("RESULT: clean")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
