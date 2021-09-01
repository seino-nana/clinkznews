import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const Home = () => import('@/views/home/Home')
const Video = () => import('@/views/video/Video')

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
    path: '/video',
    component: Video
  }
]

const router = new VueRouter({
  routes
})

export default router
