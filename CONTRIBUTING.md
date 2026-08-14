# Contributing

## Adding or updating a layer

Edit `src/data/layers.json` directly - don't hand-edit the generated pages in `src/content/docs/layers/`, they're overwritten on every build.

Each entry needs at minimum: `id` (must match `^phl_[a-z0-9_]+$`), `name`, `description`, `category` (one of `boundaries`, `population`, `infrastructure`, `facilities`, `environment`, `elevation`), `geometryType` (`point`, `linestring`, `polygon`, `multipolygon`, `raster`, or `mixed`), `source`, and `sourceUrl`.

Run `npm run validate:metadata` to check the entry against the schema, then `npm run generate:layers` to regenerate the layer pages, then `npm run dev` to preview.

## Marking a layer as hosted

Once a layer's data is uploaded somewhere downloadable, set `downloadStatus: "available"` and `downloadUrl` to the direct link in `src/data/layers.json`.

## Reporting an issue

Open a GitHub issue - data quality problems, broken links, and missing layers are all fair game.
