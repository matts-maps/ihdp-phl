---
title: Changelog
description: Version history for the data package and this site.
---

### 14 August 2026

Site scaffolded from the project's planning documents (Astro + Starlight, MapAction-branded): 22 layers loaded into `src/data/layers.json` from `layers-inventory.json`, layer pages auto-generated, homepage layer grid, and core docs pages (overview, getting started, technical specs, FAQ) written.

No layer data has been uploaded to hosting yet - every layer page currently links to its original source rather than a direct download. See [Getting started](/guides/getting-started/) for how that's tracked.

Note: `layers-inventory.json`'s own metadata claimed 24 layers, but only 22 are actually defined in the file (18 OSM/Geofabrik layers plus admin boundaries, population, and two SRTM resolutions, not the 20 OSM layers the planning docs describe). This site reflects the 22 that actually exist; worth checking with the original source list if the missing two were meant to be included.
