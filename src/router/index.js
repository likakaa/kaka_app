import Vue from 'vue'
import VueRouter from 'vue-router'
import My from '../views/My.vue'
import Wallpaper from '../views/Wallpaper.vue'
import Emoticons from '../views/Emoticons.vue'
import Avatar from '../views/Avatar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'my',
    component: My
  },
  {
    path: '/wallpaper',
    name: 'wallpaper',
    component: Wallpaper
  },
  {
    path: '/emoticons',
    name: 'emoticons',
    component: Emoticons
  },
  {
    path: '/avatar',
    name: 'avatar',
    component: Avatar
  },
/*   {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  } */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
