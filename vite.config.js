import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Default base is '/' (good for Vercel). Override via CLI/env for GitHub Pages.
  base: '/',
})
