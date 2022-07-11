import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import toyApp from '../views/toy-app.vue'

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
      path: '/toy',
      name: 'toy-app',
      component: toyApp,
    },
  ],
})

export default router
