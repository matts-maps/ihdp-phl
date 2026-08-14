---
title: FAQ
description: Common questions about the data package.
---

### Why isn't the data downloadable directly from GitHub?

Several layers run from tens of megabytes to several gigabytes (SRTM 30m alone is roughly 3.2 GB), which doesn't suit a Git repository. This site hosts metadata and documentation; the data itself is hosted externally and linked from each layer's page.

### Why do some layers only link to the original source?

Layers are uploaded and hosted incrementally. Until a layer has been uploaded, its page links to where the data comes from originally (HDX, Geofabrik, or USGS) so you're not left without an option.

### What licence applies?

It depends on the layer - check its page. OpenStreetMap/Geofabrik layers are ODbL 1.0, HDX layers are typically CC BY 4.0, and SRTM elevation data is public domain. None of these are blanket-applied across the whole package.

### How current is the data?

Each layer page lists a **Last updated** date reflecting the source's own update cadence. OSM/Geofabrik layers update most frequently (Geofabrik publishes daily extracts); administrative boundaries and census data update far less often.

### Can I request a new layer or flag a problem?

Yes - open an issue on the [GitHub repository](https://github.com/YOUR_GITHUB_USERNAME/humanitarian-data-package-phl/issues), or use the contact listed on the relevant layer's page.
