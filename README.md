# Rika Sato — Portfolio

A single-page portfolio built with React, TypeScript and Vite, featuring the
two most recent projects as detailed case studies, a full career timeline,
and a tools/stack overview — all sourced from the skill sheet.

## Before you publish

- **Contact info** — lives in `src/components/Footer.tsx`.
- **Copy** — all display text lives in `src/i18n/en.ts` (English) and
  `src/i18n/ja.ts` (Japanese); the two files share the `Dict` shape in
  `src/i18n/types.ts`, so every string exists in both languages. Read
  them over and adjust anything that doesn't sound like you — and keep
  the two in sync when you edit. Language-neutral values (tech names,
  tool lists) are in `src/i18n/shared.ts`.
- **Language toggle** — the header has an EN / 日本語 switch. It defaults
  to Japanese for `ja-*` browsers, otherwise English, and remembers the
  choice in `localStorage`.
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
  i18n/         Content + translations — en.ts, ja.ts, shared.ts,
                types.ts, LanguageProvider.tsx
  index.css     Design tokens and all styling
  App.tsx       Page composition
```
