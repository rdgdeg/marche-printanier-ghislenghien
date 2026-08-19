# AGENTS.md

## Cursor Cloud specific instructions

### Overview

Single-service project: a **Vite + React 19 + TypeScript** static front-end for the
"Marché printanier de Ghislenghien" (spring market) website. Package manager is **npm**
(`package-lock.json`). There is no backend, database, or API — content is served from
static data in `data.ts` and localized via `contexts/TranslationContext`.

### Run / build / typecheck

Standard commands live in `package.json`:

- Dev server: `npm run dev` — serves on port **5174** (fixed via `strictPort` in `vite.config.ts`, host `0.0.0.0`).
- Production build: `npm run build`.
- Preview built output: `npm run preview`.

There is **no lint script** and **no test suite** configured in this repo.

### Non-obvious notes

- `GEMINI_API_KEY` (mentioned in `README.md` and wired into `vite.config.ts` via
  `define`) is **not actually used** anywhere in the app code. The app runs fully
  without any `.env.local` or API key.
- There is no `typecheck` npm script. Running `npx tsc --noEmit` reports a
  pre-existing type error in `components/ScrollToTop.tsx` (`React.FC` used without
  importing `React`). This is harmless for `npm run dev`/`npm run build` because Vite
  transpiles with esbuild and does not type-check. Do not treat this pre-existing
  error as a setup failure.
- Tailwind CSS is loaded at runtime via CDN (`index.html`), not via a build step.
