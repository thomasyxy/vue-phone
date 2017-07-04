<template>
  <div class="vue-phone">
    <img src="../assets/status-bar.png" class="vue-phone-bar"/>
    <div class="vue-phone-content" :style="`width: ${width}px, height: ${height}px`">
      {{$children}}{{width}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-phone',
  props: {
    width: {
      type: [String, Number],
      default: 414
    },
    height: {
      type: [String, Number],
      default: 736
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@phone: vue-phone;
.@{phone} {
  .@{phone}-bar {
    width: 100%;
  }
  .@{phone}-content {
  }
}
</style>
