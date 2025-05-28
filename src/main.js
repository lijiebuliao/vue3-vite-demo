import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 创建Vue应用实例
const app = createApp(App)

// 使用Pinia状态管理
app.use(store)

// 使用路由
app.use(router)

// 挂载应用
app.mount('#app')