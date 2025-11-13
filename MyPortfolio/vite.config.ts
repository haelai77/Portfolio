import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    base: isProd ? '/Portfolio/' : '/',
    plugins: [react(), tsconfigPaths()],
    resolve: {
      alias: {
        '@css': path.resolve(__dirname, 'src/app/css') // <-- This makes CSS imports work
      }
    },
    build: {
      sourcemap: true
    }
  };
});