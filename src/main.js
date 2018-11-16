import Vue from 'vue'
import './plugins/vuetify'
import router from './plugins/router'
import store from './plugins/state'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
