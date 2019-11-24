<template>
  <div class="v-orientation-lock" v-if="isLandscape" :style="rootStyle">
    <img class="token" :src="token" :alt="alt">
    <div class="message" :style="messageStyle">
      <slot>
        Please rotate back to Portrait. 😾
      </slot>
    </div>
  </div>
</template>

<script>
import { MobileOrientation as Orientation } from 'mobile-orientation'

import token from '@/assets/images/logo-gradient.png'

export default {
  name: 'VOrientationLock',
  props: {
    token: {
      type: String,
      default: token
    },
    alt: {
      type: String,
      default: 'Rotate to Portrait'
    },
    bgColor: {
      type: String,
      default: '#18202a'
    },
    messageColor: {
      type: String,
      default: 'lightslategrey'
    }
  },
  data: () => ({
    orientation: new Orientation({
      withTouch: true,
      landscapeMediaQuery: 'screen and (max-width: 840px)'
    })
  }),
  created() {
    this.html = undefined
    this.namespace = { kebab: 'v-orientation-lock' }
  },
  mounted() {
    this.html = document.querySelector('html')
  },
  beforeDestroy() {
    this.orientation.destroy()
  },
  watch: {
    isLandscape(value) {
      this.html.classList[value ? 'add' : 'remove'](
        `${this.namespace.kebab}--is-active`
      )
    }
  },
  computed: {
    rootStyle() {
      return {
        backgroundColor: this.bgColor
      }
    },
    messageStyle() {
      return {
        color: this.messageColor
      }
    },
    isLandscape() {
      return this.orientation.state === 'landscape'
    }
  }
}
</script>

<style lang="scss">
html.v-orientation-lock--is-active {
  overflow: hidden;
}
</style>

<style lang="scss" scoped>
.v-orientation-lock {
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100000;
  display: flex;
  position: fixed;
  touch-action: none;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-bottom: 2rem;
  align-items: flex-end;
  flex-direction: row-reverse;
  justify-content: space-between;
}

.token {
  max-width: 5rem;
  max-height: 5rem;
}

.message {
  display: flex;
  margin-top: 1rem;
  font-size: 1.2rem;
  align-items: center;
}
</style>
