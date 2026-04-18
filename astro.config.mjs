import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://blog.aahmed.ca',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark:  'github-dark-dimmed',
      },
      defaultColor: false,
      wrap: false,
    },
  },
});
