# Active context

## Current focus

- Establish and maintain the **Memory Bank** (`memory-bank/`) so future sessions retain project decisions and status.
- **`excalidraw-app/components/ElementCoordinates.tsx`**: read-only coordinates block in Properties → General (via `CustomStats`); single selection uses axis-aligned top-left with rotation; multi-selection uses `getCommonBounds`.

## Recent decisions

- Memory Bank lives at repo root; agents update it after substantive changes (see `AGENTS.md`).
- Agent workflow for Memory Bank updates: `.cursor/skills/memory-bank-update/SKILL.md` (triggers, file routing, style).

## Open questions

- None recorded.
