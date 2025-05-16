import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // GitHub Pages 部署基础路径配置
  base: '/vue3-vite-demo/',
  server: {
    // 开发服务器配置
    port: 3000,
    open: true, // 自动打开浏览器
  },
  build: {
    // 生产环境打包配置
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})