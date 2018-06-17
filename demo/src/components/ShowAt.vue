<template>
  <v-fragment :show="show">
    <v-breakpoint :breakpoints="breakpoints" @change="onChange"></v-breakpoint>
    <slot></slot>
  </v-fragment>
</template>

<script>
// https://github.com/vuejs/vue/issues/7088
// https://github.com/vuejs/vue/issues/7088#issuecomment-364535373
// https://vuejs.org/v2/guide/render-function.html#Functional-Components

// Components
import VFragment from './Fragment'
import VBreakpoint from './Breakpoint'

// Assets
import breakpoints from '@/assets/js/breakpoints'

// Implementation
export default {
  name: 'v-show-at',
  config: { breakpoints },
  components: { VFragment, VBreakpoint },
  props: {
    breakpoint: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    show: true,
    breakpoints: {}
  }),
  created() {
    this.breakpoints = this.$options.config.breakpoints
  },
  methods: {
    onChange({ breakpoint, noMatch }) {
      if (noMatch) {
        breakpoint = 'no-match'
      }
      this.show =
        this.breakpoint === breakpoint || this.$attrs.hasOwnProperty(breakpoint)
    }
  }
}
</script>
