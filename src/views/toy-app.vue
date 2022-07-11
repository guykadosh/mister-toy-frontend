<template>
  <section class="toy-app"></section>
  <!-- filter -->
  <toy-list :toys="toys" @removeToy="removeToy" />
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
  created() {},
  methods: {
    removeToy(toyId) {
      this.$store.dispatch({ type: 'removeToy', id: toyId })
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
