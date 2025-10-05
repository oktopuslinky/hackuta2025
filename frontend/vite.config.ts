import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Tailwind is handled by PostCSS, not here
export default defineConfig({
  plugins: [react()],
})
