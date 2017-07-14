<template>
  <div class="vue-device">
    <div v-if="isDesktop" class="vue-phone" :style="`width: ${width}px`">
      <div class="vue-phone-bar">
        <div class="vue-phone-left">
          <ul class="vue-phone-dots">
            <li v-for="i in 5" class="vue-phone-dot" :class="{'vue-phone-dot-border': i > signal}"></li>
          </ul>
          <div class="vue-phone-signal-type">
            wifi
          </div>
          <div class="vue-phone-signal-icon"></div>
        </div>
        <span class="vue-phone-time">{{time}}</span>
        <div class="vue-phone-right">
          <div class="vue-phone-blue-icon"></div>
          <div class="vue-phone-battery-percent">
            {{battery}}%
          </div>
          <div class="vue-phone-battery-cover">
            <img src="https://cdn.leoao.com/yinxy/phone-battery.png" alt="">
            <div class="vue-phone-battery-remain">
              <div class="vue-phone-battery-num" :style="{width: `${battery}%`}"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="vue-phone-content" :style="{height: height + 'px', backgroundImage: 'url(' + background + ')'}">
        <slot></slot>
      </div>
      <div class="vue-phone-btn" @click="handleClickHome"></div>
    </div>
    <div v-if="isMobile" class="vue-phone-native">
      <div class="vue-phone-content">
        <slot></slot>
      </div>
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
    },
    signal: {
      type: [String, Number],
      default: 3
    },
    battery: {
      type: [String, Number],
      default: 100
    },
    background: {
      type: [String],
      default: ''
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
      let s = (this.second + '').length === 1 ? '0' + this.second : this.second
      return `${h}:${m}:${s}`
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
  padding: 75px 15px;
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
    top: 32px;
  }
  .@{phone}-row {
    width: 100%;
    height: 25px;
    background: url(./assets/status-bar.png) no-repeat;
    background-size: 100% 100%;
    color: #fff;
    line-height: 29px;
    text-align: center;
  }
  .@{phone}-left {
    margin-left: 5px;
    display: flex;
    align-items: center;
  }
  .@{phone}-right {
    margin-right: 5px;
    display: flex;
    align-items: center;
  }
  .@{phone}-bar {
    width: 100%;
    height: 25px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .@{phone}-dots {
      @dot-width: 6px;
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0;
      list-style-type: none;
      .@{phone}-dot {
        width: @dot-width;
        height: @dot-width;
        background-color: #fff;
        border-radius: 50%;
        margin: 0 1px;
        box-sizing: border-box;
      }
      .@{phone}-dot-border {
        background-color: #000;
        width: @dot-width + 1px;
        height: @dot-width + 1px;
        border: 1px solid #aaa;
      }
    }
    .@{phone}-signal-type {
      margin: 0 5px;
    }
    .@{phone}-signal-icon {
      width: 15px;
      height: 15px;
      background-image: url(https://cdn.leoao.com/yinxy/phone-wifi.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
    .@{phone}-blue-icon {
      width: 10px;
      height: 16px;
      background-image: url(https://cdn.leoao.com/phone-blue2.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
    .@{phone}-battery-percent {
      font-size: 14px;
      margin: 1px 5px;
    }
    .@{phone}-battery-cover {
      position: relative;
      width: 31px;
      height: 15px;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 31px;
        height: 14px;
      }
    }
    .@{phone}-battery-remain {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 24px;
      height: 10px;
      border-radius: 2px;
      overflow: hidden;
      .@{phone}-battery-num {
        height: 100%;
        background-color: #fff;
      }
    }
  }
  .@{phone}-content {
    background: #fff;
    overflow: scroll;
  }
  .@{phone}-btn {
    content: '';
    width: 50px;
    height: 50px;
    position: absolute;
    left: 50%;
    margin-left: -25px;
    bottom: 13px;
    border-radius: 100%;
    box-sizing: border-box;
    border: 5px solid #333;
  }
}
</style>
