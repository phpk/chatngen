import Vue from 'vue'
import Router from 'vue-router'
import ChatNgen from '@/pages/ChatNgen'

Vue.use(Router)

export default new Router({
  routes: [{ path: '/:room', name: 'chatngen', component: ChatNgen }]
})
