# Tech context

## Stack

- TypeScript (strict), React, Yarn workspaces, Vitest, esbuild, Vite.

## Common commands

```bash
yarn test:typecheck  # TypeScript
yarn test:update     # Tests + snapshots
yarn fix             # Format & lint fixes
```

Agent workflow for build + full checks: `.cursor/skills/build-verify/SKILL.md`.

## Layout

- `packages/excalidraw/` — published library
- `excalidraw-app/` — full app
- `packages/common`, `element`, `math`, `utils` — shared internals
