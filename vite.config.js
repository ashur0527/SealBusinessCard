import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'relative-public-assets',
      generateBundle(_options, bundle) {
        for (const output of Object.values(bundle)) {
          if (output.type === 'chunk') {
            output.code = output.code.replaceAll('/images/', './images/');
          }
        }
      },
    },
  ],
  // Relative asset URLs work both on a custom domain and under
  // https://<user>.github.io/<repository>/.
  base: './',
});
