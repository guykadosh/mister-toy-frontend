<template>
  <section class="toy-filter">
    <input
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
  },
  computed: {
    labels() {
      return this.$store.getters.labels
    },
  },
}
</script>
