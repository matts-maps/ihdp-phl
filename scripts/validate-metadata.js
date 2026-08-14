#!/usr/bin/env node
// Validates src/data/layers.json against a schema before every build, so a
// malformed entry fails the build loudly instead of producing a broken layer page.

import fs from 'node:fs';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const LAYERS_JSON = 'src/data/layers.json';

const schema = {
	type: 'object',
	required: ['metadata', 'layers'],
	properties: {
		metadata: { type: 'object' },
		layers: {
			type: 'array',
			minItems: 1,
			items: {
				type: 'object',
				required: [
					'id',
					'name',
					'description',
					'category',
					'geometryType',
					'source',
					'sourceUrl',
				],
				properties: {
					id: { type: 'string', pattern: '^phl_[a-z0-9_]+$' },
					name: { type: 'string', minLength: 3 },
					description: { type: 'string', minLength: 10 },
					category: {
						type: 'string',
						enum: ['boundaries', 'population', 'infrastructure', 'facilities', 'environment', 'elevation'],
					},
					geometryType: {
						type: 'string',
						enum: ['point', 'linestring', 'polygon', 'multipolygon', 'raster', 'mixed'],
					},
					source: { type: 'string' },
					sourceUrl: { type: 'string', format: 'uri' },
					license: { type: 'string' },
					downloadUrl: { type: ['string', 'null'] },
					downloadStatus: { type: 'string', enum: ['pending', 'available'] },
					formats: { type: 'array', items: { type: 'string' } },
				},
			},
		},
	},
};

const ajv = new Ajv({ allowUnionTypes: true });
addFormats(ajv);
const data = JSON.parse(fs.readFileSync(LAYERS_JSON, 'utf-8'));
const valid = ajv.validate(schema, data);

if (!valid) {
	console.error('Validation errors in src/data/layers.json:');
	console.error(ajv.errorsText(ajv.errors, { separator: '\n' }));
	process.exit(1);
}

// Cross-check declared count against actual array length - catches drift like
// a metadata.totalLayers that no longer matches the layers actually defined.
if (data.metadata.totalLayers !== data.layers.length) {
	console.error(
		`metadata.totalLayers (${data.metadata.totalLayers}) does not match layers.length (${data.layers.length})`,
	);
	process.exit(1);
}

console.log(`Validated ${data.layers.length} layers in ${LAYERS_JSON}`);
