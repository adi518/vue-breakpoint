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
              <span :style="`font-size: ${emojiSize}; transition: font-size .2s`">😸</span>
            </div>
          </div>
        </v-breakpoint>
        <p style="margin-top: 2rem">
          <a class="demo-github-button github-button" :href="process.env.NODE_ENV === 'production' ? pkg.repository.url : ''" data-icon="octicon-star" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
        </p>
        <p style="margin-top: 1rem; color: lightslategrey">
          Made with ❤️ by <a class="demo-anchor--author" href="https://github.com/adi518">Adi Sahar</a>
        </p>
      </div>
      <a class="demo-fixed-anchor" @click="scrollTo('docs')" tabindex="">Install, Examples & Documentation</a>
    </div>

    <!-- SECOND PAGE -->
    <div ref="docs" class="demo-container pb-5">
      <div class="container demo-clearfix">

        <!-- INSTALL -->
        <h2 class="demo-control mt-3 mb-3">Install</h2>
        <div class="demo-markdown demo-markdown--is-one-liner mt-2">
          <v-markdown>```$ npm install --save vue-breakpoint-component```</v-markdown>
        </div>

        <!-- USAGE -->
        <h2 class="demo-control mt-4">Usage</h2>
        <p>
          To use the component in your templates, simply import and register it with your component:
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
          To use the component in your templates, simply import and register it with your component:
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
          <v-markdown>```{{markdowns.api.props}}```</v-markdown>
        </div>

        <!-- API EVENTS -->
        <h2 class="demo-control mt-5">API Events</h2>
        <p>
          The component emits two constant events, <b>Input</b> and <b>Change</b>. Besides those events,
          it will also emit a breakpoint-namespace event per breakpoint defined. Thus, you can do something like:
        </p>
        <div class="demo-markdown demo-markdown--is-one-liner mt-2">
          <v-markdown>```{{markdowns.examples.events.breakpoint}}```</v-markdown>
        </div>
        <h4 class="mt-4">Payloads</h4>
        <h5 class="mt-3">Input and Change Events</h5>
        <p>Each of these events has the same payload. It also supplies some auxiliary state, like <b>viewport</b> and current <b>window dimensions</b> (state[Object]):</p>
        <div class="demo-markdown mt-2">
          <v-markdown>```{{markdowns.api.events.payload}}```</v-markdown>
        </div>
        <h5 class="mt-4">Breakpoint-Namespace Event</h5>
        <p>

        </p>

        <!-- SUPPORT -->
        <h2 class="mt-5">Support</h2>
        <p class="demo-p">
          Please open an
          <a class="demo-contrast-anchor" :href="pkg.bugs.url" target="_blank">issue</a> for support.
        </p>

        <!-- LICENSE -->
        <h2 class="mt-5">License</h2>
        <p class="demo-p">
          Copyright (c) 2018 {{pkg.author}} by <a class="demo-contrast-anchor" href="https://opensource.org/licenses/MIT">{{pkg.license}}</a>
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
// https://github.com/miaolz123/vue-markdown
// https://github.com/miaolz123/vue-markdown/issues/14
// https://gist.github.com/oliveratgithub/0bf11a9aff0d6da7b46f1490f86a71eb

// Meta-data
// import pkg from '../../package'

//  Components
import VShowAt from './ShowAt'
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
          breakpoint: require('@/markdowns/examples/events/breakpoint.js')
        }
      },
      api: {
        props: require('@/markdowns/api/props.js'),
        events: {
          meta: require('@/markdowns/api/events.js'),
          payload: require('@/markdowns/api/events.payload.js')
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

.demo-p {
  a:hover {
    text-decoration: underline;
    color: darken(#35495e, 16%);
  }
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
  background-color: sandybrown;
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
  padding: 0.25rem 1rem;
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

.demo-contrast-anchor {
  color: darken(#35495e, 16%);
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
