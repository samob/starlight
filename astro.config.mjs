// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { fileURLToPath, URL } from 'node:url';


// https://astro.build/config
export default defineConfig({
    site: 'https://samob.netlify.app/',
    integrations: [starlight({
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
            ThemeSelect: './src/components/ThemeSelect.astro',
            LanguageSelect: './src/components/LanguageSelect.astro',
        },
        customCss: [
            './src/styles/clickable-cards.css',
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
                        slug: 'cv/personal-qualities',
                    },
                    {
                        label: 'Tehnične veščine',
                        translations: {
                            en: 'Technical Skills',
                            hr: 'Tehničke vještine',
                        },
                        slug: 'cv/tech-skills',
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
                    {
                        label: 'Clawdie ISO',
                        translations: {
                            en: 'Clawdie ISO',
                            hr: 'Clawdie ISO',
                        },
                        slug: 'projects/clawdie-iso',
                    },
                    {
                        label: 'Colibri',
                        translations: {
                            en: 'Colibri',
                            hr: 'Colibri',
                        },
                        slug: 'projects/colibri',
                    },
                    {
                        label: 'Herdr',
                        translations: {
                            en: 'Herdr',
                            hr: 'Herdr',
                        },
                        slug: 'projects/herdr',
                    },
                    {
                        label: 'Zot Agent Harness',
                        translations: {
                            en: 'Zot Agent Harness',
                            hr: 'Zot Agent Harness',
                        },
                        slug: 'projects/zot',
                    },
                    {
                        label: 'Pi Harness',
                        translations: {
                            en: 'Pi Harness',
                            hr: 'Pi Harness',
                        },
                        slug: 'projects/pi',
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
                        label: 'Kako pišem navodila',
                        translations: {
                            en: 'How I Write Tutorials',
                            hr: 'Kako pišem upute',
                        },
                        slug: 'guides/tutorial-style-guide',
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
                        label: 'Docker Desktop in Debian 13',
                        translations: {
                            en: 'Docker Desktop on Debian 13',
                            hr: 'Docker Desktop i Debian 13',
                        },
                        slug: 'guides/docker-debian',
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
            {
                label: 'Wiki',
                translations: {
                    en: 'Wiki',
                    hr: 'Wiki',
                },
                items: [
                    {
                        label: 'Colibri Wiki',
                        translations: {
                            en: 'Colibri Wiki',
                            hr: 'Colibri Wiki',
                        },
                        slug: 'wiki',
                    },
                    {
                        label: 'Google OKF (Open Knowledge Format)',
                        translations: {
                            en: 'Google OKF (Open Knowledge Format)',
                            hr: 'Google OKF (Open Knowledge Format)',
                        },
                        slug: 'wiki/okf',
                    },
                    {
                        label: 'Abbreviations Index',
                        translations: {
                            en: 'Abbreviations Index',
                            hr: 'Abbreviations Index',
                        },
                        slug: 'wiki/abbreviations',
                    },
                ],
            },
        ],
	})],
    vite: {
        resolve: {
            alias: {
                '~': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
    },
});
