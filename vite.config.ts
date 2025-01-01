import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    cssCodeSplit: false,
    cssTarget: 'chrome61',
    target: 'esnext',
    rollupOptions: {
      external: ['vue', 'primevue', 'chart.js'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      '@compts': path.resolve(__dirname, './src/components'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@pages': path.resolve(__dirname, './src/pages')
    }
  },
  base: '/'
});
