import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this is set
    rollupOptions: {
      input: {
        main: 'src/main.jsx', // Adjust this to point to your main entry file
        // Other entry points if necessary
      }
    }
  },
  server: {
    historyApiFallback: true, // For React Router
  }
});
