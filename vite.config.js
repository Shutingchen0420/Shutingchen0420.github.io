import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  base: '/', // 使用者站台固定用根目錄
  plugins: [vue(), vuetify({ autoImport: true })],
})
