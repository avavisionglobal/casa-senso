import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.casa-senso.ch',
  trailingSlash: 'never',
  build: { format: 'file' },
});
