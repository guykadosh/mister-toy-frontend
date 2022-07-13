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
    titles() {
      return this.labels.map(label => label.title)
    },
    colors() {
      return this.labels.map(label => label.color)
    },
    pricesData() {
      const data = this.labels.map(label => {
        const filteredToys = this.toys.filter(toy =>
          toy.labels.map(label => label.title).includes(label.title)
        )
        return filteredToys.reduce(
          (avgPrice, toy) => avgPrice + toy.price / filteredToys.length,
          0
        )
      })

      return {
        labels: this.titles,
        datasets: [
          {
            label: 'Price Avg',
            borderRadius: 6,
            data,
            backgroundColor: this.colors,
          },
        ],
      }
    },
    stockData() {
      const data = this.labels.map(label => {
        return this.toys.reduce(
          (acc, toy) =>
            toy.labels.map(label => label.title).includes(label.title) &&
            toy.inStock
              ? acc + 1
              : acc,
          0
        )
      })
      return {
        labels: this.titles,
        datasets: [
          {
            label: 'Stock Data',
            borderRadius: 6,
            data,
            backgroundColor: this.colors,
          },
        ],
      }
    },
  },
}
</script>

<style></style>
