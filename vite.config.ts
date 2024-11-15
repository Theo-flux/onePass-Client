import { defineConfig } from 'vite';
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
  }
});
