import { createRouter, createWebHistory } from 'vue-router';
import Registro from '../views/Registro.vue'
import Login from '../views/Login.vue'
import Tabla from '@/views/Tabla.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Registro',
      name: 'Registro',
      component: Registro
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Tabla',
      name: 'Tabla',
      component: Tabla
    }
  ]
})

export default router;