import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/FIP-FrontEnd-Week-7/", // Repo name to fix vite absolute path issue
})
