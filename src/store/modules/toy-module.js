import { toyService } from '@/services/toy-service.js'

export default {
  state: {
    toys: null,
    labels: null,
  },
  getters: {
    toys({ toys }) {
      return toys
    },
    labels({ labels }) {
      return labels
    },
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys
    },
    setLabels(state, { labels }) {
      state.labels = labels
    },
    removeToy(state, { id }) {
      const idx = state.toys.findIndex(toy => toy._id === id)
      state.toys.splice(idx, 1)
    },
    saveToy(state, { toy }) {
      console.log(toy)
      const idx = state.toys.findIndex(currToy => currToy._id === toy._id)
      if (idx !== -1) state.toys.splice(idx, 1, toy)
      else state.toys.push(toy)
    },
  },
  actions: {
    loadToys: async ({ commit }, { filterBy, sortBy }) => {
      try {
        if (!filterBy) filterBy = { txt: '', status: '', labels: null }
        if (!sortBy) sortBy = {}

        const labels = toyService.getLabels()
        commit({ type: 'setLabels', labels })

        const toys = await toyService.query(filterBy, sortBy)
        commit({ type: 'setToys', toys })
      } catch (err) {
        console.log('Could not get toys')
        // TODO: throw error to display user
      }
    },
    removeToy: async ({ commit }, { id }) => {
      try {
        const res = await toyService.remove(id)
        commit({ type: 'removeToy', id })
        return res
      } catch (err) {
        console.log('Could Not remove toy')
        // TODO: throw error to display user
      }
    },
    saveToy: async ({ commit }, { toy }) => {
      try {
        const newToy = await toyService.save(toy)
        commit({ type: 'saveToy', toy: newToy })
      } catch (err) {
        console.log('Could Not save toy')
        // TODO: throw error to display user
      }
    },
  },
}
