<template>
  <section class="toy-filter flex items-center">
    <el-input
      v-focus
      v-model="txt"
      @input="setFilterTxt"
      style="width: 250px"
      placeholder="Search toy..."
      :prefix-icon="search"
    />

    <el-select
      v-model="status"
      @change="setFilterStatus"
      class="m-2"
      placeholder="All"
    >
      <el-option
        v-for="status in statuses"
        :key="status.title"
        :label="status.title"
        :value="status.value"
      />
    </el-select>

    <el-select
      v-model="selectedLabels"
      @change="setFilterLabel"
      multiple
      placeholder="Pick types"
      style="width: 240px"
    >
      <el-option
        v-for="label in labels"
        :key="label.title"
        :label="label.title"
        :value="label.title"
        :style="{ backgroundColor: label.color, color: '#ffffff' }"
      />
    </el-select>

    <div class="sort flex justify-between items-center m-2">
      <p>Sort:</p>
      <a class="btn-dark-small m-1" @click="setSort('name')">Name</a>
      <a class="btn-dark-small m-1" @click="setSort('price')">Price</a>
      <a class="btn-dark-small m-1" @click="setSort('date')">Date</a>
      <span>{{ desc === -1 ? '↓' : '↑' }}</span>
    </div>
  </section>
</template>

<script>
import { Search } from '@element-plus/icons-vue'

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
    search() {
      return Search
    },
  },
}
</script>
