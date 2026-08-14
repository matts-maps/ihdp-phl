---
title: Technical specs
description: Coordinate systems, categories, and validation checks applied across layers.
---

## Coordinate system

All layers are published in **EPSG:4326 (WGS 84)** unless a layer's own page states otherwise.

## Categories

| Category | Covers |
|---|---|
| Boundaries | National to barangay administrative divisions |
| Population | Census and demographic statistics |
| Infrastructure | Roads, power, water supply, transport, railways |
| Facilities | Health, education, finance, leisure, POIs |
| Environment | Land use, natural areas, waterways, agriculture, coastline |
| Elevation | SRTM digital elevation models |

## Geometry types

`point`, `linestring`, `polygon`, `multipolygon`, `raster`, or `mixed` (a layer combining more than one geometry type). See each layer's page for its specific type.

## Validation

Layer metadata is validated on every build against a schema (required fields, category and geometry enums, valid source URLs) via `scripts/validate-metadata.js`. Layer detail pages are then generated automatically from `src/data/layers.json` via `scripts/generate-layers.js` - both run as part of `npm run build`, so a malformed entry fails the build rather than shipping a broken page.

## Data quality

Coverage, attribute completeness, and mapping density vary by source and region. Community-sourced OSM/Geofabrik layers are generally strongest in urban areas (Metro Manila especially) and sparser in remote regions. Check each layer's **Notes** section for source-specific caveats before relying on it for critical decisions.
