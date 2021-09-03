import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const Home = () => import('@/views/home/Home')
const Local = () => import('@/views/local/Local')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/local',
    component: Local
  }
]

const router = new VueRouter({
  routes
})

export default router
