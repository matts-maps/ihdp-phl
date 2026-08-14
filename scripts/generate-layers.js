#!/usr/bin/env node
// Auto-generates one Starlight docs page per layer from src/data/layers.json.
// Run via `npm run generate:layers` (also runs automatically before `npm run build`).
//
// Do not hand-edit files in src/content/docs/layers/ - they're regenerated from
// src/data/layers.json every build and any manual edits will be overwritten.

import fs from 'node:fs';
import path from 'node:path';

const LAYERS_JSON = 'src/data/layers.json';
const OUTPUT_DIR = 'src/content/docs/layers';

if (!fs.existsSync(OUTPUT_DIR)) {
	fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const { layers } = JSON.parse(fs.readFileSync(LAYERS_JSON, 'utf-8'));

// Clear out previously generated pages so removed/renamed layers don't leave stale pages behind.
for (const file of fs.readdirSync(OUTPUT_DIR)) {
	if (file.endsWith('.md')) fs.unlinkSync(path.join(OUTPUT_DIR, file));
}

function escapeYaml(str) {
	return String(str).replace(/"/g, '\\"');
}

function attributesTable(attributes) {
	if (!attributes || attributes.length === 0) return '_No attribute schema recorded yet._';
	const rows = attributes
		.map((a) => `| \`${a.name}\` | ${a.type} | ${a.description || ''} |`)
		.join('\n');
	return `| Field | Type | Description |\n|---|---|---|\n${rows}`;
}

function useCasesList(useCases) {
	if (!useCases || useCases.length === 0) return '_No use cases recorded yet._';
	return useCases.map((uc) => `- ${uc}`).join('\n');
}

function downloadSection(layer) {
	if (layer.downloadStatus === 'available' && layer.downloadUrl) {
		return `This layer is hosted for direct download.\n\n[Download ${layer.name}](${layer.downloadUrl})\n\nFormats available: ${layer.formats?.join(', ') || 'n/a'}.`;
	}
	return `This layer is not yet hosted for direct download from this site. In the meantime, get it from the original source:\n\n[Go to source: ${layer.source}](${layer.sourceUrl})\n\nFormats expected: ${layer.formats?.join(', ') || 'n/a'}.`;
}

for (const layer of layers) {
	const frontmatter = [
		'---',
		`title: "${escapeYaml(layer.name)}"`,
		`description: "${escapeYaml(layer.description)}"`,
		'---',
	].join('\n');

	const body = `
## Overview

${layer.description}

| | |
|---|---|
| **Category** | ${layer.category} |
| **Geometry type** | ${layer.geometryType} |
| **Coordinate system** | ${layer.crs} |
| **Source** | ${layer.source} |
| **License** | ${layer.license} |
| **Attribution** | ${layer.attribution || 'n/a'} |
| **Last updated** | ${layer.lastUpdated} |
| **Feature count** | ${layer.featureCount ?? 'n/a'} |
| **File size** | ${layer.fileSize ?? 'n/a'} |
${layer.resolution ? `| **Resolution** | ${layer.resolution} |\n` : ''}
## Attributes

${attributesTable(layer.attributes)}

## Use cases

${useCasesList(layer.use_cases)}

## Download

${downloadSection(layer)}

## Notes

${layer.notes || '_None recorded._'}

## Contact

Questions about this layer: [${layer.contact}](mailto:${layer.contact})
`;

	const filename = path.join(OUTPUT_DIR, `${layer.id}.md`);
	fs.writeFileSync(filename, `${frontmatter}\n${body}\n`);
	console.log(`Generated: ${filename}`);
}

console.log(`\nGenerated ${layers.length} layer pages in ${OUTPUT_DIR}/`);
