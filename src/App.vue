<template>
  <section class="main-layout">
    <app-header />
    <router-view />
  </section>
</template>

<script>
import appHeader from './components/app-header.vue'
export default {
  name: 'app',
  created() {
    this.$store.dispatch({ type: 'loadToys' })
  },
  methods: {},
  components: {
    appHeader,
  },
}
</script>
