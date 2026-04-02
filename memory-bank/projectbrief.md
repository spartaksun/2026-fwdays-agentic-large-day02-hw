# Project brief

## Purpose

Monorepo for **Excalidraw**: the `@excalidraw/excalidraw` React library plus the full `excalidraw-app` web client and shared packages.

## Scope

- Editor features and fixes in `packages/*` (especially `packages/excalidraw/`).
- App-specific behavior in `excalidraw-app/`.
- Examples under `examples/`.

## Constraints

- Some core files are protected; see `.cursor/rules/do-not-touch.mdc` before changing renderer, restore, action manager, or core `types.ts`.
- No new npm dependencies without explicit approval; prefer existing `packages/utils/` helpers.
