import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    base: isProd ? '/Portfolio/' : '/',
    plugins: [
      react(),
      tsconfigPaths({
        projects: ['tsconfig.app.json'] // ensure it points to the right TS config
      })
    ],
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@css': path.resolve(__dirname, 'src/app/css')
      }
    },
    build: {
      sourcemap: true
    }
  };
});