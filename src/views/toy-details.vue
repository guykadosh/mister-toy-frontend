<template>
  <h1>Hi?</h1>
  <section v-if="toy" class="toy-details flex flex-col items-center gap-2">
    <article>
      <p><span>ID:</span> {{ toy._id }}</p>
      <p><span>Name:</span> {{ toy.name }}</p>
      <p><span>Labels:</span> {{ toy.labels }}</p>
      <p><span>Added at:</span> {{ createdAt }}</p>
    </article>
    <button @click="goBack">go back</button>
  </section>
</template>

<script>
import { toyService } from '../services/toy-service.js'

export default {
  name: 'toy-details',
  data() {
    return {
      toy: null,
    }
  },
  created() {
    console.log('why like tihs?')
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
  computed: {
    createdAt() {
      const date = new Date(this.toy.createdAt)
      return new Intl.DateTimeFormat('en-GB', {
        dateStyle: 'full',
        timeStyle: 'short',
      }).format(date)
    },
  },
}
</script>
