import { createStore } from 'vuex'
import toyStore from './modules/toy-module.js'
import userStore from './modules/user-module.js'

// create a store instance
const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    toyStore,
    userStore,
  },
})

export default store
