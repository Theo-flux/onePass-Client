import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
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
    alias: [
      { find: '~', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      {
        find: '@compts',
        replacement: fileURLToPath(new URL('./src/components', import.meta.url))
      },
      { find: '@layouts', replacement: fileURLToPath(new URL('./src/layouts', import.meta.url)) },
      { find: '@pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) }
    ]
  }
});
