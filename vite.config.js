import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ghPages } from "vite-plugin-gh-pages";

export default defineConfig({
  base: "/shri2025-task/",
  plugins: [react(), ghPages()],
  publicDir: 'public',
  build: {
    assetsInlineLimit: 0
  }
})