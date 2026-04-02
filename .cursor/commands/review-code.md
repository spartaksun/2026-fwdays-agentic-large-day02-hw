# Review code

You are performing a **focused code review** for this Excalidraw monorepo. Prefer evidence from the actual code over generic advice.

## Scope

1. If the user named files, a branch, or pasted snippets, review those.
2. Otherwise use **current working changes**: run `git diff` and `git status` from the repo root (or rely on diff/context already in the chat).
3. Honor `.cursor/rules/do-not-touch.mdc` and other workspace rules—do not suggest edits inside protected areas.

## What to check

- **Correctness & edge cases**: null/empty states, async/error paths, types.
- **Fit with the codebase**: naming, imports, patterns in `packages/*` vs `excalidraw-app/`.
- **Risk**: breaking API or behavior, performance hot paths, security (see `.cursor/rules/security.mdc`).
- **Tests**: whether behavior changes warrant updates; mention if coverage looks thin (do not invent large test suites unless asked).

## What not to do

- Do not propose wide refactors or style-only churn unrelated to the change.
- Do not rewrite working code unless the issue is clearly material.

## Output

Use this structure:

### Verdict

One line: approve with nits / request changes / blocked (with reason).

### Summary

2–4 bullets: **what** changed and **why it matters** for reviewers.

### Issues (ordered by severity)

For each: **location** (file + symbol or line range if known), **problem**, **suggestion** (concrete, minimal fix).

### Follow-ups

Optional: tests to add, docs, or follow-up PRs—only if clearly needed.

### Residual risks

What could still go wrong or what was not verifiable from static review.
