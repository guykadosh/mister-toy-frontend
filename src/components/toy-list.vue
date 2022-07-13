<template>
  <!-- <custom-card2 /> -->
  <ul class="toy-list clean-list grid gap-2 m-2">
    <toy-preview-new
      @removeToy="removeToy"
      v-for="toy in toys"
      :toy="toy"
      :key="toy._id"
    />
  </ul>
</template>
<script>
import toyPreview from './toy-preview.vue'

export default {
  name: 'toy-list',
  props: {
    toys: {
      type: [Array, null],
      required: true,
    },
  },
  components: {
    toyPreview,
  },
  methods: {
    removeToy(toyId) {
      this.$emit('removeToy', toyId)
    },
  },
}
</script>

<style>
.toy-list {
  grid-template-columns: repeat(auto-fill, 15rem);
}
</style>
