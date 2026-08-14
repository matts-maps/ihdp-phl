---
title: "Administrative Boundaries - All Levels (National to Barangay)"
description: "Hierarchical administrative divisions of the Philippines from national (1), regional (17), provincial (81), municipal/city (1,634), to barangay (42,028) levels. Source: HDX, conflated from multiple official government sources."
---

## Overview

Hierarchical administrative divisions of the Philippines from national (1), regional (17), provincial (81), municipal/city (1,634), to barangay (42,028) levels. Source: HDX, conflated from multiple official government sources.

| | |
|---|---|
| **Category** | boundaries |
| **Geometry type** | polygon |
| **Coordinate system** | EPSG:4326 |
| **Source** | HDX (Humanitarian Data Exchange) |
| **License** | CC BY 4.0 |
| **Attribution** | HDX / GeoSpatial Bureau of Statistics (Philippines) |
| **Last updated** | 2024-11-01 |
| **Feature count** | 44761 |
| **File size** | ~85 MB (GeoPackage) |

## Attributes

| Field | Type | Description |
|---|---|---|
| `adm0_name` | string | Country name (Philippines) |
| `adm1_name` | string | Region name |
| `adm1_pcode` | string | Region PCODE |
| `adm2_name` | string | Province name |
| `adm2_pcode` | string | Province PCODE |
| `adm3_name` | string | Municipality/City name |
| `adm3_pcode` | string | Municipality PCODE |
| `adm4_name` | string | Barangay name |
| `adm4_pcode` | string | Barangay PCODE |

## Use cases

- Administrative reference for disaster response
- Base layer for aggregating data by municipality/barangay
- Coverage area definition for other layers

## Download

This layer is not yet hosted for direct download from this site. In the meantime, get it from the original source:

[Go to source: HDX (Humanitarian Data Exchange)](https://data.humdata.org/dataset/philippines-administrative-divisions-geoboundaries)

Formats expected: geopackage, shapefile, geojson.

## Notes

Multi-level dataset - filter by adm_level (0-4) for different administrative levels. PCODEs enable integration with government databases.

## Contact

Questions about this layer: [data-admin@example.org](mailto:data-admin@example.org)

