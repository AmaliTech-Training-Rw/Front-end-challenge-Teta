// <reference types="vitest"/>
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['jquery', 'popper.js']
  },
  define:{
    VITE_PROVIDE_JQUERY: true,
  },
  // test: {
  //   globals: true,
  //   environment: 'happy-dom',
  //   setupFiles: "./tests/setup.js"
  // }
})
