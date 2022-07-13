<template>
  <li class="toy-preview">
    <custom-card-new>
      <template #front>
        <h3>{{ toy.name }}</h3>
        <img src="@/assets/demo-toy.jpg" alt="" />
        <p><span>Tags</span> {{ toy.labels }}</p>
      </template>

      <template #back>
        <p>
          <span>Price:</span>
          {{ toy.price }}
        </p>
        <button @click="goToEdit">edit</button>
        <button @click="goToDetail">details</button>
        <button @click="removeToy(toy._id)">delete</button>
      </template>
    </custom-card-new>
  </li>
</template>

<script>
import customCardNew from './custom-card-new.vue'

export default {
  name: 'toy-preview-new',
  props: {
    toy: Object,
  },
  components: {
    customCardNew,
  },
  methods: {
    goToDetail() {
      this.$router.push(`/toy/${this.toy._id}`)
    },
    goToEdit() {
      this.$router.push(`/toy/edit/${this.toy._id}`)
    },
    removeToy(toyId) {
      this.$emit('removeToy', toyId)
    },
  },
}
</script>

<style lang="scss" scoped>
li {
  // width: 250px;
  height: 300px;
  padding: 1rem;
}

img {
  width: 100%;
  object-fit: contain;
  // aspect-ratio: 1.7 /1;
}
</style>
