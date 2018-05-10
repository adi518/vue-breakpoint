<template>
  <div class="demo">
    <img src="../assets/logo.png" style="width: 4rem">
    <h1>V-Breakpoint</h1>
    <!-- <v-multiple>
      foo foo foo
      <span>bar</span>
      <span>bar</span>
      <span>bar</span>
    </v-multiple> -->
    <!-- <v-show-at breakpoint="small">
      foo foo foo
      <span>bar</span>
      <span>bar</span>
      <span>bar</span>
    </v-show-at> -->
    <p>
      A Render-less component for sharing CSS breakpoint state.
    </p>
    <v-breakpoint>
      <div slot-scope="api" class="state">
        ( {{ api.breakpoint ? capitalize(api.breakpoint) : undefined }} )
      </div>
    </v-breakpoint>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */

// https://brandcolors.net/b/vue-js

//  Components
import VShowAt from './ShowAt'
import VMultiple from './Multiple'
import VBreakpoint from './Breakpoint'

// Resources
import capitalize from 'lodash.capitalize'

// Implementation
export default {
  name: 'HelloWorld',
  components: {
    VShowAt,
    VMultiple,
    VBreakpoint
  },
  data: () => ({
    //
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
