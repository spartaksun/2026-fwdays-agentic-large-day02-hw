# AGENTS.md

## Project Structure

Excalidraw is a **monorepo** with a clear separation between the core library and the application:

- **`packages/excalidraw/`** - Main React component library published to npm as `@excalidraw/excalidraw`
- **`excalidraw-app/`** - Full-featured web application (excalidraw.com) that uses the library
- **`packages/`** - Core packages: `@excalidraw/common`, `@excalidraw/element`, `@excalidraw/math`, `@excalidraw/utils`
- **`examples/`** - Integration examples (NextJS, browser script)

## Development Workflow

1. **Package Development**: Work in `packages/*` for editor features
2. **App Development**: Work in `excalidraw-app/` for app-specific features
3. **Testing**: Always run `yarn test:update` before committing
4. **Type Safety**: Use `yarn test:typecheck` to verify TypeScript

## Development Commands

```bash
yarn test:typecheck  # TypeScript type checking
yarn test:update     # Run all tests (with snapshot updates)
yarn fix             # Auto-fix formatting and linting issues
```

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

## Architecture Notes

### Package System

- Uses Yarn workspaces for monorepo management
- Internal packages use path aliases (see `vitest.config.mts`)
- Build system uses esbuild for packages, Vite for the app
- TypeScript throughout with strict configuration
