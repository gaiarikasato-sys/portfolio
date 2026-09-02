# Rika Sato — Portfolio

A single-page portfolio built with React, TypeScript and Vite, featuring the
two most recent projects as detailed case studies, a full career timeline,
and a tools/stack overview — all sourced from the skill sheet.

## Before you publish

- **Contact info** — `src/components/Footer.tsx` has placeholder email and
  GitHub links (`your-email@example.com`, `github.com/your-username`).
  Replace them with your real details.
- **Copy** — the project summaries and bio in `src/data/` and
  `src/components/Focus.tsx` and `Hero.tsx` were written from the skill
  sheet. Read them over and adjust anything that doesn't sound like you.
- **Design tokens** — colors, type and spacing all live as CSS variables at
  the top of `src/index.css` if you want to adjust the palette.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploy to GitHub Pages

1. Push this project to a new GitHub repository.
2. In `vite.config.ts`, set `base` to `'/<your-repo-name>/'` (already
   defaults to `'./'`, which works for most cases, but a repo-scoped path
   avoids surprises on GitHub Pages specifically).
3. Install the deploy dependency (already listed in `package.json`) and run:

   ```bash
   npm run deploy
   ```

   This uses `gh-pages` to publish the `dist/` folder to a `gh-pages`
   branch.
4. In your repo's Settings → Pages, set the source to the `gh-pages`
   branch.

Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

## Structure

```
src/
  components/   UI sections (Hero, Projects, Experience, Skills, ...)
  data/         Content — projects.ts, experience.ts, skills.ts
  index.css     Design tokens and all styling
  App.tsx       Page composition
```
