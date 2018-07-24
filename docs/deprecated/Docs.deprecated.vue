<template>
  <div class="docs">

    <!-- FIRST PAGE -->
    <div class="docs-container docs-container--has-jumbotron docs-100vh js-vh-fix">

      <!-- JUMBOTRON -->
      <div class="docs-jumbotron">
        <img class="docs-vue-logo" src="../assets/images/logo-gradient.png">
        <h1 class="docs-h1 mt-1">Vue-Breakpoint</h1>
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
        <div class="text-center">
          <div class="docs-demo">
            ( {{ normalize(demo.model.breakpoint) }} )
          </div>
          <div class="docs-emoji mt-3" ref="emoji" @mouseover="animateEmoji">
            <span :style="`font-size: ${emojiSize}; transition: font-size .2s`">😸</span>
          </div>
        </div>        
        <p class="mt-20">
          <a
            class="docs-github-button github-button"
            :href="flags.production && pkg.repository.url"
            data-icon="octicon-star"
            data-show-count="true"
            aria-label="Star adi518/vue-breakpoint-component on GitHub"
          >
            Star
          </a>
        </p>
        <p class="docs-credit mt-3">
          Made with ❤️ by
          <a
            class="docs-anchor--author"
            href="https://github.com/adi518"
            target="_blank"
          >
            Adi Sahar
          </a>
        </p>
      </div>
      <!-- FIXED ANCHOR -->
      <a
        class="docs-fixed-anchor docs-c-pointer"
        @click="scrollTo('docs')"
        tabindex=""
      >
        Install, Examples & Documentation
      </a>
    </div>

    <!-- SECOND PAGE -->
    <div ref="docs" class="docs-container docs-min-100vh pb-5 vh-for-mobile">
      <div class="container docs-clearfix" :class="demo.model.noMatch && ['pl-3', 'pr-3'] || 'p-0'">

        <!-- INSTALL -->
        <h2 class="docs-h2 mt-3 mb-3">Install</h2>
        <div
          class="docs-markdown docs-clearfix mt-2"
          v-html="markdowns.install"></div>

        <!-- USAGE -->
        <h2 class="docs-h2 mt-4">Usage</h2>
        <p>
          To use the component in your templates, simply import and
          register with your component:
        </p>
        <h4 class="mt-3">Script</h4>
        <div class="docs-markdown" v-html="markdowns.examples.default.script"></div>
        <h4 class="mt-3">Template</h4>
        <div class="docs-markdown" v-html="markdowns.examples.default.template"></div>        
        <h4 class="mt-3">Global Install</h4>
        <p class="docs-p">
          You can also choose to install the component globally. This will install three
          components <code class="docs-code--inline">v-breakpoint</code>,
          <code class="docs-code--inline">v-show-at</code>,
          <code class="docs-code--inline">v-hide-at</code>.
        </p>
        <div class="docs-markdown" v-html="markdowns.examples.default.install"></div>

        <!-- USAGE (SHOW-AT) -->
        <h2 class="docs-h2 mt-5">Show-At/Hide-At Usage</h2>
        <p>
          To use the component in your templates, simply import
          and register with your component:
        </p>
        <h4 class="mt-3">Script</h4>
        <div class="docs-markdown" v-html="markdowns.examples.showAt.script"></div>
        <h4 class="mt-3">Template</h4>
        <div class="docs-markdown" v-html="markdowns.examples.showAt.template"></div>
        <h3 class="mt-4">Multiple Root Elements (Experimental)</h3>
        <p class="docs-p">
          Notice that you can also show/hide <b>multiple</b> elements using an experimental
          Fragment-like component hack, described
          <a class="docs-c-pointer" @click="scrollTo('fragment')" tabindex="">here</a>.
        </p>
        <h5>🚧 Note</h5>
        <p class="docs-p">
          To unlock this feature, you will have to <a class="docs-c-pointer" @click="scrollTo('config')" tabindex="">configure</a>
          the component with <code class="docs-code--inline">experimental</code> flag.
        </p>
        <div class="docs-markdown" v-html="markdowns.examples.showAt.multiple"></div>

        <!-- V-MODEL -->
        <h2 class="docs-h2 mt-5">V-Model</h2>
        <p>
          You can also take leverage of the breakpoint state without composing inside it,
          using a <code class="docs-code--inline">v-model</code>.
        </p>
        <h4>Script</h4>
        <div class="docs-markdown" v-html="markdowns.examples.vModel.script"></div>
        <h4 class="mt-3">Template</h4>
        <div class="docs-markdown" v-html="markdowns.examples.vModel.template"></div>

        <!-- API PROPS -->
        <h2 class="docs-h2 mt-5">API Props</h2>
        <div class="docs-markdown" v-html="markdowns.api.props.meta"></div>

        <!-- API EVENTS -->
        <h2 class="docs-h2 mt-5">API Events</h2>
        <p>
          The component emits two core events, <code class="docs-code--inline">input</code>
          and <code class="docs-code--inline">change</code>.
          The <code class="docs-code--inline">input</code> event is required for
          <code class="docs-code--inline">v-model</code> usage, but other than that,
          it's fairly similar to <code class="docs-code--inline">change</code> event.
          Each of these events benefit different composition styles.
        </p>
        <div
          class="docs-markdown docs-markdown--is-one-liner mt-2"
          v-html="markdowns.examples.events.payload"></div>

        <!-- API EVENTS PAYLOADS -->
        <h4 class="mt-4">Payloads</h4>
        <h5 class="mt-3">Input and Change Events <code class="docs-code--inline">(state[Object])</code></h5>
        <p>
          Each of these events has the same payload. Besides breakpoint state,
          they also supply some auxiliary state, like <b>viewport</b>
          and current <b>inner window dimensions</b> (which are also aliased for convenience). Example:
        </p>
        <div class="docs-markdown mt-2" v-html="markdowns.api.events.payload"></div>

        <!-- API EVENT BREAKPOINT -->
        <h5 class="mt-4">Breakpoint Event <code class="docs-code--inline">(state[String])</code></h5>
        <p>
          This event has a fairly simple payload. Example:
        </p>
        <div class="docs-markdown mt-2" v-html="markdowns.api.events.breakpoint.payload"></div>

        <!-- API EVENT BREAKPOINT-NAMESPACE EVENT -->
        <h5 class="mt-4">Breakpoint-Namespace Event</h5>
        <p>
          Besides those events, the component also emits a breakpoint-namespace event
          per breakpoint defined. Thus, you can do something like:
        </p>
        <div
          class="docs-markdown docs-markdown--is-one-liner mt-2"
          v-html="markdowns.examples.events.breakpoint"></div>

        <!-- CONFIGURATION -->
        <h2 ref="config" class="docs-h2 mt-5">Configuration</h2>
        <p class="docs-p">
          The default breakpoints are based on
          <a href="https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints">Bootstrap 4 (Stable)</a>.
          To customize the component you will have to use the descriptor Constructor.
          Start off by creating a new component asset, e.g.:
          <code class="docs-code--inline">VBreakpoint.js</code>.
          Then, use the following snippet and adjust configuration to your needs.
        </p>        
        <div class="docs-markdown" v-html="markdowns.examples.configuration.extend"></div>
        <h3 class="mt-4">Usage</h3>
        <p class="docs-p">
          Import <b>locally</b> and use as you would normally.
        </p>
        <div class="docs-markdown" v-html="markdowns.examples.configuration.script"></div>
        <h4>Default Breakpoints (Bootstrap 4)</h4>
        <div class="docs-markdown" v-html="markdowns.api.props.breakpoints"></div>
        <h4 class="mt-4">Custom Breakpoints</h4>
        <p class="docs-p">
          You can define an <b>infinite</b> amount of breakpoints.
          For media-query syntax see
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"
            target="_blank"
          >MDN</a>.
        </p>

        <!-- MULTIPLE ROOT ELEMENTS -->
        <h2 ref="fragment" class="mt-5">Experimental Features</h2>
        <h5 class="mt-3">Wrapping Multiple Root Elements (Fragment Hack)</h5>
        <p class="docs-p">
          As you may know, Vue does not support a stateful
          <code class="docs-code--inline">Fragment</code> component, which allows
          you to render a component with multiple root elements, overruling the
          "single root element" principle dictated at the outset of component-based architecture.
          It was introduced to React during a full re-write.
          You can learn about it from
          <a href="https://reactjs.org/docs/fragments.html" target="_blank">React docs</a>.
          Vue is likely to follow suit in a similar manner (probably with Vue 3).
          This feature request is currently discussed
          <a href="https://github.com/vuejs/vue/issues/7088" target="_blank">here</a>.
          Meanwhile, I decided to hack a Fragment component, which is also
          incorporated into this component, thanks to Github user
          <a href="https://github.com/y-nk" target="_blank">y-nk</a>.
          I elaborated his
          <a href="https://github.com/y-nk/vue-fragments" target="_blank">solution</a>
          so it can also show/hide content
          (using directives like <code class="docs-code--inline">v-show</code>
          or <code class="docs-code--inline">v-if</code> won't work here).          
        </p>
        <h5>🚧 Note</h5>
        <p class="docs-p">
          Since this is a hack, it is expected to be more of an experimental feature
          than a fully supported one.
        </p>

        <!-- BROWSER SUPPORT -->
        <h2 class="mt-5">Browser Support</h2>
        <p class="docs-p">
          This component relies on
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia">matchMedia API</a>
          (IE 10+). For older browsers and IE, you will need a <a href="https://github.com/weblinc/media-match" target="_blank">polyfill</a>.
        </p>

        <!-- LINKS -->
        <h2 class="mt-5">Related Links</h2>
        <ul class="docs-p">          
          <li>
            <a href="http://dpi.lv/" target="_blank">dpi.lv</a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries" target="_blank">Using media queries</a>
          </li>
          <li>
            <a href="https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints" target="_blank">Bootstrap 4 responsive breakpoints</a>
          </li>
          <li>
            <a href="https://zellwk.com/blog/responsive-grid-system/" target="_blank">How to build a responsive grid system</a>
          </li>
        </ul>        

        <!-- SUPPORT -->
        <h2 class="mt-5">Support</h2>
        <p class="docs-p">
          Please open an
          <a :href="pkg.bugs.url" target="_blank">issue</a> for support.
        </p>

        <!-- LICENSE -->
        <h2 class="mt-5">License</h2>
        <p class="docs-p">
          Copyright (c) 2018 <a href="https://github.com/adi518" target="_blank">{{pkg.author}}</a> by <a href="https://opensource.org/licenses/MIT" target="_blank">{{pkg.license}}</a>
        </p>

      </div>
    </div>

    <!-- VERSION -->
    <div class="docs-version">{{pkg.version}}</div>

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

import VGitRibbon from '@/components/GitRibbon'
import VOrientationLock from '@/components/OrientationLock'
import { VBreakpoint, VShowAt, VHideAt, Model } from '@/import'

import Prism from 'prismjs'
import capitalize from 'capitalize'
import { VhChromeFix } from '@/assets/javascript/VhChromeFix'

export default {
  name: 'VDocs',
  components: {
    VShowAt,
    VHideAt,
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
      install: require('@/markdowns/install.md'),
      examples: {
        default: {
          script: require('@/markdowns/examples/default/script.md'),
          install: require('@/markdowns/examples/default/install.md'),
          template: require('@/markdowns/examples/default/template.md')
        },
        showAt: {
          script: require('@/markdowns/examples/show-at/script.md'),
          template: require('@/markdowns/examples/show-at/template.md'),
          multiple: require('@/markdowns/examples/show-at/multiple.template.md')
        },
        vModel: {
          script: require('@/markdowns/examples/v-model/script.md'),
          template: require('@/markdowns/examples/v-model/template.md')
        },
        events: {
          basic: require('@/markdowns/examples/events/basic.md'),
          breakpoint: require('@/markdowns/examples/events/breakpoint.md')
        },
        configuration: {
          extend: require('@/markdowns/examples/configuration/extend.md'),
          script: require('@/markdowns/examples/configuration/script.md')
        }
      },
      api: {
        props: {
          meta: require('@/markdowns/api/props.md'),
          breakpoints: require('@/markdowns/api/props.breakpoints.md')
        },
        events: {
          meta: require('@/markdowns/api/events.md'),
          payload: require('@/markdowns/api/events.payload.md'),
          breakpoint: {
            payload: require('@/markdowns/api/events.payload.breakpoint.md')
          }
        }
      }
    }
  }),
  created() {
    this.vhChromeFix = undefined
  },
  mounted() {
    window.setTimeout(Prism.highlightAll)

    this.vhChromeFix = new VhChromeFix([{ selector: '.js-vh-fix', vh: 100 }])
  },
  destroyed() {
    this.vhChromeFix.destroy()
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
          return '3rem' // Bootstrap 4 "xs"
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

// $code-font-size: 100%;

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

.docs-demo {
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

.docs-p {
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

.docs-emoji {
  animation-duration: 2s;
  animation-name: docs-nod-yes;
  animation-fill-mode: forwards;
  transform-origin: 50% 50% -0.5rem;
}
/* Layout end */

/* Markdown */
.docs-markdown {
  margin-bottom: 2rem;
}

.docs-code--inline {
  padding: 0.2rem 0.4rem;
  color: $app-color-spring-wood;
  background-color: $app-color-gray;
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
