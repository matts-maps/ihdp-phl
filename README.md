# Philippine Humanitarian Data Package

A catalogue of GIS layers for disaster response, health, development, and climate resilience work in the Philippines. Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build), branded for MapAction.

## Status

Scaffolded, not yet deployed. 22 layers are catalogued in `src/data/layers.json` (from the project's `layers-inventory.json`), each with a metadata page, but no layer data has been uploaded to hosting yet - every layer page currently links to its original source instead of a direct download.

## Local development

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321/humanitarian-data-package-phl/`.

```bash
npm run build     # validates metadata, regenerates layer pages, builds to dist/
npm run preview   # preview the production build locally
```

## Before your first deploy

A few placeholders need replacing:

- **GitHub username** - `astro.config.mjs` (`site`, `social.href`) and the `guides/getting-started.md` / `guides/faq.md` issue links all use `YOUR_GITHUB_USERNAME` - replace with your actual username or org once the repo exists.
- **Logo** - `src/assets/logo.svg` is a placeholder shape, not the real MapAction logo. MapAction's branding guidelines restrict how the logo can be recoloured, placed, and scaled, so swap in the actual logo asset rather than adapting this placeholder.
- **LICENSE** - marked CC BY 4.0 for the site/metadata as a starting point; confirm before publishing.
- **Contact email** - every layer in `layers.json` currently has a placeholder `data-admin@example.org` contact; update to a real address.

## Repository structure

```
src/
  content/docs/       Starlight pages (guides/, layers/ - layers/ is auto-generated, don't hand-edit)
  data/layers.json    Master layer metadata - edit this to add/update layers
  components/         LayerCard, LayerGrid, DownloadButton
  styles/             MapAction brand CSS (colours, font)
scripts/
  generate-layers.js  Builds src/content/docs/layers/*.md from layers.json
  validate-metadata.js  Schema-checks layers.json before every build
.github/workflows/deploy.yml   Auto-deploys to GitHub Pages on push to main
```

## Deploying

1. Create the GitHub repo and push this code to `main`.
2. In the repo's Settings -> Pages, set Source to "GitHub Actions".
3. Push to `main` - the included workflow builds and deploys automatically.

See `CONTRIBUTING.md` for how to add or update a layer.
