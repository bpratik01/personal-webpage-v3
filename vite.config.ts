import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/personal-webpage-v3/", // Ensure this matches your repo name
  build: {
    outDir: 'dist'
  }
})