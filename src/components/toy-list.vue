<template>
  <!-- <custom-card2 /> -->
  <ul class="toy-list clean-list grid gap-1">
    <toy-preview-new
      @removeToy="removeToy"
      v-for="toy in toys"
      :toy="toy"
      :key="toy._id"
    />
  </ul>
</template>
<script>
import toyPreviewNew from './toy-preview-new.vue'

export default {
  name: 'toy-list',
  props: {
    toys: {
      type: [Array, null],
      required: true,
    },
  },
  components: {
    toyPreviewNew,
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
  grid-template-columns: repeat(auto-fit, 15rem);
}
</style>
