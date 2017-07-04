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
import Phone from './components/phone'

export default {
  name: 'app',
  components: {
    Phone
  }
}
</script>

<style>
#app {
  font-family: 'Hanzipen SC', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
