<template>
  <div id="app">
    <Phone @home="clickHome" :signal="signal" :battery="battery">
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
  data () {
    return {
      signal: 0,
      battery: 100
    }
  },
  components: {
    Phone
  },
  methods: {
    clickHome () {
      console.log('home')
    }
  },
  mounted () {
    setInterval(() => {
      if (this.signal >= 5) {
        this.signal = 1
      } else {
        this.signal++
      }
      if (this.battery > 0) {
        this.battery--
      } else {
        this.battery = 100
      }
    }, 1000)
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
