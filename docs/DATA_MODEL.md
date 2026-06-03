# Data Model (Conceptual)

This file describes the **conceptual** entities Career Ops Dashboard works with. It is documentation only — these entities are **not yet implemented**. Implementation begins in a later step (see `NEXT_TASKS.md`).

## Entities

### TruthProfile

The container for the user's verified background. There is exactly one per user (single-user app).

- Owns a collection of `TruthFact`s.
- Owns a collection of `BlockedClaim`s flagged elsewhere in the app.

### TruthFact

A single verified statement about the user's background.

- Examples: a held role, a quantified achievement, a skill with evidence, a certification.
- Has a category (role, achievement, skill, credential, etc.), a description, supporting evidence/source, and a verification status.
- `ResumeBullet`s reference one or more `TruthFact`s as their backing.

### BlockedClaim

A claim — typically a proposed resume bullet or job-match assertion — that is **not** backed by any `TruthFact`.

- Records what was attempted, where it came from (Bullet Bank, Analyzer, Tracker note), and why it is blocked.
- Surfaces the Truth Lock rule to the user instead of letting the claim ship.

### RoleLane

A target role type the user is actively pursuing.

- Examples: "Staff PM, B2B SaaS"; "Senior Frontend, fintech".
- Holds title patterns, seniority, must-have skills, disqualifiers, and notes.
- Used by the Analyzer and Tracker to filter and rank.

### JobPosting

A specific job posting the user has captured for analysis or application.

- Source URL, title, company, location, raw text, captured-at timestamp.
- Linked to zero or more `RoleLane`s.
- Owns a derived collection of `JobRequirement`s.

### JobRequirement

A single extracted requirement from a `JobPosting`.

- Description, type (must-have / nice-to-have / disqualifier), and the supporting `TruthFact`s (if any) that satisfy it.
- A requirement with no supporting `TruthFact` is a gap, not something to paper over.

### ResumeBullet

A reusable resume bullet.

- Text, tags (skills, role lanes), and a list of backing `TruthFact` IDs.
- A bullet whose backing facts are removed/invalidated becomes a `BlockedClaim`.

### Application

A record of a job application the user submitted **manually**.

- Linked `JobPosting`, status, submission date, follow-up notes, outcomes.
- The app never submits on the user's behalf.

## Relationships (high level)

- `TruthProfile` 1—N `TruthFact`
- `TruthProfile` 1—N `BlockedClaim`
- `ResumeBullet` N—N `TruthFact`
- `JobPosting` 1—N `JobRequirement`
- `JobPosting` N—N `RoleLane`
- `JobRequirement` N—N `TruthFact`
- `Application` N—1 `JobPosting`

## What is **not** in the model

- No user/account records (single-user app).
- No org, team, or billing entities.
- No third-party identifiers (LinkedIn IDs, Indeed IDs, etc.).
- No automation/queue entities — nothing is submitted on the user's behalf.
