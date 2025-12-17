// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { fileURLToPath, URL } from 'node:url';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Samo Blatnik',
			defaultLocale: 'root',
			locales: {
				root: {
					label: '🇸🇮 Slo',
					lang: 'sl',
				},
				en: {
					label: '🇬🇧 En',
					lang: 'en',
				},
				hr: {
					label: '🇭🇷 Cro',
					lang: 'hr',
				},
			},

			components: {
				ThemeProvider: './src/components/ThemeProvider.astro',
				LanguageSelect: './src/components/LanguageSelect.astro',
			},
			customCss: ['./src/styles/lightbox.css'],
			head: [
				{
					tag: 'script',
					content: `document.addEventListener('keydown', function(e) { if (e.key === 'Escape') { window.location.hash = ''; } });`
				},
				{
					tag: 'script',
					content: `document.addEventListener('click', function(e) { if (e.target.classList.contains('close')) { window.location.hash = ''; } });`
				}
			],
			sidebar: [
				{
					label: 'Življenjepis',
					translations: {
						en: 'CV',
						hr: 'Biografija',
					},
					items: [
						{
							label: 'O meni',
							translations: {
								en: 'About Me',
								hr: 'Biografija',
							},
							slug: 'cv',
						},
						{
							label: 'Osebne lastnosti',
							translations: {
								en: 'Personal Qualities',
								hr: 'Osobni značaj',
							},
							slug: 'cv/osebne-lastnosti',
						},
						{
							label: 'Tehnične veščine',
							translations: {
								en: 'Technical Skills',
								hr: 'Tehničke vještine',
							},
							slug: 'cv/tehnicne-vescine',
						},
					],
				},
				{
					label: 'Projekti',
					translations: {
						en: 'Projects',
						hr: 'Projekti',
					},
					items: [
						{
							label: 'Pregled projektov',
							translations: {
								en: 'Projects Overview',
								hr: 'Pregled projekata',
							},
							slug: 'projects',
						},
					],
				},
				{
					label: 'Navodila',
					translations: {
						en: 'Guides',
						hr: 'Upute',
					},
					items: [
						{
							label: 'Pregled navodil',
							translations: {
								en: 'Guides Overview',
								hr: 'Pregled uputa',
							},
							slug: 'guides',
						},
						{
							label: 'Kontekstni inženiring',
							translations: {
								en: 'Context Engineering',
								hr: 'Inženjering konteksta',
							},
							slug: 'guides/context_initial',
						},
						{
							label: 'Navodila - predloga, zahteve in smernice',
							translations: {
								en: 'Tutorial Requirements Template',
								hr: 'Upute - predložak, zahtjevi i smjernice',
							},
							slug: 'guides/hetzner-tutorial',
						},
						{
							label: 'Implementacija Astro strani s Traefik in Systemd',
							translations: {
								en: 'Deploying Astro Site with Traefik and Systemd',
								hr: 'Implementacija Astro stranice s Traefik i Systemd',
							},
							slug: 'guides/deployment-tutorial',
						},
					],
				},
			],
		}),
	],
	vite: {
		resolve: {
			alias: {
				'~': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
	},
});