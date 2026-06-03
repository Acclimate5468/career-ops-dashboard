# Build Rules

Rules for any coding agent (Claude, Codex, or similar) working in this repo.

## Read before you write

Before modifying anything, read:

1. `docs/SOURCE_OF_TRUTH.md` — to confirm the change is in scope.
2. `docs/DATA_MODEL.md` — to align with conceptual entities.
3. `docs/NEXT_TASKS.md` — to confirm which task you are working on.

If the requested change conflicts with `SOURCE_OF_TRUTH.md`, stop and flag the conflict — do not silently expand scope.

## One focused task at a time

- Work on a single task from `NEXT_TASKS.md` per run.
- Do not start the next task automatically.
- Do not refactor unrelated code "while you're in there."

## Phase 1 boundaries

Until explicitly approved:

- **Frontend-only.** No backend, no server process, no API routes.
- **No database.** Initial approved persistence target is `localStorage`, and only when the relevant step is reached.
- **No external integrations.** No LinkedIn, Indeed, scrapers, email, or AI API calls.
- **No auth or billing.**
- **No auto-apply** or any automated submission to a third party.

If a task seems to require any of the above, stop and surface it for user/ChatGPT review.

## Validation before reporting success

Before reporting a task as done:

- `npm install` completes without errors.
- `npm run build` succeeds (type-check + production build).
- If a dev server is reasonable to start, confirm it boots without runtime errors.
- The QA items in `docs/QA_CHECKLIST.md` relevant to the current step all pass.

If validation fails, fix the root cause. Do not bypass it.

## Report format

When a task is done, report back with:

1. **Files created/changed** — concrete paths.
2. **Commands run** — verbatim.
3. **Validation result** — build success/failure, QA items checked.
4. **What was intentionally not built** — scope boundaries respected.
5. **Assumptions made** — anything inferred rather than specified.
6. **Issues for review** — anything that needs user/ChatGPT input before the next step.

## Style and quality

- TypeScript strict mode stays on.
- No new dependencies unless the task explicitly calls for them.
- No styling frameworks (Tailwind, shadcn/ui, MUI, etc.) in Phase 1 unless approved.
- Keep components small and focused; prefer plain CSS classes.
