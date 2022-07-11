<template>
  <section class="toy-app"></section>
  <toy-filter
    @filteredTxt="debounceHandler"
    @filteredStatus="setFilterByStatus"
    @filteredLabel="setFilterByLabel"
  />
  <toy-list :toys="toys" @removeToy="removeToy" />
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
    }
  },
  created() {
    this.debounceHandler = _.debounce(this.setFilterByTxt, 500)
  },
  methods: {
    removeToy(toyId) {
      this.$store.dispatch({ type: 'removeToy', id: toyId })
    },
    filterToys() {
      const filterBy = JSON.parse(JSON.stringify(this.filterBy))
      this.$store.dispatch({ type: 'loadToys', filterBy })
    },
    setFilterByTxt(txt) {
      this.filterBy.txt = txt
      this.filterToys()
    },
    setFilterByStatus(status) {
      this.filterBy.status = status
      this.filterToys()
    },
    setFilterByLabel(labels) {
      this.filterBy.labels = labels
      this.filterToys()
    },
  },
  computed: {
    toys() {
      return this.$store.getters.toys
    },
  },
}
</script>
<style></style>
