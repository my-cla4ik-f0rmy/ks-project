import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: 'https://github.com/my-cla4ik-f0rmy/ks-project',
  plugins: [vue()],
  server: {
    host: true
    
  },  
})


