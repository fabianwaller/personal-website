import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["./assets/**/*.*"],
  build: {
    emptyOutDir: true,
    outDir: "dist/client",
    /*     rollupOptions: {
          input: {
            index: resolve(__dirname, 'index.html'),
          }
        } */
  },
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    },
  }
})
