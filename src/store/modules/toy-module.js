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
      const idx = state.toys.findIndex(currToy => currToy._id === toy._id)
      if (idx !== -1) state.toys.splice(idx, 1, toy)
      else state.toys.push(toy)
    },
  },
  actions: {
    loadToys({ commit }, { filterBy }) {
      if (!filterBy) filterBy = { txt: '', status: '', labels: null }
      console.log(filterBy)
      toyService.query(filterBy).then(toys => {
        commit({ type: 'setToys', toys })
        const labels = toyService.getLabels()
        commit({ type: 'setLabels', labels })
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
