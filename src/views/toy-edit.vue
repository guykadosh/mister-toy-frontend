<template>
  <section v-if="toyToEdit && labels" class="toy-edit flex">
    <form class="toy-edit__form grid" @submit.prevent="saveToy">
      <div class="toy-edit__input-box">
        <label for="txt" class="toy-edit__label">Toy Name</label>
        <el-input
          v-model="toyToEdit.name"
          id="txt"
          type="text"
          placeholder="Enter your toy name here..."
        />
      </div>
      <div class="toy-edit__input-box">
        <label class="toy-edit__label" for="price">Price</label>
        <el-input
          required
          v-model.number="toyToEdit.price"
          id="price"
          type="number"
        />
      </div>
      <el-switch
        v-model="toyToEdit.inStock"
        size="large"
        active-text="In Stock"
        inactive-text="Out of stock"
      />
      <el-select
        v-model="selectedLabels"
        multiple
        placeholder="Pick types"
        style="width: 240px"
      >
        <el-option
          v-for="label in labels"
          :key="label.title"
          :label="label.title"
          :value="label.title"
          :style="{ backgroundColor: label.color, color: '#ffffff' }"
        />
      </el-select>
      <div>
        <button class="btn" @click="saveToy">save</button>
        <button class="btn-dark" @click="goBack">go back</button>
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
      selectedLabels: [],
    }
  },
  created() {
    const { toyId } = this.$route.params
    if (toyId) {
      toyService.getById(toyId).then(toy => {
        this.toyToEdit = toy
        this.selectedLabels = toy.labels.map(label => label.title)
      })
    } else this.toyToEdit = toyService.getEmptyToy()
  },
  methods: {
    goBack() {
      this.$router.push('/toy')
    },
    saveToy() {
      const newLabels = this.labels.filter(label =>
        this.selectedLabels.includes(label.title)
      )
      this.toyToEdit.labels = newLabels
      console.log(this.toyToEdit)
      this.$store
        .dispatch({ type: 'saveToy', toy: this.toyToEdit })
        .then(() => {
          this.$router.push('/toy')
        })
    },
  },
  computed: {
    labels() {
      return this.$store.getters.labels
    },
  },
}
</script>
