import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-index-to-404',
      closeBundle() {
        // Copy index.html to 404.html for GitHub Pages SPA routing
        const outDir = resolve(__dirname, 'dist')
        copyFileSync(
          resolve(outDir, 'index.html'),
          resolve(outDir, '404.html')
        )
        console.log('✓ Copied index.html to 404.html for GitHub Pages')
      }
    }
  ],
  base: '/Imsie/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
