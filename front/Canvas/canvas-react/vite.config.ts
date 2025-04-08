import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    rollupOptions:{
      input: path.resolve(__dirname, "./packages/main.tsx"),
    }
  },
  resolve: {
    alias:
      {

        '@canvas/utils' : path.resolve(__dirname, "./packages/_utils/src/index.ts"),
      }

  },
})

