---
name: build-verify
description: Runs TypeScript, lint, format checks, Vitest, and production builds for this Excalidraw monorepo. Use before commits or PRs, after substantial code changes, when CI fails, or when the user asks to build, verify, or run checks.
---

# Build & Verify (Excalidraw monorepo)

## Assumptions

- Repo root: Yarn 1 workspaces, Node ≥ 18.
- Run commands from the **repository root** unless debugging a single package.

## Quick verify (local iteration)

Use when sanity-checking edits without refreshing snapshots:

```bash
yarn test:typecheck
yarn test:app --watch=false
```

Optional: `yarn test:code` (ESLint) if you touched JS/TS/TSX.

## Full verify (pre-commit / CI parity)

Runs typecheck, ESLint, Prettier check, and tests once (no watch):

```bash
yarn test:all
```

Prefer this before opening a PR or when mocking CI locally.

## Snapshot updates

AGENTS.md recommends updating snapshots before commit when outputs change intentionally:

```bash
yarn test:update
```

This runs Vitest with `--update`. Re-run `yarn test:app --watch=false` (or `yarn test:all`) after to confirm a clean run without stale snapshot drift.

## Fix formatting and lint

When `test:code` or `test:other` fails:

```bash
yarn fix
```

Re-run `yarn test:all` (or at least `yarn test:code && yarn test:other`).

## Build

**App production build** (typical “did it compile” check):

```bash
yarn build
```

**Packages only** (library outputs under `packages/*` — needed after core changes or before some examples):

```bash
yarn build:packages
```

**Order of work**: For changes that touch `packages/*`, run `yarn build:packages` before relying on consumers; then `yarn build` for the app if you need the full Vite output.

**Clean artifacts** (if builds act stale):

```bash
yarn rm:build
```

## Failure triage (short)

| Symptom | Try |
| --- | --- |
| Type errors | `yarn test:typecheck` — fix types at reported paths |
| ESLint | `yarn fix` then `yarn test:code` |
| Prettier | `yarn fix` then `yarn test:other` |
| Vitest / snapshots | Inspect diff; use `yarn test:update` only when changes are intended |
| Build errors | Read Vite/esbuild output; ensure `yarn build:packages` ran if packages changed |

## What not to substitute

- Do not use `yarn test` alone as “full verify” — it only runs Vitest in watch mode by default in some setups; use `yarn test:all` or explicit `--watch=false` as above.
