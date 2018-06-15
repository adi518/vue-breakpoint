<template>
  <div class="demo">

    <!-- FIRST PAGE -->
    <div class="demo-container demo--has-jumbotron">
      <!-- JUMBOTRON -->
      <div class="demo-jumbotron">
        <img src="../assets/logo-gradient.png" style="width: 4rem">
        <h1 class="demo-control mt-1">V-Breakpoint</h1>
        <p class="demo-control" style="text-align: center">
          A render-less component for<br>composing CSS breakpoint state.
        </p>
        <v-breakpoint v-model="model" @change="payload => breakpoint = payload.breakpoint">
          <div slot-scope="api" class="text-center">
            <div class="demo-state">
              ( {{ api.breakpoint ? `${capitalize(api.breakpoint)}` : 'No match' }} )
            </div>
            <div class="demo-emoji mt-3">
              <span :style="`font-size: ${emojiSize}; transition: font-size .2s`">{{ api.noMatch ? '😿' : '😸' }}</span>
            </div>
          </div>
        </v-breakpoint>
        <p style="margin-top: 2rem">
          <a class="demo-github-button github-button" :href="process.env.NODE_ENV === 'production' ? pkg.repository.url : ''" data-icon="octicon-star" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
        </p>
        <p style="margin-top: 1rem; color: lightslategrey">
          Made with ❤️ by <a class="demo-anchor--author" href="https://github.com/adi518" target="_blank">Adi Sahar</a>
        </p>
      </div>
      <a class="demo-fixed-anchor" @click="scrollTo('docs')" tabindex="">Install, Examples & Documentation</a>
    </div>

    <!-- SECOND PAGE -->
    <div ref="docs" class="demo-container pb-5">
      <div class="container demo-clearfix">

        <!-- INSTALL -->
        <h2 class="demo-control mt-3 mb-3">Install</h2>
        <div class="demo-markdown demo-markdown--is-one-liner demo-clearfix mt-2">
          <v-markdown>```$ npm install --save vue-breakpoint-component```</v-markdown>
        </div>

        <!-- USAGE -->
        <h2 class="demo-control mt-4">Usage</h2>
        <p>
          To use the component in your templates, simply import
          and register it with your component:
        </p>
        <h4 class="mt-3">Script</h4>
        <div class="demo-markdown">
          <v-markdown>```{{markdowns.examples.default.script}}```</v-markdown>
        </div>
        <h4 class="mt-3">Template</h4>
        <div class="demo-markdown">
          <v-markdown emoji>```{{markdowns.examples.default.template}}```</v-markdown>
        </div>

        <!-- USAGE (SHOW-AT) -->
        <h2 class="demo-control mt-5">Show-At Usage</h2>
        <p>
          To use the component in your templates, simply import
          and register itwith your component:
        </p>
        <h4 class="mt-3">Script</h4>
        <div class="demo-markdown">
          <v-markdown>```{{markdowns.examples.showAt.script}}```</v-markdown>
        </div>
        <h4 class="mt-3">Template</h4>
        <div class="demo-markdown">
          <v-markdown emoji>```{{markdowns.examples.showAt.template}}```</v-markdown>
        </div>

        <!-- V-MODEL -->
        <h2 class="demo-control mt-5">V-Model</h2>
        <p>
          You can also take leverage of the breakpoint state without composing inside it, using a V-model.
        </p>
        <h4>Script</h4>
        <div class="demo-markdown">
          <v-markdown>```{{markdowns.examples.vModel.script}}```</v-markdown>        
        </div>
        <h4 class="mt-3">Template</h4>
        <div class="demo-markdown">
          <v-markdown emoji>```{{markdowns.examples.vModel.template}}```</v-markdown>        
        </div>

        <!-- API PROPS -->
        <h2 class="demo-control mt-5">API Props</h2>
        <div class="demo-markdown">
          <v-markdown>```{{markdowns.api.props.meta}}```</v-markdown>
        </div>

        <!-- API EVENTS -->
        <h2 class="demo-control mt-5">API Events</h2>
        <p>
          The component emits two basic events, <code class="demo-code--inline">input</code>
          and <code class="demo-code--inline">change</code>.
          The <code class="demo-code--inline">input</code> event is required for
          <code class="demo-code--inline">v-model</code> usage, but other than that,
          it's fairly similar to <code class="demo-code--inline">change</code> event.
          Each of these events benefit different composition styles.
        </p>
        <div class="demo-markdown demo-markdown--is-one-liner mt-2">
          <v-markdown>```{{markdowns.examples.events.basic}}```</v-markdown>
        </div>

        <!-- API EVENTS PAYLOADS -->
        <h4 class="mt-4">Payloads</h4>
        <h5 class="mt-3">Input and Change Events</h5>
        <p>
          Each of these events has the same payload.
          Besides breakpoint state, they also supply some auxiliary state, like <b>viewport</b>
          and current <b>window dimensions</b> (which are also aliased for convenience). <code class="demo-code--inline">Param[Type]: (state[Object])</code>. Example:
        </p>
        <div class="demo-markdown mt-2">
          <v-markdown>```{{markdowns.api.events.payload.basic}}```</v-markdown>
        </div>

        <!-- API EVENT BREAKPOINT -->
        <h5 class="mt-4">Breakpoint Event</h5>
        <p>
          This event has a fairly simply payload. <code class="demo-code--inline">Param[Type]: (state[String])</code>. Example:
        </p>
        <div class="demo-markdown mt-2">
          <v-markdown>```{{markdowns.api.events.payload.breakpoint}}```</v-markdown>
        </div>

        <!-- API EVENT BREAKPOINT-NAMESPACE EVENT -->
        <h5 class="mt-4">Breakpoint-Namespace Event</h5>
        <p>
          Besides those events, the component also emits a breakpoint-namespace event
          per breakpoint defined. Thus, you can do something like:
        </p>        
        <div class="demo-markdown demo-markdown--is-one-liner mt-2">
          <v-markdown>```{{markdowns.examples.events.breakpoint}}```</v-markdown>
        </div>

        <!-- CONFIGURATION -->
        <h2 class="demo-control mt-4">Configuration</h2>
        <p class="demo-p">
          The default breakpoints are based on <a href="https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints">Bootstrap 4 (Stable)</a>
          To customize the component to your specific needs, you can pass a new set of breakpoints
          to prop <code class="demo-code--inline">breakpoints</code>.
          However, you will have to do so everytime you import the component,
          therefore it can become repetitive quite fast, which is against the concept of DRY.
          To solve this, you will have to create a "subclass" of the base constructor
          and export it.
        </p>
        <h5>Note</h5>
        <p class="demo-p">
          For the following routine, you should familiarize with the <code class="demo-code--inline">Vue.extend()</code>
          API. See its documentation <a href="https://vuejs.org/v2/api/#Vue-extend" target="_blank">here</a>.
        </p>
        <h4>Bootstrap 4 Breakpoints</h4>
        <div class="demo-markdown">
          <v-markdown emoji>```{{markdowns.api.props.breakpoints}}```</v-markdown>        
        </div>
        <h4 class="mt-4">Custom Breakpoints</h4>
        <p class="demo-p">
          You can define an <b>infinite</b> amount of breakpoints, it's completely up to you.
          To create a "subclass" of <code class="demo-code--inline">V-Breakpoint</code>,
          start by creating a new component asset, e.g.: <code class="demo-code--inline">VBreakpoint.js</code>.
          Then, copy the following snippet and adjust configuration to your needs.
        </p>
        <h5>Note</h5>
        <p class="demo-p">          
          A great site to get started with popular breakpoint stats is
          <a href="http://dpi.lv/" target="_blank">dpi.lv</a>.
        </p>
        <div class="demo-markdown">
          <v-markdown emoji>```{{markdowns.examples.configuration.extend}}```</v-markdown>        
        </div>        
        <h3 class="mt-4">Usage</h3>
        <p class="demo-p">
          Import <b>locally</b> and use as you would normally.
        </p>
        <div class="demo-markdown">
          <v-markdown emoji>```{{markdowns.examples.configuration.script}}```</v-markdown>        
        </div>

        <!-- MULTIPLE ROOT ELEMENTS -->
        <h2 class="mt-5">Wrapping Multiple Root Elements</h2>
        <p class="demo-p">
          As you may know, Vue does not support a stateful
          <code class="demo-code--inline">Fragment</code> component, which allows
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
          (using directives like <code class="demo-code--inline">v-show</code>
          or <code class="demo-code--inline">v-if</code> won't work here).          
        </p>
        <h5>🚧 Note</h5>
        <p class="demo-p">
          Since this is a hack, it is expected to be more of an experimental feature
          than a fully supported one. That doesn't mean I won't relate to issues
          or avoid fixing them at all.
        </p>

        <!-- SUPPORT -->
        <h2 class="mt-5">Related Links</h2>
        <ul class="demo-p">
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
        <p class="demo-p">
          Please open an
          <a class="demo-contrast-anchor" :href="pkg.bugs.url" target="_blank">issue</a> for support.
        </p>

        <!-- LICENSE -->
        <h2 class="mt-5">License</h2>
        <p class="demo-p">
          Copyright (c) 2018 <a class="demo-contrast-anchor" href="https://github.com/adi518" target="_blank">{{pkg.author}}</a> by <a class="demo-contrast-anchor" href="https://opensource.org/licenses/MIT" target="_blank">{{pkg.license}}</a>
        </p>

      </div>
    </div>
    <div class="demo-version">{{pkg.version}}</div>
    <v-git-ribbon fill-color="lightslategrey" octo-color="#18202a" :href="pkg.repository.url" />
  </div>
</template>

<script>
// https://prismjs.com/#examples
// https://brandcolors.net/b/vue-js
// https://favicon.io/emoji-favicons
// https://gist.github.com/rxaviers/7360908
// https://github.com/miaolz123/vue-markdown
// https://github.com/miaolz123/vue-markdown/issues/14
// https://gist.github.com/roachhd/1f029bd4b50b8a524f3c
// https://gist.github.com/oliveratgithub/0bf11a9aff0d6da7b46f1490f86a71eb

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

// Resources
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
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
  name: 'HelloWorld',
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
    process,
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
          template: require('@/markdowns/examples/show-at/template.js')
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

$pre-color: aliceblue;

@import '~@/assets/sass/bootstrap';

/* Reset Bootstrap to User-agent */
p,
pre {
  margin-top: 1rem;
}

.demo {
  min-width: 320px;
}
/* end */

/* Override Prismjs styles */
:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background: transparent;
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

.demo-version {
  top: 1rem;
  left: 1rem;
  position: absolute;
  color: lighten(#35495e, 16%);
}

.demo-code--inline {
  color: #f8f8f2;
  padding: 0.2rem 0.4rem;
  background-color: #888;
}

.demo-clearfix {
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

.demo-emoji {
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

.demo-container {
  min-height: 100vh;
  // background-color: sandybrown;
  background-color: darken(sandybrown, 6.66%);
}

.demo--has-jumbotron {
  display: flex;
  align-items: center;
  background-color: darken(#35495e, 16%);
}

.demo-jumbotron {
  width: 100%;
  display: flex;
  color: #42b883;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.demo-state {
  font-size: 1.2rem;
}

.demo-markdown {
  font-size: 1.3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #18202a;

  pre {
    white-space: pre-wrap;
  }
}

.demo-markdown--is-one-liner {
  code {
    color: aliceblue;
    font-size: inherit;
  }
}

.demo-anchor--author {
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

.demo-fixed-anchor {
  width: 100%;
  bottom: 0.8rem;
  cursor: pointer;
  color: aliceblue;
  position: absolute;
  text-align: center;
}

.demo-p {
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

h1.demo-control {
  font-weight: 300;
  font-size: 2.2rem;
  color: aliceblue;
}

h2.demo-control {
  font-weight: 400;
}

p.demo-control {
  font-size: 1.5rem;
  margin-top: 0;
  margin-left: 3rem;
  margin-right: 3rem;
  color: lightslategrey;
}
</style>
