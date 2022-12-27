import { fileURLToPath, URL } from 'url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import analyzer from 'rollup-plugin-analyzer'
const path = require('path')


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: fileURLToPath(new URL('./src', import.meta.url)),
      '@assets' : path.resolve(__dirname, './src/assets')

    },
  },
  plugins: [
    vue(),
    analyzer({ summaryOnly: true }),
  ],
})
