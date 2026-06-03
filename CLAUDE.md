# CLAUDE.md — Career Ops Dashboard

## Project identity

A **private, single-user, local-first job-search operating dashboard**. Frontend-only
Vite + React 18 + TypeScript SPA. Phase 1 has no backend, database, auth, integrations,
or auto-apply. The central rule is the **Truth Lock**: no resume bullet, job match, or
application note may imply anything not backed by the Truth Lock Profile.

## Source-of-truth docs (read before any change)

1. [docs/SOURCE_OF_TRUTH.md](docs/SOURCE_OF_TRUTH.md) — product scope: what is in/out
2. [docs/BUILD_RULES.md](docs/BUILD_RULES.md) — how coding agents must operate
3. [docs/NEXT_TASKS.md](docs/NEXT_TASKS.md) — sequential task queue (one task at a time)
4. [docs/DATA_MODEL.md](docs/DATA_MODEL.md) — conceptual entities (not yet implemented)
5. [docs/QA_CHECKLIST.md](docs/QA_CHECKLIST.md) — verify before reporting success

Current checkpoint: [docs/CURRENT_STATUS.md](docs/CURRENT_STATUS.md).

## Hard rules

- **Truth Lock only.** Surface gaps honestly; never paper over an unbacked claim.
- **No backend, auth, database, or integrations** unless a step in `NEXT_TASKS.md`
  explicitly scopes it. Approved Phase 1 persistence target is `localStorage`, and only
  when its step is reached.
- **No auto-apply** or any automated submission to a third party — ever.
- **No broad refactors.** One focused task per run; do not touch unrelated code.
- **No dependency changes** (add/remove/upgrade) without explicit approval.
- **No commit** without explicit instruction (this initial commit is the only
  pre-approved one).
- **No push** without explicit instruction. No remotes added without approval.
- Do not auto-advance `NEXT_TASKS.md`.

## Validation

Before reporting any task done:

```bash
npm run build        # tsc -b && vite build — must succeed
git status --short   # confirm only intended files changed
```

Then check the relevant items in `docs/QA_CHECKLIST.md`.
