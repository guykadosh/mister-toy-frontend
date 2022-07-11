<template>
  <li class="car-preview">
    <custom-card>
      <template #header>
        <p><span>Name:</span> {{ toy.name }}</p>
        <p><span>Tags</span> {{ toy.labels }}</p>
        <p>
          <span>Price:</span>
          {{ toy.price }}
        </p>
      </template>

      <template #footer>
        <button @click="goToEdit">edit</button>
        <button @click="goToDetail">details</button>
        <button @click="removeToy(toy.id)">delete</button>
      </template>
    </custom-card>
  </li>
</template>

<script>
import customCard from './custom-card.vue'

export default {
  name: 'toy-preview',
  props: {
    toy: Object,
  },
  components: {
    customCard,
  },
  methods: {
    goToDetail() {
      this.$router.push(`/toy/${this.toy.id}`)
    },
    goToEdit() {
      this.$router.push(`/toy/edit/${this.toy.id}`)
    },
    removeCar(toyId) {
      this.$emit('removeToy', toyId)
    },
  },
}
</script>
