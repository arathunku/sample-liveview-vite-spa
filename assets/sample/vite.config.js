import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// https://vitejs.dev/guide/backend-integration
export default defineConfig({
  plugins: [react()],
  server: {
    origin: 'http://localhost:5173',
  },
  build: {
    manifest: true
  },
})
