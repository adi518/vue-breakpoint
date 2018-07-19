<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '~@/sass/colors';

html {
  // Fix draw of User-agent background (white)
  background-color: $app-color-mirage;
}

body {
  margin: 0;
}

#app {
  color: darken($app-color-pickled-bluewood, 16%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
