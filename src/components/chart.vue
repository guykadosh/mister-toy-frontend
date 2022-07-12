<template>
  <PolarAreaChart :chartData="data" />
</template>

<script lang="ts">
import { PolarAreaChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
  name: 'Home',
  props: {
    data: Object,
  },

  components: { PolarAreaChart },
}
</script>
