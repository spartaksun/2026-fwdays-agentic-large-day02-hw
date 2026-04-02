---
name: create-command
description: >-
  Creates new Cursor slash commands as Markdown prompt files under .cursor/commands or ~/.cursor/commands. Use when the user invokes /create-command, asks for a custom slash command, Command Palette prompt, or reusable Cursor command; or when adding team-shared commands to a repo.
---

# Create Cursor Commands

## What counts as a command

A **Cursor slash command** is a reusable prompt stored as a **single `.md` file**. The filename (without `.md`) becomes the `/name` you pick from the slash menu. The **file body is the prompt** sent to the agent (no YAML frontmatter—unlike Skills).

## Where to put the file

| Scope                               | Directory                       |
| ----------------------------------- | ------------------------------- |
| **Project** (version control, team) | `<repo-root>/.cursor/commands/` |
| **Personal** (all workspaces)       | `~/.cursor/commands/`           |

Create the directory if it does not exist.

## Filename

- Use **kebab-case**: `review-pr.md` → `/review-pr`
- Short and descriptive; avoid generic names like `cmd.md`

## Workflow

1. **Gather intent** (if not already obvious): one-line purpose, whether project or personal, and the exact slash name desired.
2. **Draft the prompt body** in the `.md` file:
   - Start with a clear **goal** (what the agent should do).
   - Add **constraints** (scope, files to touch, what not to change).
   - Add **steps or checklist** when the workflow is multi-phase.
   - Add **output shape** if needed (e.g. commit message format, review sections).
3. **Write the file** at `.../commands/<name>.md`.
4. **Sanity-check**: body is self-contained; no broken references; no need for frontmatter.

## Quality bar

- **Specific**: nameable task, not “help me with code.”
- **Actionable**: verbs and criteria the agent can follow without guessing.
- **Scoped**: say which areas of the repo or stack matter when relevant.
- **Concise**: short commands are easier to reuse; long instructions belong in Skills or docs with a short command that points there.

## Example

**Path:** `.cursor/commands/summarize-diff.md`

```markdown
# Summarize diff

You are helping summarize local code changes for a PR description.

1. Run `git diff` and `git status` from the repo root (or use the user’s provided diff).
2. Summarize **what** changed and **why** in 2–4 bullet points for reviewers.
3. Call out risks, migrations, or follow-ups if any.
4. Do not propose unrelated refactors.

Output:

## Summary

- ...

## Notes for reviewers

- ...
```

## Commands vs Skills

|  | Command (`.cursor/commands/*.md`) | Skill (`.cursor/skills/**/SKILL.md`) |
| --- | --- | --- |
| **Purpose** | One-shot or reusable **prompt** | Agent **instructions** + discovery via frontmatter |
| **Format** | Markdown body only | YAML `name` + `description` + body |
| **Best for** | “Run this ask every time” playbooks | Background behavior, repo-specific verify steps, conventions |

If the user needs discovery (“apply when CI fails”), heavy reference material, or scripts, prefer a **Skill**; if they need a **slash-invoked template**, use a **Command**.

## After creating a project command

If the command encodes team workflow, consider mentioning it in `AGENTS.md` or contributor docs **only if** the user wants it documented—do not add docs unprompted.
