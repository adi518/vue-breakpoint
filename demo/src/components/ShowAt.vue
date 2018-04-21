<script>
/* eslint-disable space-before-function-paren */

// https://github.com/vuejs/vue/issues/7088
// https://github.com/vuejs/vue/issues/7088#issuecomment-364535373
// https://vuejs.org/v2/guide/render-function.html#Functional-Components

// Generates the following template literal:
/*
<template functional>
  <v-breakpoint @breakpoint />
  <slot v-if="show"></slot>
</template>
*/

import VBreakpoint from './Breakpoint'

// Implementation
export default {
  functional: true,
  components: {
    VBreakpoint
  },
  props: {
    breakpoint: {
      type: String,
      default: ''
    }
  },
  render(h, { props, slots }) {
    return [
      h('v-breakpoint', {
        on: {
          breakpoint(breakpoint) {}
        }
      }),
      props.show ? slots().default : [] // how to make this conditional?
    ]
  }
}
</script>
