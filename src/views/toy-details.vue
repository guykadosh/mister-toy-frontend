<template>
  <section v-if="toy" class="toy-details flex flex-col items-center gap-2">
    <article>
      <p><span>ID:</span> {{ toy._id }}</p>
      <p><span>Name:</span> {{ toy.name }}</p>
      <p><span>Labels:</span> {{ toy.label }}</p>
    </article>
    <button @click="goBack">go back</button>
  </section>
</template>

<script>
import { toyService } from '../services/toy-service.js'

export default {
  name: 'toy-detail',
  data() {
    return {
      toy: null,
    }
  },
  created() {
    const { toyId } = this.$route.params
    console.log(toyId)
    toyService.getById(toyId).then(toy => {
      console.log(toy)
      this.toy = toy
    })
  },
  methods: {
    goBack() {
      this.$router.push('/toy')
    },
  },
}
</script>
