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
// TODO: replace PNG with SVG
// FIXME: Looks shrinked in "Samsung Internet" (native Samsung browser) until user clicks something

// Abstract
// import { WComponent } from '@/components/component'

// Resources
import { MobileOrientation } from 'mobile-orientation'

// Assets
import token from '@/assets/logo-gradient.png'

// Implementation
export default {
  name: 'VOrientationLock',
  // extends: WComponent,
  props: {
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
    token,
    html: undefined,
    namespace: { kebab: 'v-orientation-lock' },
    orientation: new MobileOrientation({
      withTouch: true,
      landscapeMediaQuery: 'screen and (max-width: 840px)'
    })
  }),
  mounted() {
    this.html = document.querySelector('html')
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
