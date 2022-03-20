import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["./assets/**/*.*"],
  build: {
    emptyOutDir: true,
    outDir: "dist",
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog.html')
      }
    }
  },
  server: {
    host: true
  }
})
