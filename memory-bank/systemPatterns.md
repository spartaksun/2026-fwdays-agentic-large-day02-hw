# System patterns

## Monorepo

- Yarn workspaces; internal path aliases (see `vitest.config.mts`).
- Packages built with esbuild; app built with Vite.

## Excalidraw editor

- State: `AppState` in `packages/excalidraw/types.ts`; updates via **actionManager.dispatch()** only (no Redux/Zustand/MobX).
- Drawing: Canvas 2D / scene pipeline — not React DOM for the canvas; see `scene/renderer.ts` (protected).

## Code style (components)

- Functional components + hooks; props type `{Name}Props`; named exports; kebab-case utilities, PascalCase components; colocated `*.test.tsx`.
