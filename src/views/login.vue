<template>
  <section class="login">
    <form @submit.prevent="login" class="login__form">
      <h2>Sign in!</h2>
      <el-input v-model="credentials.username" placeholder="Username" />
      <el-input
        v-model="credentials.password"
        type="password"
        placeholder="Password"
        show-password
      />
      <button class="login__btn">
        <span>Login</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
    </form>
  </section>
</template>
<script>
import { userService } from '../services/user-service.js'

export default {
  name: 'login',
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      },
    }
  },
  created() {
    const user = userService.getLoggedInUser()
    if (user) {
      this.$store.commit({ type: 'login', user })
      this.$router.push('/toy')
    }
  },
  methods: {
    login: async function () {
      try {
        console.log(this.credentials)
        const credentials = JSON.parse(JSON.stringify(this.credentials))
        await this.$store.dispatch({ type: 'login', credentials })
        this.$router.push('/toy')
      } catch (err) {}
    },
  },
}
</script>
<style lang=""></style>
