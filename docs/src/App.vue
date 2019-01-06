<template>
  <div id="app">
    <v-menu :routes="routes" items="2" :exclude="['foo', 'bar']"></v-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import { routes } from '@/router'

import VMenu from '@/components/Menu'

export default {
  name: 'App',
  components: {
    VMenu
  },
  data: () => ({
    routes
  })
}
</script>

<style lang="scss">
@import '~@/styles/colors';

/* Bootstrap */
$spacer: 1rem;
$spacers: ();
$spacers: map-merge(
  (
    10: $spacer * 1,
    20: $spacer * 2,
    30: $spacer * 3,
    40: $spacer * 4,
    50: $spacer * 5
  ),
  $spacers
);
$body-bg: $app-color-mirage;
$body-color: darken($app-color-pickled-bluewood, 16%);
$pre-color: $app-color-aliceblue;
$link-color: rgba($app-color-white, 0.5);

// Bootstrap (required)
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';

// Bootstrap (optional)
@import '~bootstrap/scss/reboot';
@import '~bootstrap/scss/type';
@import '~bootstrap/scss/images';
@import '~bootstrap/scss/button-group';
@import '~bootstrap/scss/buttons';
@import '~bootstrap/scss/grid';
@import '~bootstrap/scss/utilities';

// Bootstrap (overrides)
pre,
code,
kbd,
samp {
  font-size: 1.1rem;
}
/* Bootstrap end */

/* Tags */
html {
  // Fix draw of User-agent background (white)
  background-color: $app-color-mirage;
  @include media-breakpoint-down(xs) {
    font-size: 90%;
  }
}
body {
  margin: 0;
}
a {
  transition: color 0.5s;
  color: $app-color-aliceblue;
  &:hover {
    color: $app-color-sandybrown;
  }
}
p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}
/* Tags end */

/* Prismjs */
@import '~prismjs/themes/prism-okaidia.css';
.docs {
  pre[class*='language-'] {
    margin-top: 0;
    margin-bottom: 0;
  }
  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    margin-bottom: 1.5rem;
    background: $app-color-mirage;
  }
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    background: none;
  }
}
/* Prismjs end */

/* Markdown */
.docs-markdown {
  h2 {
    font-size: 1.5rem; // h4
    margin-top: 4rem;
  }
  h3 {
    font-size: 1.25rem; // h5
  }
  h4 {
    font-size: 1.15rem;
  }
  a {
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    color: $app-color-aliceblue;
    background-color: $app-color-mirage;
    &:hover {
      text-decoration: none;
      color: $app-color-radical-red;
    }
  }
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  code {
    font-size: 1rem;
    border-radius: 0.3em;
    padding: 0.1rem 0.2rem;
    color: $app-color-sandybrown;
    background-color: darken($app-color-mirage, 5%);
  }
}
/* Markdown end */

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<style lang="stylus">
// https://github.com/vuejs/vuepress/blob/fd46a26d3a884b62092581451028121fd0daf654/lib/default-theme/styles/code.styl
for lang in js ts html md vue css sass scss less stylus go java c sh yaml {
  pre{'[class~="language-' + lang + '"]'} {
    &:before {
      content: '' + lang;
    }
  }
}

pre[class*=language-] {
  position: relative;

  &::before {
    position: absolute;
    z-index: 3;
    top: 0.8rem;
    right: 1rem;
    font-size: 0.75rem;
  }
}

pre[class~='language-bash'] {
  &:before {
    content: 'bash';
  }
}

pre[class~='language-javascript'] {
  &:before {
    content: 'js';
  }
}

pre[class~='language-typescript'] {
  &:before {
    content: 'ts';
  }
}

pre[class~='language-markup'] {
  &:before {
    content: 'html';
  }
}

pre[class~='language-markdown'] {
  &:before {
    content: 'md';
  }
}

pre[class~='language-json']:before {
  content: 'json';
}

pre[class~='language-ruby']:before {
  content: 'rb';
}

pre[class~='language-python']:before {
  content: 'py';
}

pre[class~='language-bash']:before {
  content: 'sh';
}
</style>