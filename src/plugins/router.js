import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import ChatNgen from '@/pages/ChatNgen'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'chatngen', component: Home },
    { path: '/:room', name: 'chatngen', component: ChatNgen }
  ]
})
