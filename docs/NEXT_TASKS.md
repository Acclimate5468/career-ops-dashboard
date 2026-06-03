# Next Tasks

The Phase 1 task queue. Work one task at a time. Do not auto-advance.

## Queue

1. **Step 1 — Frontend app shell + repo docs** _(in progress)_
   - Vite + React + TypeScript scaffold
   - Sidebar / TopBar / AppShell
   - Five module placeholder screens
   - Repo docs: SOURCE_OF_TRUTH, BUILD_RULES, DATA_MODEL, QA_CHECKLIST, NEXT_TASKS

2. **Step 2 — Phase 1 TypeScript types + seed data only**
   - Define types for the conceptual entities in `docs/DATA_MODEL.md`.
   - Add small in-memory seed data for development.
   - No persistence, no UI changes beyond rendering the seed.

3. **Step 3 — localStorage persistence**
   - Introduce a thin persistence layer backed by `localStorage`.
   - Hydrate on load, persist on change.
   - Still no backend, still no external services.

4. **Step 4 — Truth Lock Profile read/edit UI**
   - List, view, create, edit, delete `TruthFact`s.
   - Verification status visible.

5. **Step 5 — Target Role Lanes UI**
   - CRUD for `RoleLane`s with title patterns, must-haves, disqualifiers.

6. **Step 6 — Resume Bullet Bank UI**
   - CRUD for `ResumeBullet`s.
   - Each bullet links to one or more `TruthFact`s.
   - Bullets without backing facts show as `BlockedClaim`s.

7. **Step 7 — Application Tracker UI**
   - CRUD for `Application` records tied to `JobPosting`s.
   - Manual entry only — no submission features.

8. **Step 8 — Basic Job Posting Analyzer logic**
   - Paste posting text.
   - Heuristic extraction of `JobRequirement`s.
   - Match against `TruthFact`s and active `RoleLane`s; surface gaps honestly.
   - No external API calls.

## Working-on note

Mark the current step `(in progress)`. When complete, mark it `(done)` and move to the next.
