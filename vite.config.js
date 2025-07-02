import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ghPages } from "vite-plugin-gh-pages";

export default defineConfig({
  base: "/SHRI-2025/",
  plugins: [react(), ghPages()],
  publicDir: 'public',
  build: {
    assetsInlineLimit: 0
  }
})