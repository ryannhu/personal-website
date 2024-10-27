import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: {
          main: './index.html',
        },
      },
    },
    plugins: [react()],
    server: {
      headers: {
        'Content-Type': 'application/javascript'
      }
    },
    publicDir: 'public', // Ensures public assets like manifest.json are copied
  };
});
