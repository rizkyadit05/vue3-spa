import HomeView from '../views/HomeView.vue'
const MyPlayground = () => import('@/views/pages/MyPlayground.vue')

const landingPageRouter = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/playground',
    name: 'MyPlayground',
    component: MyPlayground
  }
]

export default landingPageRouter
