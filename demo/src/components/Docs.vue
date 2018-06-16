<template>
  <div class="d">

    <!-- FIRST PAGE -->
    <div class="d-container d--has-jumbotron vh-fix">
      <!-- JUMBOTRON -->
      <div class="d-jumbotron">
        <img class="d-v-logo" src="../assets/logo-gradient.png">
        <h1 class="d-control mt-1">V-Breakpoint</h1>
        <p class="d-control text-center">
          A render-less component for<br>composing CSS breakpoint state.
        </p>
        <v-breakpoint v-model="model" @change="payload => breakpoint = payload.breakpoint">
          <div class="text-center" slot-scope="api">
            <div class="d-state">
              ( {{ api.breakpoint ? `${capitalize(api.breakpoint)}` : 'No match' }} )
            </div>
            <div class="d-emoji mt-3">
              <span :style="`font-size: ${emojiSize}; transition: font-size .2s`">{{ api.noMatch ? '😿' : '😸' }}</span>
            </div>
          </div>
        </v-breakpoint>
        <p class="mt-20">
          <a class="d-github-button github-button" :href="env === 'development' ? '' : pkg.repository.url" data-icon="octicon-star" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
        </p>
        <p class="d-credit mt-3">
          Made with ❤️ by <a class="d-anchor--author" href="https://github.com/adi518" target="_blank">Adi Sahar</a>
        </p>
      </div>
      <a class="d-fixed-anchor d-c-pointer" @click="scrollTo('docs')" tabindex="">Install, Examples & Documentation</a>
    </div>

    <!-- SECOND PAGE -->
    <div ref="docs" class="d-container d-min-100vh pb-5 vh-for-mobile">
      <div class="container d-clearfix">

        <!-- INSTALL -->
        <h2 class="d-control mt-3 mb-3">Install</h2>
        <div class="d-markdown d-markdown--is-one-liner d-clearfix mt-2">
          <v-markdown>```$ npm install --save vue-breakpoint-component```</v-markdown>
        </div>

        <!-- USAGE -->
        <h2 class="d-control mt-4">Usage</h2>
        <p>
          To use the component in your templates, simply import
          and register it with your component:
        </p>
        <h4 class="mt-3">Script</h4>
        <div class="d-markdown">
          <v-markdown>```{{markdowns.examples.default.script}}```</v-markdown>
        </div>
        <h4 class="mt-3">Template</h4>
        <div class="d-markdown">
          <v-markdown emoji>```{{markdowns.examples.default.template}}```</v-markdown>
        </div>

        <!-- USAGE (SHOW-AT) -->
        <h2 class="d-control mt-5">Show-At Usage</h2>
        <p>
          To use the component in your templates, simply import
          and register itwith your component:
        </p>
        <h4 class="mt-3">Script</h4>
        <div class="d-markdown">
          <v-markdown>```{{markdowns.examples.showAt.script}}```</v-markdown>
        </div>
        <h4 class="mt-3">Template</h4>
        <div class="d-markdown">
          <v-markdown emoji>```{{markdowns.examples.showAt.template}}```</v-markdown>
        </div>
        <h3 class="mt-4">Multiple Root Elements</h3>
        <p class="d-p">
          Notice that you can also show/hide <b>multiple</b> elements!
          This works thanks to a Fragment-like component hack, described <a class="d-c-pointer" @click="scrollTo('fragment')" tabindex="">here</a>.
        </p>
        <div class="d-markdown">
          <v-markdown emoji>```{{markdowns.examples.showAt.multiple}}```</v-markdown>
        </div>

        <!-- V-MODEL -->
        <h2 class="d-control mt-5">V-Model</h2>
        <p>
          You can also take leverage of the breakpoint state without composing inside it, using a V-model.
        </p>
        <h4>Script</h4>
        <div class="d-markdown">
          <v-markdown>```{{markdowns.examples.vModel.script}}```</v-markdown>        
        </div>
        <h4 class="mt-3">Template</h4>
        <div class="d-markdown">
          <v-markdown emoji>```{{markdowns.examples.vModel.template}}```</v-markdown>        
        </div>

        <!-- API PROPS -->
        <h2 class="d-control mt-5">API Props</h2>
        <div class="d-markdown">
          <v-markdown>```{{markdowns.api.props.meta}}```</v-markdown>
        </div>

        <!-- API EVENTS -->
        <h2 class="d-control mt-5">API Events</h2>
        <p>
          The component emits two basic events, <code class="d-code--inline">input</code>
          and <code class="d-code--inline">change</code>.
          The <code class="d-code--inline">input</code> event is required for
          <code class="d-code--inline">v-model</code> usage, but other than that,
          it's fairly similar to <code class="d-code--inline">change</code> event.
          Each of these events benefit different composition styles.
        </p>
        <div class="d-markdown d-markdown--is-one-liner mt-2">
          <v-markdown>```{{markdowns.examples.events.basic}}```</v-markdown>
        </div>

        <!-- API EVENTS PAYLOADS -->
        <h4 class="mt-4">Payloads</h4>
        <h5 class="mt-3">Input and Change Events</h5>
        <p>
          Each of these events has the same payload.
          Besides breakpoint state, they also supply some auxiliary state, like <b>viewport</b>
          and current <b>window dimensions</b> (which are also aliased for convenience). <code class="d-code--inline">Param[Type]: (state[Object])</code>. Example:
        </p>
        <div class="d-markdown mt-2">
          <v-markdown>```{{markdowns.api.events.payload.basic}}```</v-markdown>
        </div>

        <!-- API EVENT BREAKPOINT -->
        <h5 class="mt-4">Breakpoint Event</h5>
        <p>
          This event has a fairly simply payload. <code class="d-code--inline">Param[Type]: (state[String])</code>. Example:
        </p>
        <div class="d-markdown mt-2">
          <v-markdown>```{{markdowns.api.events.payload.breakpoint}}```</v-markdown>
        </div>

        <!-- API EVENT BREAKPOINT-NAMESPACE EVENT -->
        <h5 class="mt-4">Breakpoint-Namespace Event</h5>
        <p>
          Besides those events, the component also emits a breakpoint-namespace event
          per breakpoint defined. Thus, you can do something like:
        </p>        
        <div class="d-markdown d-markdown--is-one-liner mt-2">
          <v-markdown>```{{markdowns.examples.events.breakpoint}}```</v-markdown>
        </div>

        <!-- CONFIGURATION -->
        <h2 class="d-control mt-4">Configuration</h2>
        <p class="d-p">
          The default breakpoints are based on <a href="https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints">Bootstrap 4 (Stable)</a>
          To customize the component to your specific needs, you can pass a new set of breakpoints
          to prop <code class="d-code--inline">breakpoints</code>.
          However, you will have to do so everytime you import the component,
          therefore it can become repetitive quite fast, which is against the concept of DRY.
          To solve this, you will have to create a "subclass" of the base constructor
          and export it.
        </p>
        <h5>Note</h5>
        <p class="d-p">
          For the following routine, you should familiarize with the <code class="d-code--inline">Vue.extend()</code>
          API. See its documentation <a href="https://vuejs.org/v2/api/#Vue-extend" target="_blank">here</a>.
        </p>
        <h4>Bootstrap 4 Breakpoints</h4>
        <div class="d-markdown">
          <v-markdown emoji>```{{markdowns.api.props.breakpoints}}```</v-markdown>        
        </div>
        <h4 class="mt-4">Custom Breakpoints</h4>
        <p class="d-p">
          You can define an <b>infinite</b> amount of breakpoints, it's completely up to you.
          To create a "subclass" of <code class="d-code--inline">V-Breakpoint</code>,
          start by creating a new component asset, e.g.: <code class="d-code--inline">VBreakpoint.js</code>.
          Then, copy the following snippet and adjust configuration to your needs.
        </p>
        <h5>Note</h5>
        <p class="d-p">          
          A great site to get started with popular breakpoint stats is
          <a href="http://dpi.lv/" target="_blank">dpi.lv</a>.
        </p>
        <div class="d-markdown">
          <v-markdown emoji>```{{markdowns.examples.configuration.extend}}```</v-markdown>        
        </div>        
        <h3 class="mt-4">Usage</h3>
        <p class="d-p">
          Import <b>locally</b> and use as you would normally.
        </p>
        <div class="d-markdown">
          <v-markdown emoji>```{{markdowns.examples.configuration.script}}```</v-markdown>        
        </div>

        <!-- MULTIPLE ROOT ELEMENTS -->
        <h2 ref="fragment" class="mt-5">Wrapping Multiple Root Elements (Fragment Hack)</h2>
        <p class="d-p">
          As you may know, Vue does not support a stateful
          <code class="d-code--inline">Fragment</code> component, which allows
          you to render a component with multiple root elements, overruling the
          "single root element" principle dictated initially.
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
          (using directives like <code class="d-code--inline">v-show</code>
          or <code class="d-code--inline">v-if</code> won't work here).          
        </p>
        <h5>🚧 Note</h5>
        <p class="d-p">
          Since this is a hack, it is expected to be more of an experimental feature
          than a fully supported one. That doesn't mean I won't relate to issues
          or avoid fixing them at all.
        </p>

        <!-- SUPPORT -->
        <h2 class="mt-5">Related Links</h2>
        <ul class="d-p">
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
        <p class="d-p">
          Please open an
          <a class="d-contrast-anchor" :href="pkg.bugs.url" target="_blank">issue</a> for support.
        </p>

        <!-- LICENSE -->
        <h2 class="mt-5">License</h2>
        <p class="d-p">
          Copyright (c) 2018 <a class="d-contrast-anchor" href="https://github.com/adi518" target="_blank">{{pkg.author}}</a> by <a class="d-contrast-anchor" href="https://opensource.org/licenses/MIT" target="_blank">{{pkg.license}}</a>
        </p>

      </div>
    </div>
    <div class="d-version">{{pkg.version}}</div>
    <v-git-ribbon fill-color="lightslategrey" octo-color="#18202a" :href="pkg.repository.url" />
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

//  Components
import VShowAt from './ShowAt'
import {
  VShowAt as VShowAtExt,
  VBreakpoint as VBreakpointExt
} from './Extended'
import VFragment from './Fragment'
import VMultiple from './Multiple'
import VMarkdown from 'vue-markdown'
import VGitRibbon from './GitRibbon'
import VBreakpoint from './Breakpoint'
import VSlider from 'vue-slider-component'

// Global CSS
import 'prismjs/themes/prism-okaidia.css'

// Resources
import Prism from 'prismjs'
import { VHForMobile } from './VhFix'
import { VHChromeFix } from './VhFix2'
import capitalize from 'lodash.capitalize'

const pkg = {
  version: '1.0.0',
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
    VSlider,
    VMultiple,
    VFragment,
    VMarkdown,
    VGitRibbon,
    VBreakpoint
  },
  data: () => ({
    pkg,
    value: 1,
    env: process.env.NODE_ENV,
    model: undefined,
    breakpoint: undefined,
    markdowns: {
      examples: {
        default: {
          script: require('@/markdowns/examples/default/script.js'),
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
          payload: {
            basic: require('@/markdowns/api/events.basic.payload.js'),
            breakpoint: require('@/markdowns/api/events.breakpoint.payload.js')
          }
        }
      }
    }
  }),
  mounted() {
    Prism.highlightAll()

    /* eslint-disable no-new */
    // new VHForMobile()
    const vhElements = [
      {
        selector: '.vh-fix', // Mandatory, CSS selector
        vh: 100 // Mandatory, height in vh units
      }
    ]

    new VHChromeFix(vhElements)
  },
  computed: {
    emojiSize() {
      switch (this.breakpoint) {
        case 'small':
          return '2rem'
        case 'medium':
          return '4rem'
        case 'large':
          return '6rem'
        default:
          return '3rem'
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
    capitalize
  }
}
</script>

<style lang="scss">
// https://gist.github.com/rxaviers/7360908
// https://codepen.io/borryshasian/pen/NPxEXg
// https://gist.github.com/roachhd/1f029bd4b50b8a524f3c
// https://tympanus.net/codrops/css_reference/transform-origin/

$d-min-width: 320px;

// Override Bootstrap variables
$spacer: 1rem;
$spacers: ();
$spacers: map-merge((20: ($spacer * 2)), $spacers);

$pre-color: aliceblue;

@import '~@/assets/sass/bootstrap';

/* Reset Bootstrap to User-agent */
.d {
  pre {
    margin-top: 1rem;
  }
}
/* end */

/* Override Prismjs styles */
.d-markdown {
  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: transparent;
  }
}
/* end */

a {
  color: aliceblue;
  transition: color 0.5s;

  &:hover {
    color: sandybrown;
  }
}

p {
  font-size: 1.1rem;
}

.d {
  min-width: $d-min-width;
}

.d-c-pointer {
  cursor: pointer;
}

.d-version {
  top: 1rem;
  left: 1rem;
  position: absolute;
  color: lighten(#35495e, 16%);
}

.d-credit {
  color: lightslategrey;

  @include media-breakpoint-down(xs) {
    font-size: 0.9rem;
  }
}

.d-code--inline {
  color: #f8f8f2;
  padding: 0.2rem 0.4rem;
  background-color: #888;
}

.d-clearfix {
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

.d-emoji {
  &:hover {
    animation: nodYes 2s;
    animation-fill-mode: forwards;
    transform-origin: 50% 50% -0.5rem;
  }
}

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

.d-container {
  position: relative;
  background-color: darken(sandybrown, 6.66%);
}

.d-min-100vh {
  min-height: 100vh;
}

.d--has-jumbotron {
  display: flex;
  align-items: center;
  background-color: darken(#35495e, 16%);
}

.d-jumbotron {
  width: 100%;
  display: flex;
  color: #42b883;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.d-state {
  font-size: 1.2rem;
}

.d-markdown {
  font-size: 1.3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #18202a;

  p {
    margin-top: 1rem;
  }

  pre {
    white-space: pre-wrap;
  }
}

.d-markdown--is-one-liner {
  code {
    color: aliceblue;
    font-size: inherit;
  }
}

.d-anchor--author {
  position: relative;
  color: lightslategrey;

  &:hover {
    text-decoration: none;
    color: lightslategrey;

    &::after {
      border-bottom-color: aliceblue;
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
    border-bottom: 1px dotted lightslategrey;
  }
}

.d-fixed-anchor {
  width: 100%;
  bottom: 0.8rem;
  color: aliceblue;
  position: absolute;
  text-align: center;
}

.d-p {
  a {
    color: aliceblue;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    background-color: #18202a;

    &:hover {
      color: #f92672;
      text-decoration: none;
    }
  }
}

.d-v-logo {
  width: 4rem;

  @include media-breakpoint-down(xs) {
    width: 3.7rem;
  }
}

h1.d-control {
  font-weight: 300;
  font-size: 2.2rem;
  color: aliceblue;

  @include media-breakpoint-down(xs) {
    font-size: 1.9rem;
  }
}

h2.d-control {
  font-weight: 400;
}

p.d-control {
  font-size: 1.5rem;
  margin-top: 0;
  margin-left: 2rem;
  margin-right: 2rem;
  color: lightslategrey;

  @include media-breakpoint-down(xs) {
    font-size: 1.2rem;
  }
}
</style>
