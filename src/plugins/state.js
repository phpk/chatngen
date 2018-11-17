import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const mutations = {
  merge(state, mergeObj) {
    Object.keys(mergeObj).forEach(
      o =>
        mergeObj[o].constructor === String
          ? (state[o] = mergeObj[o])
          : Object.keys(mergeObj[o]).forEach(
              k => (state[o][k] = mergeObj[o][k])
            )
    )
  }
}

const store = new Vuex.Store({
  state: {
    id: {
      nickname: null
    }
  },
  mutations,
  plugins: [
    createPersistedState({
      key: 'vim-network-chatngen',
      paths: ['id']
    })
  ]
})

export default store
