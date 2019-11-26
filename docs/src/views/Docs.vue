<template>
  <div class="docs">
    <!-- DEV -->
    <dev-only>
      <div class="dev-stats">
        <!-- <v-with-breakpoint>
          <div slot-scope="scope">component inject: { iw: {{ scope.innerWidthPx }} }</div>
        </v-with-breakpoint>-->
        <div>stateful: { iw: {{ demo.model.innerWidthPx }} }</div>
        <!-- <div>global mixin: { iw: {{ $vBreakpoint.scope.innerWidthPx }} }</div> -->
      </div>
    </dev-only>
    <!-- FIRST PAGE -->
    <div
      :style="{ height: demo.model.innerHeightPx }"
      class="docs-container docs-container--has-jumbotron js-vh-fix"
    >
      <!-- JUMBOTRON -->
      <div class="docs-jumbotron">
        <img class="docs-vue-logo mb-2" :src="assets.logo" />
        <h1 class="docs-h1">Vue Breakpoint</h1>
        <p class="docs-tagline">{{ pkg.description }}</p>

        <!-- DEMO -->
        <v-breakpoint v-model="demo.model">
          <!-- <dev-only> -->
          <template v-slot="scope">
            <div>
              <span v-if="scope.isSmall" style="font-size: 2rem">😸</span>
              <span v-if="scope.isMedium" style="font-size: 4rem">😸</span>
              <span v-if="scope.isLarge" style="font-size: 6rem">😸</span>
              <span v-if="scope.isXlarge" style="font-size: 8rem">😸</span>
              <span v-if="scope.noMatch" style="font-size: 10rem">😸</span>
            </div>
          </template>
          <!-- </dev-only> -->
        </v-breakpoint>
        <!-- <v-breakpoint></v-breakpoint> -->

        <div class="docs-state text-center mb-3">( {{ normalize(demo.model.breakpoint) }} )</div>
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
          ~&nbsp;Made with&nbsp;
          <v-octicon icon-name="heart" style="fill: red; width: 1.3rem; height: 1.3rem"></v-octicon>&nbsp;by&nbsp;
          <a
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
        tabindex
      >Install, Examples & Documentation</a>
    </div>

    <!-- SECOND PAGE -->
    <div ref="docs" class="docs-container docs-min-100vh pb-5 vh-for-mobile">
      <div
        class="container docs-clearfix"
        :class="(demo.model.noMatch && ['pl-3', 'pr-3']) || 'p-0'"
      >
        <div class="docs-markdown" v-html="markdowns.readme"></div>
      </div>
    </div>

    <!-- VERSION -->
    <div class="docs-version">{{ pkg.version }}</div>

    <!-- GIT RIBBON -->
    <v-git-ribbon fill-color="lightslategrey" octo-color="#18202a" :href="pkg.repository.url"></v-git-ribbon>
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

import logo from '@/assets/logo-gradient.png'

import VOcticon from 'vue-octicons'
import DevOnly from '@/components/DevOnly'
import VGitRibbon from '@/components/GitRibbon'
import { Model, VWithBreakpoint } from 'vue-breakpoint-component'
import { VBreakpoint, VShowAt, VHideAt } from '@/components/Breakpoint'

import Prism from 'prismjs'
import capitalize from 'capitalize'

import readme from '../../../README.md'

export default {
  name: 'VDocs',
  components: {
    DevOnly,
    VShowAt, // eslint-disable-line vue/no-unused-components
    VHideAt, // eslint-disable-line vue/no-unused-components
    VOcticon,
    VGitRibbon,
    VBreakpoint,
    VWithBreakpoint // eslint-disable-line vue/no-unused-components
  },
  data: () => ({
    pkg,
    demo: {
      model: new Model()
    },
    assets: {
      logo
    },
    flags: {
      production: process.env.NODE_ENV !== 'development',
      development: process.env.NODE_ENV === 'development'
    },
    markdowns: {
      readme
    }
  }),
  mounted() {
    window.setTimeout(Prism.highlightAll)
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
    },
    emojiElement() {
      return this.getElementByRef('emoji')
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
      window.requestAnimationFrame(() => {
        const element = this.emojiElement
        element.style.animation = 'none'
        void element.offsetHeight // Trigger reflow
        element.style.animation = null
      })
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
@import '~@/styles/colors';

$app-min-width: 320px;

/* Bootstrap */
// Bootstrap (required)
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';
/* Bootstrap end */
/* Headings */
.docs-h1 {
  font-weight: 300;
  font-size: 1.6rem;
  text-transform: uppercase;
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
.dev-stats {
  top: 3rem;
  left: 1rem;
  z-index: 1;
  color: #527292;
  position: absolute;
  text-transform: uppercase;
}
/* Layout end */
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
