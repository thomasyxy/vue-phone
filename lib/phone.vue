<template>
  <div class="vue-device">
    <div v-if="isDesktop" class="vue-phone" :style="`width: ${width}px`">
      <div class="vue-phone-bar">
        <span class="vue-phone-time">{{time}}</span>
      </div>
      <div class="vue-phone-content" :style="`height: ${height}px`">
        <slot></slot>
      </div>
      <div class="vue-phone-btn" @click="handleClickHome"></div>
    </div>
    <div v-if="isMobile" class="vue-phone-native">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import UA from 'ua-device'
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
    },
    device: {
      type: [Boolean],
      default: true
    }
  },

  data () {
    return {
      hour: 0,
      minute: 0,
      second: 0,
      equipment: 'desktop'
    }
  },

  computed: {
    time: function () {
      let h = (this.hour + '').length === 1 ? '0' + this.hour : this.hour
      let m = (this.minute + '').length === 1 ? '0' + this.minute : this.minute
      return `${h}:${m}`
    },
    isMobile: function () {
      return this.equipment === 'mobile'
    },
    isDesktop: function () {
      return this.equipment === 'desktop'
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
    },
    handleClickHome () {
      this.$emit('home')
    },
    browserRedirect () {
      let sUserAgent = navigator.userAgent.toLowerCase()
      let output = new UA(sUserAgent)
      console.log(output)
      return output.device.type
    }
  },

  mounted: function () {
    if (this.device) {
      this.equipment = this.browserRedirect()
    }
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
  padding: 105px 25px;
  box-sizing: content-box;
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
    text-align: center;
  }
  .@{phone}-content {
    background: #fff;
    overflow: scroll;
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
