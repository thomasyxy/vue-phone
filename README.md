# vue-phone

[![npm](https://img.shields.io/npm/v/vue-phone.svg)](https://www.npmjs.com/package/vue-phone)
[![npm](https://img.shields.io/npm/dw/vue-phone.svg)](https://www.npmjs.com/package/vue-phone)

> vue phone container, analog mobile demonstration

[vue-phone](https://github.com/thomasyxy/vue-phone)

![](https://cdn.leoao.com/yinxy/phone.jpeg)

## Usage

``` bash
# install
npm install --save vue-phone
```

```html
<template>
  <Phone :width="200" :height="600" @home="clickHome">
    <div class="demo-page">
      hello world
    </div>
  </Phone>
</template>
<script>
import Phone from 'vue-phone'

export default {
  name: 'app',
  components: {
    Phone
  },
  methods: {
    clickHome () {
      console.log('home')
    }
  }
}
</script>
```


```html
// Initialize parameter
<table width="100%">
<thead>
  <tr>
    <th width="20%">Option</th>
    <th width="15%">Type</th>
    <th width="15%">Default</th>
    <th width="50%">Description</th>
  </tr>
</thead>
<tbody>
  <tr align="center">
    <td><code>width</code></td>
    <td>string,number</td>
    <td>375</td>
    <td>container's width</td>
  </tr>
  <tr align="center">
    <td><code>height</code></td>
    <td>string,number</td>
    <td>667</td>
    <td>container's height</td>
  </tr>
  <tr align="center">
    <td><code>device</code></td>
    <td>boolean</td>
    <td>true</td>
    <td>device the browser environment，hide container in the mobile terminal</td>
  </tr>
  <tr align="center">
    <td><code>signal</code></td>
    <td>string,number</td>
    <td>3</td>
    <td>signal strength</td>
  </tr>
  <tr align="center">
    <td><code>battery</code></td>
    <td>string,number</td>
    <td>100</td>
    <td>The battery remaining</td>
  </tr>
  <tr align="center">
    <td><code>background</code></td>
    <td>string</td>
    <td>-</td>
    <td>phone's background</td>
  </tr>
 </tbody>
</table>
```

```html
// API / Parents-Event
<table width="100%" align="center">
<thead>
  <tr>
    <th align="center" width="12.5%">Method</th>
    <th align="center" width="12.5%">Parameters</th>
    <th align="center" width="35%">Description</th>
    <th align="center" width="40%">Example</th>
  </tr>
</thead>
<tbody>
  <tr align="center">
    <td><code>home</code></td>
    <td>-</td>
    <td>click home button</td>
    <td><code>phone.$on('home', function(){console.log('back home')})</code></td>
  </tr>
 </tbody>
</table>
```

### Have better ideas？
Please tell me your options: https://github.com/thomasyxy/vue-phone/issues/1

### submit BUG
You can be submitted here, and i will be dealt with as soon as possible: https://github.com/thomasyxy/vue-phone/issues/2
