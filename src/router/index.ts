import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Dashboard
    }
  ]
})

export default router
