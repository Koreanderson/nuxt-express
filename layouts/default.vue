<template>
  <div>
    <div class="header">
      <NuxtLink class="button--green" to="/">Home</NuxtLink>
      <NuxtLink class="button--green" to="/login">Login</NuxtLink>
      <NuxtLink class="button--green" to="/register">Register</NuxtLink>
      <NuxtLink class="button--green" to="/secret">Secret</NuxtLink>
      <NuxtLink class="button--green" to="/users">Users</NuxtLink>
      <NuxtLink class="button--green" to="/find-a-business">Find a Business</NuxtLink>
    </div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.header {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px;
  border-bottom: 1px solid #f1f1f1;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

</style>
