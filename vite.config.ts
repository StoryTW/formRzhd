import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import autoprefixer from 'autoprefixer';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr({ include: '**/*.svg' }), react(), tsconfigPaths()],
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
});
