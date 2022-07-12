<template>
  <section class="toy-filter">
    <input
      v-focus
      v-model="txt"
      @input="setFilterTxt"
      type="text"
      placeholder="Search toy..."
    />

    <select v-model="status" @change="setFilterStatus">
      <option v-for="status in statuses" :value="status.value">
        {{ status.title }}
      </option>
    </select>

    <select v-model="selectedLabels" @change="setFilterLabel" multiple>
      <option v-for="label in labels" :value="label">
        {{ label }}
      </option>
    </select>

    <div class="sort">
      <p>Sort by</p>
      <a @click="setSort('name')">name</a>
      <a @click="setSort('price')">price</a>
      <a @click="setSort('date')">date</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'toy-filter',
  data() {
    return {
      txt: '',
      selectedLabels: [],
      value: [],
      status: '',
      statuses: [
        {
          value: '',
          title: 'All',
        },
        {
          value: 'stock',
          title: 'In stock',
        },
        {
          value: 'missing',
          title: 'Not in stock',
        },
      ],
      sortBy: {},
      desc: -1,
    }
  },
  methods: {
    setFilterTxt() {
      this.$emit('filteredTxt', this.txt)
    },
    setFilterLabel() {
      this.$emit('filteredLabel', this.selectedLabels)
    },
    setFilterStatus() {
      this.$emit('filteredStatus', this.status)
    },
    setSort(by) {
      this.sortBy = {}
      this.desc *= -1
      this.sortBy[by] = this.desc
      const sortBy = JSON.parse(JSON.stringify(this.sortBy))
      this.$emit('sorted', sortBy)
    },
  },
  computed: {
    labels() {
      return this.$store.getters.labels
    },
  },
}
</script>
