<template>
  <section v-if="labels" class="dashboard">
    <h3>Average Price by type</h3>
    <chart :data="pricesData" />
    <h3>Stock by type</h3>
    <chart :data="stockData" />
  </section>
</template>

<script>
import chart from '../components/chart.vue'
export default {
  components: {
    chart,
  },
  created() {
    this.$store.dispatch({ type: 'loadToys' })
  },
  computed: {
    toys() {
      return this.$store.getters.toys
    },
    labels() {
      return this.$store.getters.labels
    },
    pricesData() {
      console.log(this.labels)
      const data = this.labels.map(label => {
        const filteredToys = this.toys.filter(toy => toy.labels.includes(label))
        return filteredToys.reduce(
          (avgPrice, toy) => avgPrice + toy.price / filteredToys.length,
          0
        )
      })
      return {
        labels: this.labels,
        datasets: [
          {
            data,
            backgroundColor: [
              '#77CEFF',
              '#0079AF',
              '#123E6B',
              '#97B0C4',
              '#A5C8ED',
            ],
          },
        ],
      }
    },
    stockData() {
      const data = this.labels.map(label => {
        return this.toys.reduce(
          (acc, toy) => (toy.labels.includes(label) ? acc + 1 : acc),
          0
        )
      })
      return {
        labels: this.labels,
        datasets: [
          {
            data,
            backgroundColor: [
              '#77CEFF',
              '#0079AF',
              '#123E6B',
              '#97B0C4',
              '#A5C8ED',
            ],
          },
        ],
      }
    },
  },
}
</script>

<style></style>
