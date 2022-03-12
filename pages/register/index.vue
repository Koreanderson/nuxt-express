<template>
  <div>
    <h1>Register</h1>
    <div v-if="error">{{ error.message }}</div>
    <form @submit.prevent="pressed">
      <div class="email">
        <input type="email" name="email" v-model="email" placeholder="email" id="">
      </div>
      <div class="password">
        <input type="password" name="password" v-model="password" placeholder="password" id="password">
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async pressed () {
      try {
        const user = await this.$fireModule.auth().createUserWithEmailAndPassword(this.email, this.password)
        console.log(user)
        this.$router.replace({ name: 'secret' })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss">
  .error {
    color: red;
  }
</style>
