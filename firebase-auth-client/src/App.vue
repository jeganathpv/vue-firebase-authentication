<template>
  <div>
    <navbar></navbar>
    <main class="py-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import navbar from './components/NavBar.vue'

export default {
  components: {
    navbar
  }
}
</script>

<style scoped>
@import "./static/app.css"
</style>
