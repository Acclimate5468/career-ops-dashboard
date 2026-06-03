# Current Status

_Checkpoint captured at the initial version-control bootstrap (2026-06-03)._

## Version control

- **No git existed before this task.** This repository is initialized fresh; the initial
  commit is the first snapshot of the project.

## App type and phase

- Vite + React 18 + TypeScript SPA — frontend-only, private, single-user, local-first.
- **Phase 1, Step 1 of 8 — "Frontend app shell + repo docs" (in progress)** per
  `docs/NEXT_TASKS.md`.

## Implemented so far

- Vite + React + TypeScript scaffold (`index.html`, `src/main.tsx`, `src/App.tsx`).
- App shell layout: `src/components/layout/` — `AppShell.tsx`, `Sidebar.tsx`, `TopBar.tsx`.
- Module registry: `src/app/modules.ts`.
- Module placeholder screen: `src/components/modules/ModulePlaceholder.tsx` (used for the
  five Phase 1 modules: Truth Lock Profile, Target Role Lanes, Job Posting Analyzer,
  Resume Bullet Bank, Application Tracker).
- Base styling: `src/styles/index.css`.
- Project docs: SOURCE_OF_TRUTH, BUILD_RULES, DATA_MODEL, QA_CHECKLIST, NEXT_TASKS,
  README, plus this file and `CLAUDE.md`.

## Not yet implemented

- TypeScript types for the conceptual entities in `docs/DATA_MODEL.md` (Step 2).
- In-memory seed data (Step 2).
- `localStorage` persistence layer (Step 3).
- Any module UI beyond placeholders (Steps 4–8).
- Backend, auth, database, external integrations, auto-apply — **out of scope for Phase 1.**

## Validation

```bash
npm run build   # tsc -b && vite build
```

## Danger zones

- Generated artifacts must stay out of git: `node_modules/`, `dist/`, `*.tsbuildinfo`,
  and `.claude/settings.local.json` are all gitignored — verify before each commit.
- Truth Lock must be preserved in every future feature: no unbacked claims.
- Do not introduce backend/auth/database/integrations/persistence ahead of their scoped step.

## Next recommended task

- **Step 2 — Phase 1 TypeScript types + seed data only**: define types for the
  `docs/DATA_MODEL.md` entities and add small in-memory seed data. No persistence, no UI
  changes beyond rendering the seed. Do not auto-advance.
