<template>
  <v-fragment :show="show">
    <v-breakpoint @change="onChange"></v-breakpoint>
    <slot></slot>
  </v-fragment>
</template>

<script>
// https://github.com/vuejs/vue/issues/7088
// https://github.com/vuejs/vue/issues/7088#issuecomment-364535373
// https://vuejs.org/v2/guide/render-function.html#Functional-Components

import VFragment from './Fragment'
import VBreakpoint from './Breakpoint'

// Implementation
export default {
  name: 'v-show-at',
  components: { VFragment, VBreakpoint },
  props: {
    breakpoint: {
      type: String,
      default: ''
    }
  },
  data: () => ({ show: true }),
  methods: {
    onChange({ breakpoint }) {
      this.show =
        this.breakpoint === breakpoint || this.$attrs.hasOwnProperty(breakpoint)
    }
  }
}
</script>
