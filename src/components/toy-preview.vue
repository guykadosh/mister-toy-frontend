<template>
  <li class="toy-preview">
    <custom-card>
      <template #front>
        <div class="toy-preview__side toy-preview__side--front">
          <h3 class="tag-text">{{ toy.name }}</h3>
          <img class="toy-preview__img" src="@/assets/demo-toy.jpg" alt="" />
          <div class="toy-preview__labels flex">
            <span
              class="toy-preview__label"
              v-for="(label, idx) in toy.labels"
              :key="label"
              :style="{ backgroundColor: label.color }"
            >
              {{ label.title }}
            </span>
          </div>
          <div v-if="!toy.inStock" class="ribbon ribbon-top-right">
            <span>Out of stock</span>
          </div>
        </div>
      </template>

      <template #back>
        <div class="toy-preview__side toy-preview__side--back">
          <div class="toy-preview__price-box">
            <p class="toy-preview__price-only">Price</p>
            <p class="toy-preview__price-value">${{ toy.price }}</p>
          </div>

          <div class="toy-preview__actions flex items-center justify-center">
            <button v-if="user.isAdmin" @click="goToEdit">edit</button>
            <button @click="goToDetail">details</button>
            <button v-if="user.isAdmin" @click="removeToy(toy._id)">
              delete
            </button>
          </div>
        </div>
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
  data() {
    return {}
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
  computed: {
    user() {
      return this.$store.getters.loggedInUser
    },
  },
}
</script>
