# QA Checklist

Run the items for the current step before reporting a task complete.

## Step 1 — Frontend app shell + repo docs

Functional:

- [ ] `npm install` completes without errors.
- [ ] `npm run dev` starts the app locally.
- [ ] `npm run build` succeeds (type-check + production build).
- [ ] The sidebar renders with all five module items.
- [ ] The top bar renders with the active module title.
- [ ] All five module placeholder screens render.
- [ ] Clicking each sidebar item updates the main content panel to the matching placeholder.
- [ ] The active sidebar item is visually distinct.

Scope (must all be **absent**):

- [ ] No auth / login screen exists.
- [ ] No backend / local API exists (no `apps/local-api/`, `server/`, `backend/`, `routes/`, etc.).
- [ ] No database or persistence layer exists (no SQLite, no `localStorage` writes yet).
- [ ] No external integrations exist (no LinkedIn, Indeed, scrapers, email, AI APIs).
- [ ] No auto-apply or submission feature exists.

Docs:

- [ ] `docs/SOURCE_OF_TRUTH.md` exists and lists scope + out-of-scope.
- [ ] `docs/BUILD_RULES.md` exists and states the read-before-write rule.
- [ ] `docs/DATA_MODEL.md` exists and lists the conceptual entities.
- [ ] `docs/QA_CHECKLIST.md` exists (this file).
- [ ] `docs/NEXT_TASKS.md` exists with the task queue and Step 1 marked in progress (or completed once done).

## Cross-step checks (run every step)

- [ ] No new dependency added unless the task explicitly called for it.
- [ ] No styling framework added in Phase 1.
- [ ] No scope expansion beyond `SOURCE_OF_TRUTH.md`.
- [ ] Truth Lock rule remains visible somewhere in the UI.
