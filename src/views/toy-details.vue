<template>
  <section v-if="toy" class="toy-details flex gap-2">
    <img class="toy-details__img" src="@/assets/demo-toy.jpg" alt="" />
    <div class="toy-details__details grid">
      <h2 class="toy-details__title">{{ toy.name }}</h2>
      <div class="grid">
        <p><span>ID:</span> {{ toy._id }}</p>
        <p>${{ toy.price }}</p>
        <p><span>Added at:</span> {{ createdAt }}</p>
        <div class="toy-details__labels flex items-center">
          <span
            class="toy-details__label"
            v-for="(label, idx) in toy.labels"
            :key="label"
            :style="{ backgroundColor: label.color }"
          >
            {{ label.title }}
          </span>
        </div>
      </div>
      <div class="flex justify-end self-end">
        <router-link class="btn-light" :to="'/toy/edit/' + toy._id"
          >Edit</router-link
        >
        <button class="btn-dark mx-1" @click="goBack">go back</button>
      </div>
    </div>
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
