<template>
  <div class="demo">
    <img src="../assets/logo.png" style="width: 4rem">
    <h1>V-Breakpoint</h1>
    <p>
      A render-less component for sharing CSS breakpoint state.
    </p>
    <v-breakpoint>
      <div slot-scope="api" class="state">
        ( {{ api.breakpoint ? capitalize(api.breakpoint) : undefined }} )
      </div>
    </v-breakpoint>
    <div style=" width: 10rem; margin-top: 1rem">
      <v-show-at small>
        <span style="font-size: 2rem">😸</span>
      </v-show-at>
      <v-show-at medium>
        <span style="font-size: 4rem">😸</span>
      </v-show-at>
      <v-show-at large>
        <span style="font-size: 6rem">😸</span>
      </v-show-at>
    </div>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */

// https://brandcolors.net/b/vue-js
// https://gist.github.com/oliveratgithub/0bf11a9aff0d6da7b46f1490f86a71eb

//  Components
import VShowAt from './ShowAt'
import VFragment from './Fragment'
import VMultiple from './Multiple'
import VBreakpoint from './Breakpoint'
import VSlider from 'vue-slider-component'

// Resources
import capitalize from 'lodash.capitalize'

// Implementation
export default {
  name: 'HelloWorld',
  components: {
    VShowAt,
    VSlider,
    VMultiple,
    VFragment,
    VBreakpoint
  },
  data: () => ({
    value: 1
  }),
  methods: {
    capitalize
  }
}
</script>

<style lang="scss" scoped>
.demo {
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  color: #42b883;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: darken(#35495e, 16%);
  // background-color: #171717;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Ubuntu;
}

.state {
  font-size: 1.2rem;
}

h1 {
  font-weight: 300;
  color: aliceblue;
}

p {
  font-size: 1.2rem;
  color: lightslategrey;
  margin-top: 0;
  margin-left: 3rem;
  margin-right: 3rem;
}
</style>
