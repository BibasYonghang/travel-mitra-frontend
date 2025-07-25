import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),          // Add this for React support and new JSX transform
    tailwindcss(),    // Keep your Tailwind plugin
  ],
})
