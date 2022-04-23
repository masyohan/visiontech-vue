import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login-page',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/public',
      name: 'public-page',
      component: () => import('../views/Public.vue')
    },
    {
      path: '/private',
      name: 'private-page',
      component: () => import('../views/Private.vue')
    },
    {
      path: '/restricted',
      name: 'restricted-page',
      component: () => import('../views/error/Restricted.vue')
    },
    {
      path: '/error-404',
      name: 'notfound-page',
      component: () => import('../views/error/NotFound.vue')
    }
  ]
})

export default router
