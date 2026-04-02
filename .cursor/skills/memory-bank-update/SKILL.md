---
name: memory-bank-update
description: Maintains the repo Memory Bank under memory-bank/ after substantive work—routing updates to the right file, concise bullets, read-before-edit for ambiguous tasks. Use when finishing features, refactors, or API changes; when the user asks to sync or refresh project context; or when closing a session that changed behavior, structure, or conventions.
---

# Memory Bank update

Canonical rules also live in `.cursor/rules/memory-bank.mdc` and `AGENTS.md`. This skill is the **workflow** for applying them.

## Before work (large or ambiguous)

1. Skim `memory-bank/activeContext.md`.
2. Open any memory-bank file that matches the area you are about to edit (see routing table below).

## After work (substantive changes)

Update **in the same change set** when practical (or in a quick follow-up if the user ends the session).

**Trigger updates when** behavior, structure, public APIs, architecture, tooling, shipped features, fixed bugs, or team conventions change.

**Skip or minimize** when the change is trivial and leaves no lasting decision (e.g. typo in a comment only), unless the user wants context synced.

## File routing

| File | Update when |
| --- | --- |
| `memory-bank/projectbrief.md` | Goals, scope, or hard constraints change |
| `memory-bank/productContext.md` | User-facing intent or problem framing changes |
| `memory-bank/activeContext.md` | Every substantive session — current focus, decisions, open questions |
| `memory-bank/systemPatterns.md` | Architecture, state, rendering, or monorepo patterns change |
| `memory-bank/techContext.md` | Tooling, commands, stack, or repo layout changes |
| `memory-bank/progress.md` | Features ship, bugs fix, or notable risks emerge |

If a standard file is **missing**, recreate it using the headings and purpose implied by the table (match tone of existing files).

## Writing style

- **Short, factual bullets** — not essays.
- **Point to code paths** (`packages/excalidraw/...`, `excalidraw-app/...`) instead of pasting large implementations.
- **Replace stale bullets** when focus shifts; do not append endless history.
- Leave **Open questions** in `activeContext.md` empty or with real unresolved items only.

## Typical session touch

Most sessions should at least refresh `activeContext.md` (current focus + recent decisions). Pair with `progress.md` when something user-visible landed or a risk was found.

## Examples

**After shipping a new app component**

- `progress.md`: bullet — what shipped, where it lives in the tree.
- `activeContext.md`: current focus if it moved; drop completed focus from "Current focus" or mark done in one line.

**After adding a yarn script or changing CI**

- `techContext.md`: command name and when to run it.

**After a new rendering/state pattern in the editor**

- `systemPatterns.md`: pattern name + file pointers; `activeContext.md` if still exploring follow-ups.
