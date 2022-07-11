<template>
  <section v-if="toyToEdit" class="toy-edit">
    <form @submit.prevent="saveToy">
      <label for="txt" class="form-label">Toy Name</label>
      <input
        required
        v-model="toyToEdit.name"
        id="txt"
        type="text"
        placeholder="Enter your toy name here..."
      />

      <label for="price" class="form-label">Toy </label>
      <input
        required
        v-model.number="toyToEdit.price"
        id="price"
        type="number"
      />

      <div>
        <button @click="saveToy">save</button>
        <button @click="goBack">go back</button>
      </div>
    </form>
  </section>
</template>

<script>
import { toyService } from '../services/toy-service'

export default {
  name: 'toy-edit',
  data() {
    return {
      toyToEdit: null,
    }
  },
  created() {
    const { toyId } = this.$route.params
    if (toyId) {
      toyService.getById(toyId).then(toy => {
        this.toyToEdit = toy
      })
    } else this.toyToEdit = toyService.getEmptyToy()
  },
  methods: {
    goBack() {
      this.$router.push('/toy')
    },
    saveToy() {
      console.log(this.toyToEdit)
      this.$store
        .dispatch({ type: 'saveToy', toy: this.toyToEdit })
        .then(() => {
          this.$router.push('/toy')
        })
    },
  },
}
</script>
