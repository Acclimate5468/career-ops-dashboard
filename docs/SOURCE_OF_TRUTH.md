# Source of Truth

This document defines what Career Ops Dashboard **is** and what it **is not**. It is the canonical scope reference. Any deviation requires user/ChatGPT review before code changes.

## What it is

- A **private, single-user, local** job-search operating dashboard.
- **Phase 1 is not public SaaS.** No teams, no billing, no public onboarding, no cloud deployment.
- The product's purpose is to keep job-search artifacts (profile, role targeting, postings, bullets, applications) coherent with a verified record of the user's actual background.

## Core rule — Truth Lock

> No resume bullet, job match, or application note may imply something that is not supported by the Truth Lock Profile.

Every claim that ends up in front of an employer must trace back to a stored, verified fact. Anything that cannot be traced must be flagged as a blocked claim, not silently smoothed over.

## Phase 1 modules

1. **Truth Lock Profile** — the verified record of roles, achievements, skills, credentials.
2. **Target Role Lanes** — the small set of role types being actively targeted.
3. **Job Posting Analyzer** — match a posting against the Truth Lock and Role Lanes; surface gaps honestly.
4. **Resume Bullet Bank** — reusable, Truth-Lock-backed bullets, organized for reuse.
5. **Application Tracker** — manual log of applications the user submitted themselves.

## Explicitly out of scope (Phase 1)

The following must **not** be built without explicit approval and a scope update to this document:

- Backend services, local API server, or any server process
- Database, SQLite, or any persistence beyond what's later approved (initial persistence target: `localStorage`)
- Authentication, login, accounts
- Billing, subscriptions, teams, SaaS admin
- Browser extensions
- LinkedIn, Indeed, or any job-board integration
- Job-board scraping
- Auto-apply or automated submission of any kind
- Email automation
- Public onboarding flows
- Cloud deployment
- External APIs of any kind
- AI API calls (no calls to Claude, OpenAI, or any LLM provider)

## How scope changes

Scope changes are not unilateral. To change scope:

1. Update this document in the same PR/change that introduces the new capability.
2. Note the rationale (who asked, why, what triggered it).
3. Get a user/ChatGPT review before merging.
