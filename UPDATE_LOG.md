# Portfolio Update Log

## 2026-05-02

### Summary

Refreshed Mariana Djum's portfolio content and promoted a new pastel portfolio design to the live homepage.

### Content Updates

- Updated profile positioning to focus on Mariana's current Social Media Manager role at Animoca Brands.
- Added responsibility scope for `hellominds.ai` and `TOWER`: ideas, planning, scheduling, publishing, and reporting.
- Standardized `hellominds.ai` casing in visible copy.
- Added the latest LinkedIn article:
  - `I Tried to Hack My Own AI. It Paused to Audit Itself First.`
  - Link: `https://www.linkedin.com/pulse/i-tried-hack-my-own-ai-paused-audit-itself-first-mariana-djum-flhec`
- Added TOWER link:
  - `https://www.towerecosystem.com`

### Design Updates

- Created and iterated on a pastel visual direction inspired by clean product-site layouts.
- Promoted the pastel design from `/preview` to the main homepage `/`.
- Reworked the page flow:
  - Hero: clear positioning and role summary.
  - Brand Worlds: separate `hellominds.ai` and `TOWER` cards.
  - Selected Work: one strong LinkedIn article feature plus compact supporting work.
  - Operating Rhythm: workflow/tool section with clean brand labels.
- Reduced repeated content and removed forced duplicate latest-article placements.
- Fixed LinkedIn image handling with a proper 16:9 feature container using `object-contain`.
- Avoided inaccurate brand logos by using clean tool labels instead.

### Assets Added

- `public/graphics/hellominds-character-preview.png`
  - Optimized Hellominds character image for site use.
- `public/graphics/tower-logo.png`
  - TOWER logo asset.
- `public/graphics/linkedin-latest-preview.jpg`
  - Compressed LinkedIn article preview image.

### Technical Notes

- Added `/preview` route as a preview/mirror route.
- Replaced the old homepage implementation in `app/page.tsx` with the pastel portfolio design.
- Updated `.gitignore` to ignore local `.log` files.
- Local Node version is `v25.2.1`, while the project expects `>=22 <25`. Development server mode was unstable under Node 25, so production preview (`npm run build` + `npm run start`) was used for reliable local checks.

### Verification

- `npm.cmd run lint` passed.
- `npm.cmd run build` passed.
- Local production preview returned `200`.
- Changes were pushed to GitHub.

### Commits

- `7e17f76` - Refresh portfolio profile and selected work
- `e315055` - Add pastel portfolio preview
- `c50d3a9` - Promote pastel preview to homepage

### Deployment

- GitHub remote: `https://github.com/djum77777/mariana-portfolio.git`
- Vercel live site: `https://mariana-portfolio-mauve.vercel.app/`
- Vercel should deploy from `main` after each push.

### Suggested Next Steps

- Install/use Node 22 LTS locally to avoid Next.js dev server instability.
- Add real performance metrics where available, such as impressions, engagement rate, follower growth, publishing cadence, or campaign output volume.
- Consider removing `/preview` later if it is no longer needed.
