import { userService } from '@/services/user-service.js'

export default {
  state: {
    users: null,
    loggedInUser: null,
  },
  getters: {
    users({ users }) {
      return users
    },
    loggedInUser({ loggedInUser }) {
      return loggedInUser
    },
  },
  mutations: {
    login(state, { user }) {
      state.loggedInUser = user
    },
    logout(state) {
      state.loggedInUser = null
    },
  },
  actions: {
    login: async ({ commit }, { credentials }) => {
      try {
        console.log(credentials)
        const user = await userService.login(credentials)
        commit({ type: 'login', user })
      } catch (err) {
        console.log(err)
        throw new Error('Cannot login')
      }
    },
    logout: async ({ commit }) => {
      await userService.logout()
      commit({ type: 'logout' })
    },
  },
}
