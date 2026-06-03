# Career Ops Dashboard

A private, single-user job-search operating dashboard. Phase 1 is **local-only** and **frontend-only** — no backend, no database, no auth, no integrations, no auto-apply.

## Core rule

**Truth Lock:** no resume bullet, job match, or application note may imply something that is not supported by the Truth Lock Profile.

## Phase 1 modules

1. Truth Lock Profile
2. Target Role Lanes
3. Job Posting Analyzer
4. Resume Bullet Bank
5. Application Tracker

## Run locally

```bash
npm install
npm run dev      # start Vite dev server
npm run build    # type-check + production build
npm run preview  # serve the production build
```

## Repo docs

Before any agent-driven change, read:

- [docs/SOURCE_OF_TRUTH.md](docs/SOURCE_OF_TRUTH.md) — product scope and what is in/out
- [docs/BUILD_RULES.md](docs/BUILD_RULES.md) — how coding agents must operate
- [docs/DATA_MODEL.md](docs/DATA_MODEL.md) — conceptual entities (not yet implemented)
- [docs/QA_CHECKLIST.md](docs/QA_CHECKLIST.md) — what to verify before reporting success
- [docs/NEXT_TASKS.md](docs/NEXT_TASKS.md) — task queue
