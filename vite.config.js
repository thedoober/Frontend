// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Allows importing with '@/path-to-file'
    },
  },
  build: {
    outDir: 'dist', // Default output directory
    emptyOutDir: true, // Clears the output directory before building
  },
  server: {
    port: 3000, // Set the local dev server port
    open: true, // Automatically open in the browser
  },
});

