import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// REPO_NAME: replace with your GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: '/',
})
