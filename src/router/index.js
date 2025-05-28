import { createRouter, createWebHistory } from 'vue-router'
import layout from '../layout/index.vue'
export const routes = [
  {
    path: '/login',
    name: '登录',
    component: () => import('../views/login.vue')
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/',
    name: '首页',
    component: layout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: '/about',
        name: 'about',
        // 路由懒加载
        component: () => import('../views/AboutView.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router