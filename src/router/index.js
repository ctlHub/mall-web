import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/login.vue'),
  },
]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, form, next) => {
  if (to.name !== 'Login') {
    next({ name: 'Login' })
  }
  next()
})

export default router
