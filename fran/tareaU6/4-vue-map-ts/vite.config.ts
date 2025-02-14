import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ['leaflet']
  },
  resolve: {
    alias: {
      // Forzamos a Vite a utilizar la versión ESM de Leaflet en lugar de leaflet-src.js,
      // que es la causa del error "does not provide an export named 'default'".
      'leaflet': 'leaflet/dist/leaflet.js'
    }
  }
})
