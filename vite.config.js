import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [React()],
  esbuild: {
    jsx: 'automatic'
  }
})
