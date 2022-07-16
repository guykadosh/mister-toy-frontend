<template>
  <section v-if="user && toys" class="toy-app">
    <div class="user-info">
      <p>Hello {{ user.fullname }}</p>
      <button @click="logout" class="btn-dark-small">logout</button>
    </div>
    <toy-filter
      @filteredTxt="debounceHandler"
      @filteredStatus="setFilterByStatus"
      @filteredLabel="setFilterByLabel"
      @sorted="setSortBy"
    />
    <router-link class="btn-dark" to="/toy/edit">Add new toy</router-link>
    <toy-list :toys="toys" @removeToy="removeToy" />
  </section>
</template>
<script>
import _ from 'lodash'
import toyList from '../components/toy-list.vue'
import toyFilter from '../components/toy-filter.vue'

export default {
  components: {
    toyList,
    toyFilter,
  },
  data() {
    return {
      filterBy: {
        txt: '',
        status: '',
        labels: null,
      },
      sortBy: {},
    }
  },
  created() {
    if (!this.user) this.$router.push('/login')
    this.debounceHandler = _.debounce(this.setFilterByTxt, 500)
  },
  methods: {
    removeToy(toyId) {
      this.$store.dispatch({ type: 'removeToy', id: toyId })
    },
    loadToys() {
      const filterBy = JSON.parse(JSON.stringify(this.filterBy))
      const sortBy = JSON.parse(JSON.stringify(this.sortBy))
      this.$store.dispatch({ type: 'loadToys', filterBy, sortBy })
    },
    setFilterByTxt(txt) {
      this.filterBy.txt = txt
      this.loadToys()
    },
    setFilterByStatus(status) {
      this.filterBy.status = status
      this.loadToys()
    },
    setFilterByLabel(labels) {
      this.filterBy.labels = labels
      this.loadToys()
    },
    setSortBy(sortBy) {
      this.sortBy = sortBy
      this.loadToys()
    },
    logout: async function () {
      await this.$store.dispatch({ type: 'logout' })
      this.$router.push('/login')
    },
  },
  computed: {
    toys() {
      return this.$store.getters.toys
    },
    user() {
      return this.$store.getters.loggedInUser
    },
  },
}
</script>
<style></style>
