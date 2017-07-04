<template>
  <div class="vue-phone">
    <img src="../assets/status-bar.png" class="status-bar"/>
    <div className="phone-content">
      {{$children}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-phone',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@phone: lemo-phone;
.@{phone} {

}
</style>
