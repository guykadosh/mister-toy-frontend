import { toyService } from '@/services/toy-service.js'

export default {
  state: {
    toys: null,
  },
  getters: {
    toys({ toys }) {
      console.log(toys)
      return toys
    },
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys
    },
    removeToy(state, { id }) {
      const idx = state.toys.findIndex(toy => toy.id === id)
      state.toys.splice(idx, 1)
    },
    saveToy(state, { toy }) {
      const idx = state.toys.findIndex(currToy => currToy.id === toy.id)
      if (idx !== -1) state.toys.splice(idx, 1, toy)
      else state.toys.push(toy)
    },
  },
  actions: {
    loadToys({ commit }) {
      toyService.query().then(toys => {
        commit({ type: 'setToys', toys })
      })
    },
    removeToy({ commit }, { id }) {
      toyService.remove(id).then(() => {
        commit({ type: 'removeToy', id })
      })
    },
    saveToy({ commit }, { toy }) {
      toyService.save(toy).then(toy => {
        commit({ type: 'saveToy', toy })
      })
    },
  },
}
