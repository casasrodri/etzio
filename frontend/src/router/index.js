import { createRouter, createWebHistory } from 'vue-router'

import AppView from '../views/AppView.vue'

import UserHome from '../components/UserHome.vue'
import CiclosList from '../components/CiclosList.vue'
import Vacio from '../components/Vacio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/app'
    },
    {
      path: '/app',
      name: 'app',
      component: AppView,
      children: [
        {
          path: '',
          name: 'userhome',
          component: UserHome
        },
        {
          path: 'ciclos',
          name: 'ciclos',
          component: CiclosList,
        },
        {
          path: 'otraURLaunVacia',
          name: 'pendiente',
          component: Vacio,
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Vacio
    }
  ]
})

export default router
