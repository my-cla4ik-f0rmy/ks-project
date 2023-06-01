import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/ks-project/',
  plugins: [vue()],
  server: {
    host: true
    
  },  
})


