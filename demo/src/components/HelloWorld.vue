<template>
  <div style="text-align: center">
    <h1>V-Breakpoint Component Demo</h1>
    <!-- <v-multiple>
      foo foo foo
      <span>bar</span>
      <span>bar</span>
      <span>bar</span>
    </v-multiple> -->
    <v-show-at breakpoint="small">
      foo foo foo
      <span>bar</span>
      <span>bar</span>
      <span>bar</span>
    </v-show-at>
    <v-breakpoint>
      <!-- <template slot-scope="api"> -->
      <v-multiple>
        foo foo foo
      </v-multiple>
      <!-- {{capitalize(api.breakpoint)}} -->
      <!-- test -->
      <!-- </v-multiple> -->
      <!-- </template> -->
    </v-breakpoint>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */

import VShowAt from './ShowAt'
import VMultiple from './Multiple'
import VBreakpoint from './Breakpoint'
import capitalize from 'lodash.capitalize'

export default {
  name: 'HelloWorld',
  components: {
    VShowAt,
    VMultiple,
    VBreakpoint
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    capitalize
  }
}
</script>
