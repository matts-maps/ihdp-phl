// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// TODO before first deploy: replace YOUR_GITHUB_USERNAME below (site + base + social link)
// with your actual GitHub username/org once the repo exists.
export default defineConfig({
	site: 'https://matts-maps.github.io',
	base: '/ihdp-phl',

	integrations: [
		starlight({
			title: 'The Integrated Humanitarian Data Package for the Philippines',
			description:
				'A public catalogue of GIS layers for disaster response, health, development, and climate resilience work in the Philippines.',
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: false,
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/matts-maps/ihdp-phl',
				},
			],
			customCss: ['./src/styles/mapaction-brand.css'],
			sidebar: [
				{
					label: 'Docs',
					items: [
						{ label: 'Overview', slug: 'guides/overview' },
						{ label: 'Getting started', slug: 'guides/getting-started' },
						{ label: 'Technical specs', slug: 'guides/technical-specs' },
						{ label: 'Changelog', slug: 'guides/changelog' },
						{ label: 'FAQ', slug: 'guides/faq' },
					],
				},
				{
					label: 'Layers',
					items: [{ autogenerate: { directory: 'layers' } }],
				},
			],
			defaultLocale: 'en',
		}),
	],

	vite: {
		plugins: [tailwindcss()],
	},
});
