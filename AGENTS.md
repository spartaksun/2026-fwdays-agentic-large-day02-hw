# AGENTS.md

## Project Overview

Excalidraw is an open-source virtual whiteboard. This repository is a **Yarn workspaces monorepo**: the published editor lives in `packages/excalidraw/`, while `excalidraw-app/` is the full web app (excalidraw.com-style). Shared low-level code sits in `packages/common`, `element`, `math`, and `utils`; `examples/` holds integration samples (e.g. Next.js, browser script).

## Tech Stack

- **Languages & UI**: TypeScript (strict), React (functional components + hooks in application code)
- **Monorepo**: Yarn workspaces; internal path aliases (see `vitest.config.mts`)
- **Build**: esbuild for packages, Vite for the app
- **Quality**: Vitest, ESLint/Prettier (via `yarn fix`)

More command and layout detail: `memory-bank/techContext.md`.

## Key Commands

```bash
yarn test:typecheck  # TypeScript type checking
yarn test:update     # Run all tests (with snapshot updates)
yarn fix             # Auto-fix formatting and linting issues
```

**Workflow**

1. **Package work**: editor and shared APIs → `packages/*`
2. **App work**: hosting, shell, app-only UX → `excalidraw-app/`
3. Before commits: run `yarn test:typecheck`, `yarn fix`, and `yarn test:update` (or the repo **build-verify** skill at `.cursor/skills/build-verify/SKILL.md`) so CI stays green.

## Conventions

Authoritative rule: `.cursor/rules/conventions.mdc`. Summary:

- **Components**: hooks only, no class components; props type `{ComponentName}Props`; **named exports** only; colocate tests as `ComponentName.test.tsx`
- **TypeScript**: no `any`, no `@ts-ignore`; prefer `type` for simple shapes; use `import type { X } from "..."`
- **Files**: kebab-case for utilities (`element-utils.ts`); PascalCase for component files (`LayerUI.tsx`)

## Do-Not-Touch / Constraints

Do **not** change these paths without explicit approval and a clear rationale (they are central to rendering, compatibility, actions, or core typing):

- `packages/excalidraw/scene/renderer.ts` — render pipeline
- `packages/excalidraw/data/restore.ts` — file format compatibility
- `packages/excalidraw/actions/manager.ts` — action system
- `packages/excalidraw/types.ts` — core types

If approved: understand dependencies, run `yarn test:typecheck` and `yarn test:update`, and manually verify load/save, rendering, and actions as appropriate. Full wording: `.cursor/rules/do-not-touch.mdc`.

## Memory Bank

The **Memory Bank** is the canonical, agent-maintained context under `memory-bank/`. It keeps goals, architecture, and status aligned across sessions.

| File                | Purpose                                         |
| ------------------- | ----------------------------------------------- |
| `projectbrief.md`   | Goals, scope, constraints                       |
| `productContext.md` | Who it’s for, product intent                    |
| `activeContext.md`  | Current focus, recent decisions, open questions |
| `systemPatterns.md` | Architecture and technical patterns             |
| `techContext.md`    | Stack, tooling, common commands                 |
| `progress.md`       | What works, in-flight work, known issues        |

**Agents should:**

1. Read relevant memory-bank files before substantial or ambiguous work.
2. **Update the memory bank after project changes** — same PR or session when possible: adjust `activeContext.md` and any other file whose topic changed (new feature → `progress.md`; new pattern → `systemPatterns.md`; new command or package → `techContext.md`, and so on).
3. Keep entries concise and factual; prefer pointers to code paths over copying implementation detail.

Project-specific enforcement also lives in `.cursor/rules/memory-bank.mdc`.
