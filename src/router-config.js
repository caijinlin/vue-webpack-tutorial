import Home from './page/home.vue'
import Welcome from './page/welcome.vue'

const routes = [
  {
      path: '/',
      component: Home
  },
  {
    path: '/welcome',
    component: Welcome,
  }
]

export default routes
