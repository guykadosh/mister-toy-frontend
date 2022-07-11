<template>
  <section class="toy-app"></section>
  <!-- filter -->
  <!-- list -->
  <toy-list :toys="toys" />
</template>
<script>
import toyList from '../components/toy-list.vue'

export default {
  components: {
    toyList,
  },
  data() {
    return {
      toys: null,
    }
  },
  created() {
  },
  methods: {},
  computed: {
    toys() {
      return this.$store.getters.toys
    },
  },
}
</script>
<style></style>
