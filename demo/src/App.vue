<template>
  <div id="app">
    <router-view/>
    <v-orientation-lock></v-orientation-lock>
  </div>
</template>

<script>
import VOrientationLock from '@/components/OrientationLock'

export default {
  name: 'App',
  components: { VOrientationLock }
}
</script>

<style lang="scss">
/* Meta-variables */
@import '~@/assets/sass/variables.scss';

html {
  // Fix draw of User-agent background (white)
  background-color: $docs-color-mirage;
}

body {
  margin: 0;
}

#app {
  color: darken(#35495e, 16%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Ubuntu;
}
</style>
