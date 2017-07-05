<template>
  <div id="app">
    <Phone>
      <div class="demo-page">
        hello world
      </div>
    </Phone>
  </div>
</template>

<script>
import Phone from '../lib/phone.vue'

export default {
  name: 'app',
  components: {
    Phone
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
