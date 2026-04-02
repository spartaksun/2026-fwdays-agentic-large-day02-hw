# Create component

You are adding a **new React component** to this Excalidraw monorepo. Implement it; do not only describe steps.

## Gather inputs

1. From the user message, extract **component name** (PascalCase, e.g. `ElementCoordinates`) and **target** if given:
   - **Library / shared UI** → under `packages/*` (match sibling folders: often `packages/excalidraw/` or another `packages/<pkg>/`).
   - **App-only** → under `excalidraw-app/` (e.g. `excalidraw-app/components/`).
2. If name or target is missing, ask **one short question** with sensible defaults based on context; then proceed.

## Constraints

- Follow `.cursor/rules/conventions.mdc` for `packages/**/*.ts(x)`: functional components + hooks only, props type `{Name}Props`, **named exports only** (no default export), colocated `ComponentName.test.tsx` when adding under `packages/*`.
- For `excalidraw-app/`, mirror nearby files: same import style, styling approach, and folder layout as the closest existing component.
- Honor `.cursor/rules/do-not-touch.mdc`: do not edit protected files without explicit user approval.
- Keep the diff **minimal**: new component file(s), wire-up only if the user asked or it is required for the component to be reachable.
- No drive-by refactors or unrelated files.

## Implementation steps

1. **Read neighbors**: open 1–2 components in the chosen directory to match naming, exports, and patterns.
2. **Add the component file** (`PascalCase.tsx` in the chosen folder). Include necessary `import type` usage per conventions.
3. **Tests** (when under `packages/*`): add `ComponentName.test.tsx` with a small smoke/render test unless the user asked to skip tests.
4. **Exports**: if the package has a public barrel (e.g. `index.ts`), export the component only when it is part of the package API; otherwise keep it internal.
5. Run **`yarn test:typecheck`** (and fix any errors you introduced). Use `.cursor/skills/build-verify/SKILL.md` if the user expects full verification.

## Output

- **Created**: list new/changed file paths.
- **Usage**: one line on how to import or where it is mounted (if applicable).
- **Follow-ups**: only if something must be done manually (e.g. design review, protected file change).
