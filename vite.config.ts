import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update `base` to match your GitHub repo name if deploying to
// https://<username>.github.io/<repo-name>/
export default defineConfig({
  plugins: [react()],
  base: './',
})
