<template>
  <div class="docs">

    <!-- FIRST PAGE -->
    <div
      class="docs-container docs-container--has-jumbotron js-vh-fix"
      :style="{ height: `${demo.model.innerHeight}px` }"
    >

      <!-- JUMBOTRON -->
      <div class="docs-jumbotron">
        <img class="docs-vue-logo mb-1" src="../assets/images/logo-gradient.png">
        <h1 class="docs-h1">Vue-Breakpoint</h1>
        <p class="docs-tagline">
          A render-less component for<br>composing CSS breakpoint state.
        </p>

        <!-- DEMO -->
        <v-breakpoint v-model="demo.model"></v-breakpoint>
        
        <!-- DEVELOPMENT -->
        <!-- <template v-if="flags.development">
          <v-hide-at large>
            <span style="font-size: 2rem">😿</span>
            <span style="font-size: 2rem">😿</span>
          </v-hide-at>
        </template> -->
        <!-- DEVELOPMENT end -->

        <div class="docs-state text-center mb-3">
          ( {{ normalize(demo.model.breakpoint) }} )
        </div>
        <div class="docs-emoji mb-20" ref="emoji" @mouseover="animateEmoji">
          <span :style="`font-size: ${emojiSize}; transition: font-size .2s`">😸</span>
        </div>
        <div class="mb-5">
          <!-- Do not remove global class `github-button`! -->
          <a
            class="github-button"
            :href="flags.production && pkg.repository.url"
            data-icon="octicon-star"
            data-show-count="true"
            aria-label="Star adi518/vue-breakpoint-component on GitHub"
          >Star</a>
        </div>
        <p class="docs-credit mb-0">
          ~&nbsp;Made with <v-octicon icon-name="heart" style="fill: red; width: 0.9rem; height: auto"></v-octicon> by <a
            class="docs-anchor--author"
            href="https://github.com/adi518"
            target="_blank"
          >@adi518</a>&nbsp;~
        </p>
      </div>

      <!-- FIXED ANCHOR -->
      <a
        class="docs-fixed-anchor docs-c-pointer"
        @click="scrollTo('docs')"
        tabindex=""
      >Install, Examples & Documentation</a>
    </div>

    <!-- SECOND PAGE -->
    <div ref="docs" class="docs-container docs-min-100vh pb-5 vh-for-mobile">
      <div class="container docs-clearfix" :class="demo.model.noMatch && ['pl-3', 'pr-3'] || 'p-0'">
        <div class="docs-markdown" v-html="markdowns.readme"></div>
      </div>
    </div>

    <!-- VERSION -->
    <div class="docs-version">{{ pkg.version }}</div>

    <!-- GIT RIBBON -->
    <v-git-ribbon
      fill-color="lightslategrey"
      octo-color="#18202a"
      :href="pkg.repository.url"
    ></v-git-ribbon>
  </div>
</template>

<script>
// https://prismjs.com/#examples
// https://brandcolors.net/b/vue-js
// https://nuxtjs.org/faq/host-port/
// https://favicon.io/emoji-favicons
// https://gist.github.com/rxaviers/7360908
// https://github.com/miaolz123/vue-markdown
// https://github.com/christinecha/web-sparkle
// https://stackoverflow.com/a/13333312/4106263
// https://stackoverflow.com/a/35528998/4106263
// https://stanko.github.io/mobile-chrome-vh-fix/
// https://github.com/miaolz123/vue-markdown/issues/14
// https://gist.github.com/roachhd/1f029bd4b50b8a524f3c
// https://gist.github.com/paulirish/5d52fb081b3570c81e3a
// https://gist.github.com/oliveratgithub/0bf11a9aff0d6da7b46f1490f86a71eb
// https://stackoverflow.com/questions/27637184/what-is-dom-reflow/27637245#27637245
// https://stackoverflow.com/questions/6268508/restart-animation-in-css3-any-better-way-than-removing-the-element
// https://stackoverflow.com/questions/43619644/i-am-getting-an-invalid-host-header-message-when-running-my-react-app-in-a-we

import pkg from '../../../package.json'

import VOcticon from 'vue-octicons'

import VGitRibbon from '@/components/GitRibbon'
import VOrientationLock from '@/components/OrientationLock'
import { VBreakpoint, VShowAt, VHideAt, Model } from '@/import'

import Prism from 'prismjs'
import capitalize from 'capitalize'
import { VhChromeFix } from '@/assets/javascript/VhChromeFix'

import readme from '@repo/README.md'

export default {
  name: 'VDocs',
  components: {
    VShowAt,
    VHideAt,
    VOcticon,
    VGitRibbon,
    VBreakpoint,
    VOrientationLock
  },
  data: () => ({
    pkg,

    demo: {
      model: new Model()
    },

    flags: {
      production: process.env.NODE_ENV !== 'development',
      development: process.env.NODE_ENV === 'development'
    },

    markdowns: {
      readme
    }
  }),
  created() {
    this.vhChromeFix = undefined
  },
  mounted() {
    window.setTimeout(Prism.highlightAll)

    // this.vhChromeFix = new VhChromeFix([{ selector: '.js-vh-fix', vh: 100 }])
  },
  destroyed() {
    // this.vhChromeFix.destroy()
  },
  computed: {
    emojiSize() {
      switch (this.demo.model.breakpoint) {
        case 'small':
          return '4rem'
        case 'medium':
          return '5rem'
        case 'large':
          return '6rem'
        case 'xlarge':
          return '7rem'
        default:
          return '3rem' // Aka Bootstrap 4 "xs"
      }
    }
  },
  methods: {
    scrollTo(ref, options = {}) {
      this.getElementByRef(ref).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        ...options
      })
    },
    getElementByRef(ref) {
      let element = this.$refs[ref]
      if (element instanceof Element) {
        return element
      }
      element = this.$refs[ref].el
      if (element instanceof Element) {
        return element
      }
    },
    normalize(state) {
      if (state) {
        if (state === 'xlarge') {
          return 'X-Large'
        }
        return capitalize(state)
      }
      return 'X-Small'
    },
    animateEmoji() {
      const element = this.getElementByRef('emoji')
      element.style.animation = 'none'
      void element.offsetHeight // Trigger reflow
      element.style.animation = null
    }
  }
}
</script>

