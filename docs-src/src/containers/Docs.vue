<template>
  <div class="docs">

    <!-- FIRST PAGE -->
    <div class="docs-container docs-container--has-jumbotron docs-100vh js-vh-fix">
      <!-- JUMBOTRON -->
      <div class="docs-jumbotron">
        <img class="docs-v-logo" src="../assets/images/logo-gradient.png">
        <h1 class="docs-h1 mt-1">V-Breakpoint</h1>
        <p class="docs-tagline text-center">
          A render-less component for<br>composing CSS breakpoint state.
        </p>
        <v-breakpoint v-model="model"></v-breakpoint>
        <div class="text-center">
          <div class="docs-state">
            ( {{ normalize(model.breakpoint) }} )
          </div>
          <div class="docs-emoji mt-3">
            <span :style="`font-size: ${emojiSize}; transition: font-size .2s`">{{ model.noMatch ? '😸' : '😸' }}</span>
          </div>
        </div>        
        <p class="mt-20">
          <a class="docs-github-button github-button" :href="NODE_ENV === 'development' ? '' : pkg.repository.url" data-icon="octicon-star" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
        </p>
        <p class="docs-credit mt-3">
          Made with ❤️ by <a class="docs-anchor--author" href="https://github.com/adi518" target="_blank">Adi Sahar</a>
        </p>
      </div>
      <a class="docs-fixed-anchor docs-c-pointer" @click="scrollTo('docs')" tabindex="">Install, Examples & Documentation</a>
    </div>

    <!-- SECOND PAGE -->
    <div ref="docs" class="docs-container docs-min-100vh pb-5 vh-for-mobile">
      <div class="container docs-clearfix">

        <!-- INSTALL -->
        <h2 class="docs-h2 mt-3 mb-3">Install</h2>
        <div class="docs-markdown docs-markdown--one-liner docs-clearfix mt-2">
          <v-markdown>```$ npm install --save vue-breakpoint-component```</v-markdown>
        </div>

        <!-- USAGE -->
        <h2 class="docs-h2 mt-4">Usage</h2>
        <p>
          To use the component in your templates, simply import and
          register it with your component:
        </p>
        <h4 class="mt-3">Script</h4>
        <div class="docs-markdown">
          <v-markdown>```{{markdowns.examples.default.script}}```</v-markdown>
        </div>
        <h4 class="mt-3">Template</h4>
        <div class="docs-markdown">
          <v-markdown emoji>```{{markdowns.examples.default.template}}```</v-markdown>
        </div>        
        <h4 class="mt-3">Global Install</h4>
        <p class="docs-p">
          You can also choose to install the component globally. This will install two
          components <code class="docs-code--inline">v-breakpoint</code> and
          <code class="docs-code--inline">v-show-at</code>.
        </p>
        <div class="docs-markdown">
          <v-markdown emoji>```{{markdowns.examples.default.install}}```</v-markdown>
        </div>

        <!-- USAGE (SHOW-AT) -->
        <h2 class="docs-h2 mt-5">Show-At Usage</h2>
        <p>
          To use the component in your templates, simply import
          and register itwith your component:
        </p>
        <h4 class="mt-3">Script</h4>
        <div class="docs-markdown">
          <v-markdown>```{{markdowns.examples.showAt.script}}```</v-markdown>
        </div>
        <h4 class="mt-3">Template</h4>
        <div class="docs-markdown">
          <v-markdown emoji>```{{markdowns.examples.showAt.template}}```</v-markdown>
        </div>
        <h3 class="mt-4">Multiple Root Elements</h3>
        <p class="docs-p">
          Notice that you can also show/hide <b>multiple</b> elements!
          This works thanks to a Fragment-like component hack, described <a class="docs-c-pointer" @click="scrollTo('fragment')" tabindex="">here</a>.
        </p>
        <div class="docs-markdown">
          <v-markdown emoji>```{{markdowns.examples.showAt.multiple}}```</v-markdown>
        </div>

        <!-- V-MODEL -->
        <h2 class="docs-h2 mt-5">V-Model</h2>
        <p>
          You can also take leverage of the breakpoint state without composing inside it,
          using a <code class="docs-code--inline">v-model</code>.
        </p>
        <h4>Script</h4>
        <div class="docs-markdown">
          <v-markdown>```{{markdowns.examples.vModel.script}}```</v-markdown>        
        </div>
        <h4 class="mt-3">Template</h4>
        <div class="docs-markdown">
          <v-markdown emoji>```{{markdowns.examples.vModel.template}}```</v-markdown>        
        </div>

        <!-- API PROPS -->
        <h2 class="docs-h2 mt-5">API Props</h2>
        <div class="docs-markdown">
          <v-markdown>```{{markdowns.api.props.meta}}```</v-markdown>
        </div>

        <!-- API EVENTS -->
        <h2 class="docs-h2 mt-5">API Events</h2>
        <p>
          The component emits two basic events, <code class="docs-code--inline">input</code>
          and <code class="docs-code--inline">change</code>.
          The <code class="docs-code--inline">input</code> event is required for
          <code class="docs-code--inline">v-model</code> usage, but other than that,
          it's fairly similar to <code class="docs-code--inline">change</code> event.
          Each of these events benefit different composition styles.
        </p>
        <div class="docs-markdown docs-markdown--is-one-liner mt-2">
          <v-markdown>```{{markdowns.examples.events.basic}}```</v-markdown>
        </div>

        <!-- API EVENTS PAYLOADS -->
        <h4 class="mt-4">Payloads</h4>
        <h5 class="mt-3">Input and Change Events</h5>
        <p>
          Each of these events has the same payload. Besides breakpoint state,
          they also supply some auxiliary state, like <b>viewport</b>
          and current <b>inner window dimensions</b> (which are also aliased for convenience).
          <code class="docs-code--inline">(state[Object])</code>. Example:
        </p>
        <div class="docs-markdown mt-2">
          <v-markdown>```{{markdowns.api.events.basic.payload}}```</v-markdown>
        </div>

        <!-- API EVENT BREAKPOINT -->
        <h5 class="mt-4">Breakpoint Event</h5>
        <p>
          This event has a fairly simple payload. <code class="docs-code--inline">(state[String])</code>. Example:
        </p>
        <div class="docs-markdown mt-2">
          <v-markdown>```{{markdowns.api.events.breakpoint.payload}}```</v-markdown>
        </div>

        <!-- API EVENT BREAKPOINT-NAMESPACE EVENT -->
        <h5 class="mt-4">Breakpoint-Namespace Event</h5>
        <p>
          Besides those events, the component also emits a breakpoint-namespace event
          per breakpoint defined. Thus, you can do something like:
        </p>        
        <div class="docs-markdown docs-markdown--is-one-liner mt-2">
          <v-markdown>```{{markdowns.examples.events.breakpoint}}```</v-markdown>
        </div>

        <!-- CONFIGURATION -->
        <h2 class="docs-h2 mt-4">Configuration</h2>
        <p class="docs-p">
          The default breakpoints are based on <a href="https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints">Bootstrap 4 (Stable)</a>
          To customize the component to your specific needs, you can pass a new set of breakpoints
          by creating a "subclass" of the base constructor. Here's how.
        </p>
        <h5>Note</h5>
        <p class="docs-p">
          While isn't required, it's a good idea to familiarize yourself with the <code class="docs-code--inline">Vue.extend()</code>
          API. See its documentation <a href="https://vuejs.org/v2/api/#Vue-extend" target="_blank">here</a>.
        </p>
        <h4>Bootstrap 4 Breakpoints</h4>
        <div class="docs-markdown">
          <v-markdown emoji>```{{markdowns.api.props.breakpoints}}```</v-markdown>        
        </div>
        <h4 class="mt-4">Custom Breakpoints</h4>
        <p class="docs-p">
          You can define an <b>infinite</b> amount of breakpoints, it's completely up to you.
          To create a "subclass" of <code class="docs-code--inline">V-Breakpoint</code>,
          start by creating a new component asset, e.g.: <code class="docs-code--inline">VBreakpoint.js</code>.
          Then, copy the following snippet and adjust configuration to your needs.
        </p>
        <h5>Note</h5>
        <p class="docs-p">
          For media-queries syntax see
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries" target="_blank">MDN</a>.
        </p>
        <div class="docs-markdown">
          <v-markdown emoji>```{{markdowns.examples.configuration.extend}}```</v-markdown>        
        </div>        
        <h3 class="mt-4">Usage</h3>
        <p class="docs-p">
          Import <b>locally</b> and use as you would normally.
        </p>
        <div class="docs-markdown">
          <v-markdown emoji>```{{markdowns.examples.configuration.script}}```</v-markdown>        
        </div>

        <!-- MULTIPLE ROOT ELEMENTS -->
        <h2 ref="fragment" class="mt-5">Wrapping Multiple Root Elements (Fragment Hack)</h2>
        <p class="docs-p">
          As you may know, Vue does not support a stateful
          <code class="docs-code--inline">Fragment</code> component, which allows
          you to render a component with multiple root elements, overruling the
          "single root element" principle dictated at the outset of component-based architecture.
          It was introduced to React during a full re-write.
          You can learn about it from
          <a href="https://reactjs.org/docs/fragments.html" target="_blank">React docs</a>.
          Vue is likely to follow suit in a similar manner. Perhaps with Vue 3.
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
          than a fully supported one. That doesn't mean I won't be fixing issues
          or prevent contributions.
        </p>

        <!-- SUPPORT -->
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
          <a class="docs-contrast-anchor" :href="pkg.bugs.url" target="_blank">issue</a> for support.
        </p>

        <!-- LICENSE -->
        <h2 class="mt-5">License</h2>
        <p class="docs-p">
          Copyright (c) 2018 <a class="docs-contrast-anchor" href="https://github.com/adi518" target="_blank">{{pkg.author}}</a> by <a class="docs-contrast-anchor" href="https://opensource.org/licenses/MIT" target="_blank">{{pkg.license}}</a>
        </p>

      </div>
    </div>
    <div class="docs-version">{{pkg.version}}</div>
    <v-git-ribbon fill-color="lightslategrey" octo-color="#18202a" :href="pkg.repository.url" />        
    <!-- <v-orientation-lock></v-orientation-lock> -->
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
// https://gist.github.com/oliveratgithub/0bf11a9aff0d6da7b46f1490f86a71eb
// https://stackoverflow.com/questions/43619644/i-am-getting-an-invalid-host-header-message-when-running-my-react-app-in-a-we

