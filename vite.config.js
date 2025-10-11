import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',  // Explicitly bind to IPv4 loopback to match redirect URI
    port: 5173,
    // No 'https' config needed—HTTP is allowed for loopback
  },
});