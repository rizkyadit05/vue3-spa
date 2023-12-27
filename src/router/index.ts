import { createRouter, createWebHistory } from 'vue-router'
import landingPageRouter from './landing_page'

let routes: any[] = []

routes = routes.concat(
  landingPageRouter,
  /* place your routes module above this line */
  {
    path: '/:catchAll(.*)',
    name: '404-not-found',
    component: () => import('@/views/errors/404_.vue')
  }
)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach((to, from, next) => {
  // middleware section

  return next()
})

export default router
