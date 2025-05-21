import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server:{
    proxy: {
     '/api': {
      target: 'https://expert-capybara-659jv4974qp3469w-3000.app.github.dev',
      changeOrigin: true,
    }
  }
}
})