// Meta-data
// import pkg from '../../package'

// Global CSS
import 'prismjs/themes/prism-okaidia.css'

// Components
import VFragment from '@/components/Fragment'
import VGitRibbon from '@/components/GitRibbon'
import VOrientationLock from '@/components/OrientationLock'
import { VBreakpoint, VShowAt, Model } from '@/components/local'

// Vendor
import VMarkdown from 'vue-markdown'
import VSlider from 'vue-slider-component'

// Resources
import Prism from 'prismjs'
import capitalize from 'lodash.capitalize'
import { VhChromeFix } from '@/assets/js/VhChromeFix'

const pkg = {
  version: '0.0.0',
  repository: {
    type: 'git',
    url: 'https://github.com/adi518/vue-breakpoint-component'
  },
  bugs: {
    url: 'https://github.com/adi518/vue-breakpoint-component/issues'
  },
  author: 'adi518',
  license: 'MIT'
}

// Implementation
export default {
  name: 'VDemo',
  components: {
    VShowAt,
    VFragment,
    VMarkdown,
    VGitRibbon,
    VBreakpoint,
    VOrientationLock
  },
  data: () => ({
    pkg,
    model: new Model(),
    NODE_ENV: process.env.NODE_ENV,
    markdowns: {
      examples: {
        default: {
          script: require('@/markdowns/examples/default/script.js'),
          install: require('@/markdowns/examples/default/install.js'),
          template: require('@/markdowns/examples/default/template.js')
        },
        showAt: {
          script: require('@/markdowns/examples/show-at/script.js'),
          template: require('@/markdowns/examples/show-at/template.js'),
          multiple: require('@/markdowns/examples/show-at/multiple.template.js')
        },
        vModel: {
          script: require('@/markdowns/examples/v-model/script.js'),
          template: require('@/markdowns/examples/v-model/template.js')
        },
        events: {
          basic: require('@/markdowns/examples/events/basic.js'),
          breakpoint: require('@/markdowns/examples/events/breakpoint.js')
        },
        configuration: {
          extend: require('@/markdowns/examples/configuration/extend.js'),
          script: require('@/markdowns/examples/configuration/script.js'),
          template: require('@/markdowns/examples/configuration/template.js')
        }
      },
      api: {
        props: {
          meta: require('@/markdowns/api/props.js'),
          breakpoints: require('@/markdowns/api/props.breakpoints.js')
        },
        events: {
          meta: require('@/markdowns/api/events.js'),
          basic: {
            payload: require('@/markdowns/api/events.basic.payload.js')
          },
          breakpoint: {
            payload: require('@/markdowns/api/events.breakpoint.payload.js')
          }
        }
      }
    }
  }),
  created() {
    this.vhChromeFix = undefined
  },
  mounted() {
    Prism.highlightAll()

    this.vhChromeFix = new VhChromeFix([{ selector: '.js-vh-fix', vh: 100 }])
  },
  destroyed() {
    this.vhChromeFix.destroy()
  },
  computed: {
    emojiSize() {
      switch (this.model.breakpoint) {
        case 'small':
          return '5rem'
        case 'medium':
          return '6rem'
        case 'large':
          return '7rem'
        case 'xlarge':
          return '8rem'
        default:
          return '4rem'
      }
    }
  },
  methods: {
    scrollTo(ref) {
      const element = this.getElementByRef(ref)
      window.scrollTo(0, element.offsetTop)
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
@import '~@/assets/sass/variables.scss';

/* Override Bootstrap variables */
$spacer: 1rem;
$spacers: ();
$spacers: map-merge((20: ($spacer * 2)), $spacers);

$pre-color: $docs-color-aliceblue;

@import '~@/assets/sass/bootstrap';

/* Reset Bootstrap to User-agent */
.docs {
  pre {
    margin-top: 1rem;
  }
}
/* Reset Bootstrap to User-agent end */

/* Override Prismjs styles */
.docs-markdown {
  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: transparent;
  }
}
/* Override Prismjs styles end */

/* Abstracts */
a {
  color: $docs-color-aliceblue;
  transition: color 0.5s;

  &:hover {
    color: $docs-color-sandybrown;
  }
}

p {
  font-size: 1.1rem;
}
/* Abstracts end */

/* Headings */
.docs-h1 {
  font-weight: 300;
  font-size: 2.2rem;
  color: $docs-color-aliceblue;

  @include media-breakpoint-down(xs) {
    font-size: 1.9rem;
  }
}

.docs-h2 {
  font-weight: 400;
}
/* Headings end */

/* Layout */
.docs {
  min-width: $docs-min-width;
}

.docs-v-logo {
  width: 4rem;

  @include media-breakpoint-down(xs) {
    width: 3.7rem;
  }
}

.docs-tagline {
  font-size: 1.5rem;
  margin-top: 0;
  margin-left: 2rem;
  margin-right: 2rem;
  color: $docs-color-lightslategrey;

  @include media-breakpoint-down(xs) {
    font-size: 1.2rem;
  }
}

.docs-version {
  top: 1rem;
  left: 1rem;
  position: absolute;
  color: lighten($docs-color-pickled-bluewood, 16%);
}

.docs-credit {
  color: $docs-color-lightslategrey;

  @include media-breakpoint-down(xs) {
    font-size: 0.9rem;
  }
}

.docs-fixed-anchor {
  width: 100%;
  bottom: 0.8rem;
  font-size: 1.2rem;
  position: absolute;
  text-align: center;
  color: $docs-color-aliceblue;
}

.docs-emoji {
  &:hover {
    animation: nodYes 2s;
    animation-fill-mode: forwards;
    transform-origin: 50% 50% -0.5rem;
  }
}

.docs-container {
  position: relative;
  background-color: darken($docs-color-sandybrown, 6.66%);
}

.docs-container--has-jumbotron {
  display: flex;
  align-items: center;
  background-color: darken($docs-color-pickled-bluewood, 16%);
}

.docs-jumbotron {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: $docs-color-ocean-green;
}

.docs-state {
  font-size: 1.2rem;
}

.docs-anchor--author {
  position: relative;
  color: $docs-color-lightslategrey;

  &:hover {
    text-decoration: none;
    color: $docs-color-lightslategrey;

    &::after {
      border-bottom-color: $docs-color-aliceblue;
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
    border-bottom: 1px dotted $docs-color-lightslategrey;
  }
}

.docs-p {
  a {
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    color: $docs-color-aliceblue;
    background-color: $docs-color-mirage;

    &:hover {
      text-decoration: none;
      color: $docs-color-radical-red;
    }
  }
}
/* Layout end */

/* Markdown */
.docs-markdown {
  font-size: 1.3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: $docs-color-mirage;

  p {
    margin-top: 1rem;
  }

  pre {
    white-space: pre-wrap;
  }
}

.docs-markdown--one-liner {
  code {
    font-size: inherit;
    color: $docs-color-aliceblue;
  }
}

.docs-code--inline {
  padding: 0.2rem 0.4rem;
  color: $docs-color-spring-wood;
  background-color: $docs-color-gray;
}
/* Markdown end */

/* Utilities */
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
  // https://www.rachelandrew.co.uk/archives/2017/01/24/the-end-of-the-clearfix-hack/
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
/* Utilities end */

/* Animations */
@keyframes nodYes {
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
