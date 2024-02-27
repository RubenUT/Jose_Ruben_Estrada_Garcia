import { createRouter, createWebHistory } from 'vue-router'
import DataList from '@/components/DataList.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DataList',
      component: DataList
    }
  ]
})

export default router
