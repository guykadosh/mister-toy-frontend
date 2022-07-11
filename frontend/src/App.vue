<template>
  <section class="app-container container">
    <app-header />
    <router-view />
  </section>
</template>

<script>
import appHeader from './components/app-header.vue'
export default {
  name: 'app',
  created() {
    // this.$store.dispatch({ type: 'loadCars' })
  },
  methods: {},
  components: {
    appHeader,
  },
}
</script>
