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
/* Meta-variables */
@import '~@/assets/sass/colors';

html {
  // Fix draw of User-agent background (white)
  background-color: $app-color-mirage;
}

body {
  margin: 0;
  background-color: transparent !important; // Reset Bootstrap Reboot
}

p {
  font-size: 1.1rem;
}

#app {
  color: darken(#35495e, 16%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
