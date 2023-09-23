import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  plugins: [vue(), EnvironmentPlugin('all')],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://xkcd.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  base: '/masiv-test-solution/',
  build: {
    outDir: 'dist'
  }
});
