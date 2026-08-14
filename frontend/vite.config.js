import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://ustax-nln5.vercel.app',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});