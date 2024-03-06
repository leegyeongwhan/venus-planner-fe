import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@domain': path.resolve(__dirname, './src/domain'),
      '@constant': path.resolve(__dirname, './src/constant'),
      '@utill': path.resolve(__dirname, './src/utill'),
    },
  },
})
