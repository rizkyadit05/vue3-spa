import { createRouter, createWebHistory } from 'vue-router'
import landingPageRouter from './landing_page'

let routes: any[] = []

routes = routes.concat(
  landingPageRouter,
  /* place your routes module above this line */
  // {
  //   path: '*',
  //   name: '404-not-found',
  //   component: () => import('404_route')
  // }
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
