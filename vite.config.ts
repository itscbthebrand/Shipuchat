import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Shipuchat/',

  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  // Chatbase Help Center Integration - Proxy Configuration
  server: {
    proxy: {
      '/help': {
        target: 'https://chatbase.co',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/help/, '/zbdAasmqIQ1gvjTeKApdT/help'),
      },
      '/__cb': {
        target: 'https://chatbase.co',
        changeOrigin: true,
      },
      '/api/chat/zbdAasmqIQ1gvjTeKApdT': {
        target: 'https://chatbase.co',
        changeOrigin: true,
      },
    },
  },
})
