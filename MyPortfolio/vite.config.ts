import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import fs from 'fs';

// Mirror index.html to 404.html so SPA (BrowserRouter) deep links resolve on
// GitHub Pages instead of returning a hard 404.
const spa404Fallback = (): Plugin => ({
  name: 'spa-404-fallback',
  closeBundle() {
    const indexHtml = path.resolve(__dirname, 'dist/index.html');
    if (fs.existsSync(indexHtml)) {
      fs.copyFileSync(indexHtml, path.resolve(__dirname, 'dist/404.html'));
    }
  },
});

// https://vite.dev/config/
export default defineConfig({
  // Served from the custom domain root (leo-j-lai.dev).
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths({
      projects: ['tsconfig.app.json'] // ensure it points to the right TS config
    }),
    spa404Fallback(),
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@css': path.resolve(__dirname, 'src/app/css')
    }
  },
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    watch: {
      // Containers/remote filesystems can miss native fs events.
      // Polling keeps HMR (hot module replacement) reliable when forwarding ports.
      usePolling: true,
      interval: 120
    }
  },
  build: {
    sourcemap: true
  }
});
