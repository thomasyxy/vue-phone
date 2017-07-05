<template>
  <div class="vue-phone" :style="`width: ${width}px`">
    <div class="vue-phone-bar">
      <span class="vue-phone-time">{{time}}</span>
    </div>
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
      hour: 0,
      minute: 0,
      second: 0
    }
  },

  computed: {
    time: function () {
      let h = (this.hour + '').length === 1 ? '0' + this.hour : this.hour
      let m = (this.minute + '').length === 1 ? '0' + this.minute : this.minute
      return `${h}:${m}`
    }
  },

  methods: {
    setTime () {
      let date = new Date()
      this.hour = date.getHours()
      this.minute = date.getMinutes()
      this.second = date.getSeconds()
      setInterval(() => {
        this.second = this.second + 1
        if (this.second >= 59) {
          this.minute ++
          this.second = 0
          if (this.minute >= 59) {
            this.hour ++
            this.minute = 0
          }
        }
      }, 1000)
    }
  },

  mounted: function () {
    this.setTime()
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
    height: 25px;
    background: url(./assets/status-bar.png) no-repeat;
    background-size: 100% 100%;
    color: #fff;
    line-height: 29px;
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