<style lang="scss">
// https://gist.github.com/rxaviers/7360908
// https://codepen.io/borryshasian/pen/NPxEXg
// https://gist.github.com/roachhd/1f029bd4b50b8a524f3c
// https://tympanus.net/codrops/css_reference/transform-origin/

/* Meta-variables */
@import '~@/sass/colors';

$app-min-width: 320px;

/* Bootstrap */
$spacer: 1rem;
$spacers: ();
$spacers: map-merge((20: ($spacer * 2)), $spacers);

$body-bg: $app-color-mirage;
$body-color: $app-color-white;
$pre-color: $app-color-aliceblue;
$link-color: rgba($app-color-white, 0.5);

// Required
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';

// Optional
@import '~bootstrap/scss/reboot';
@import '~bootstrap/scss/type';
@import '~bootstrap/scss/images';
@import '~bootstrap/scss/button-group';
@import '~bootstrap/scss/buttons';
@import '~bootstrap/scss/grid';
@import '~bootstrap/scss/utilities';

pre,
code,
kbd,
samp {
  font-size: 1.1rem;
}
/* Bootstrap end */

/* Prismjs */
@import 'prismjs/themes/prism-okaidia.css';

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

/* Tags */
html {
  @include media-breakpoint-down(xs) {
    font-size: 80%;
  }
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

/* Headings */
.docs-h1 {
  font-weight: 300;
  font-size: 2.2rem;
  color: $app-color-aliceblue;
}

.docs-h2 {
  font-weight: 400;
}
/* Headings end */

/* Common Layout */
.docs {
  min-width: $app-min-width;
}

.docs-container {
  position: relative;
  background-color: darken($app-color-sandybrown, 6.66%);
}

.docs-container--has-jumbotron {
  display: flex;
  align-items: center;
  background-color: darken($app-color-pickled-bluewood, 16%);
}

.docs-jumbotron {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: $app-color-ocean-green;
}

.docs-version {
  top: 1rem;
  left: 1rem;
  position: absolute;
  color: lighten($app-color-pickled-bluewood, 16%);
}

.docs-tagline {
  font-size: 1.5rem;
  margin-top: 0;
  margin-left: 2rem;
  margin-right: 2rem;
  text-align: center;
  color: $app-color-lightslategrey;
}

.docs-fixed-anchor {
  left: 0;
  width: 100%;
  bottom: 0.8rem;
  font-size: 1.2rem;
  position: absolute;
  text-align: center;
  color: $app-color-aliceblue;
}

.docs-credit {
  color: $app-color-lightslategrey;
}
/* Common Layout end */

/* Layout */
.docs-vue-logo {
  width: 4rem;

  @include media-breakpoint-down(xs) {
    width: 3.7rem;
  }
}

.docs-state {
  font-size: 1.2rem;
}

.docs-anchor--author {
  position: relative;
  color: $app-color-lightslategrey;

  &:hover {
    text-decoration: none;
    color: $app-color-lightslategrey;

    &::after {
      border-bottom-color: $app-color-aliceblue;
    }
  }

  &::after {
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
    bottom: -0.15rem;
    position: absolute;
    display: inline-block;
    border-bottom: 1px dotted $app-color-lightslategrey;
  }
}

.docs-emoji {
  animation-duration: 2s;
  animation-name: docs-nod-yes;
  animation-fill-mode: forwards;
  transform-origin: 50% 50% -0.5rem;
}
/* Layout end */

/* Markdown */
.docs-markdown {
  h2 {
    font-size: 1.5rem; // h4
    margin-top: 1.5rem;
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

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    code {
      padding: 0.2rem 0.4rem;
      color: $app-color-spring-wood;
      background-color: $app-color-gray;
    }
  }
}
/* Markdown end */

/* Utils */
.docs-c-pointer {
  cursor: pointer;
}

.docs-100vh {
  height: 100vh;
}

.docs-min-100vh {
  min-height: 100vh;
}

.docs-clearfix {
  &::after,
  &::before {
    height: 0;
    display: block;
    content: '\0020';
    overflow: hidden;
  }

  &::after {
    clear: both;
  }
}
/* Utils end */

/* Animations */
@keyframes docs-nod-yes {
  0% {
    transform: rotate3d(1, 0, 0, -30deg);
  }
  24% {
    transform: rotate3d(1, 0, 0, 30deg);
  }
  48% {
    transform: rotate3d(1, 0, 0, -20deg);
  }
  72% {
    transform: rotate3d(1, 0, 0, 20deg);
  }
  100% {
    transform: rotate3d(1, 0, 0, 0);
  }
}
/* Animations end */
</style>
