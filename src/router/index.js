import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import toyApp from '../views/toy-app.vue'
import toyDetails from '../views/toy-details.vue'
import toyEdit from '../views/toy-edit.vue'
import dashboard from '../views/dashboard.vue'
import login from '../views/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/toy',
      name: 'toy-app',
      component: toyApp,
    },
    {
      path: '/toy/:toyId',
      name: 'toy-details',
      component: toyDetails,
    },
    {
      path: '/toy/edit/:toyId?',
      name: 'toy-edit',
      component: toyEdit,
    },
    {
      path: '/toy/dashboard',
      name: 'dashboard',
      component: dashboard,
    },
  ],
})

export default router
