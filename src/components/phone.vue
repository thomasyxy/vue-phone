<template>
  <div class="vue-phone" :style="`width: ${width}px`">
    <img src="../assets/status-bar.png" class="vue-phone-bar"/>
    <div class="vue-phone-content" :style="`height: ${height}px`">
      <slot></slot>
    </div>
    <div class="vue-phone-btn"></div>
  </div>
</template>

<script>
export default {
  name: 'vue-phone',
  props: {
    width: {
      type: [String, Number],
      default: 375
    },
    height: {
      type: [String, Number],
      default: 667
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
  position: relative;
  overflow: hidden;
  background: #000;
  border-radius: 55px;
  box-shadow: 0 0 0 2px #333;
  height: 700px;
  padding: 105px 25px;
  &:before {
    content: '';
    width: 60px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    height: 10px;
    border-radius: 10px;
    background: #333;
    top: 50px;
  }
  .@{phone}-bar {
    width: 100%;
  }
  .@{phone}-content {
    background: #fff;
  }
  .@{phone}-btn {
    content: '';
    width: 60px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    height: 60px;
    bottom: 20px;
    border-radius: 100%;
    box-sizing: border-box;
    border: 5px solid #333;
  }
}
</style>
