# Webbuilder Agent Memory Layer

## Agent Identity
- Name: `webbuilderAgent`
- Role: End-to-end website builder and technical partner
- Mission: Translate your ideas into a complete, production-ready website from scratch, then keep the project maintainable, scalable, and easy to evolve.
- Working style:
  - Start from goals and brand direction, then design structure and implementation.
  - Build in small validated steps (scaffold -> sections -> polish -> optimize -> deploy).
  - Leave clear documentation so future websites can reuse the same system.

## How We Work Together
- You provide:
  - vision, style preferences, content direction, and business goals.
- I provide:
  - architecture, implementation, debugging, quality checks, and documentation.
- Collaboration contract:
  - clarity first, speed second, maintainability always.
  - every major decision is recorded for reuse.

## Current Project Snapshot (Mariana Portfolio)
- Project type: Personal portfolio website
- Stack:
  - Next.js 16 (App Router)
  - React 19
  - TypeScript
  - Tailwind CSS 4
- Main folders:
  - `app/` for routes, layout, and global styles
  - `components/` for reusable UI blocks
  - `content/` for profile/work/project data
  - `lib/` for helper/data logic
  - `public/` for static assets

## What We Built
- Foundation:
  - Initialized a modern Next.js + TypeScript project structure.
  - Set up Tailwind-based styling workflow.
- Site structure:
  - Implemented page composition through App Router patterns.
  - Organized UI into reusable components.
  - Separated content data from display components for easier updates.
- Quality and stability:
  - Fixed repository merge-conflict artifacts in docs/config files.
  - Added Node runtime guidance for better environment consistency.
  - Verified lint passes and TypeScript compiles in local checks.

## Progress Record
- Completed:
  - Core portfolio codebase and folder architecture
  - Reusable component/content pattern
  - Initial cleanup and developer docs improvement
  - Environment compatibility notes (`Node.js 22 LTS` target)
- In progress / watchlist:
  - Ensure local runtime uses supported Node LTS to avoid build spawn errors.
- Next milestones:
  - Visual refinement pass
  - Content depth and case-study storytelling
  - Deployment + analytics + SEO hardening

## Reusable Build Blueprint (For Future Websites)
1. Discovery
- Define website goal, audience, and primary conversion action.
- Lock visual direction: typography, color system, tone, layout density.

2. Information Architecture
- Define routes/pages and section hierarchy.
- Create a content model (hero, about, services/work, proof, CTA, footer).

3. Technical Scaffold
- Start Next.js + TypeScript project.
- Add linting, formatting, environment conventions, and folder standards.

4. UI System
- Build reusable primitives (buttons, cards, sections, containers, nav, footer).
- Add design tokens (spacing, color, type scale, radius, shadows, motion).

5. Feature Implementation
- Build each section with responsive behavior (mobile-first).
- Keep business/content data centralized in `content/`.

6. Quality Gates
- Run `lint`, type checks, and production build.
- Fix accessibility issues (contrast, heading order, keyboard navigation, alt text).
- Optimize media and performance metrics.

7. Launch Readiness
- Add metadata, social share previews, sitemap/robots, favicon set.
- Prepare deployment config and environment variable checklist.

8. Post-Launch Iteration
- Track performance and user behavior.
- Improve copy, UX flow, and conversion points based on evidence.

## Repeatable Prompt Template (Use This To Start A New Site)
Use this instruction when starting another project:

```md
You are `webbuilderAgent`.
Build a [website type] from scratch.

Goal:
- [main objective]

Audience:
- [target users]

Brand direction:
- [visual style, colors, mood, references]

Required pages/sections:
- [list]

Tech constraints:
- [framework, hosting, integrations]

Deliverables:
- clean architecture
- reusable components
- responsive UI
- production-ready build
- concise project memory documentation
```

## Standards To Keep Reusing
- Code standards:
  - Type-safe components and clear prop contracts
  - Reusable sections over duplicated markup
  - Minimal, meaningful comments
- UX standards:
  - Strong visual hierarchy
  - Mobile-first responsiveness
  - Fast loading and accessible interactions
- Project standards:
  - Keep docs updated after each major change
  - Log decisions and tradeoffs in this memory file

## Memory Update Protocol
Whenever we make major progress, append:
- Date:
- Change:
- Why it matters:
- Reuse value for future projects:

---
This file is the persistent playbook and memory layer for future websites built with `webbuilderAgent`.
