<template>
  <div class="docs-fragment container">
    <h1 class="docs-h1 mt-20"> Fragment Demo </h1>
    <p class="mt-10">
      If you enabled the <code>experimental</code> flag,
      you should be able to import and use the <code>Fragment</code> component,
      which is based on @y-nk hack at <a href="https://github.com/y-nk/vue-fragment">GitHub</a>.
    </p>
  
    <h2 class="docs-h2 mt-40"> Static DOM Insertion </h2>
    <div class="docs-markdown" v-html="markdowns._static"></div>
    <h3 class="docs-h2 mt-10">Result</h3>
    <i>
      <fragment>
        Text node (1).
        Text node (2).
      </fragment>
    </i>
    <fragment>
      <div class="d-flex">
        <div class="d-inline-flex mt-20" style="background-color: #f29240; color: #18202a; border-radius: 0.25rem">
          <span style="font-size: 1rem; padding: 0.8rem"> Element node (1) 😸 </span>
        </div>
        <div class="d-inline-flex mt-20 ml-10" style="background-color: #f29240; color: #18202a; border-radius: 0.25rem">
          <span style="font-size: 1rem; padding: 0.8rem"> Element node (2) 😸 </span>
        </div>
      </div>
    </fragment>

    <h2 class="docs-h2 mt-40"> Dynamic DOM Insertion </h2>
    <div class="docs-markdown" v-html="markdowns.dynamic"></div>
    <h3 class="docs-h2 mt-10">Result</h3>
    <p>
      Use the toggle buttons to toggle the addition and removal of different nodes types.
    </p>
    <div class="docs-buttons d-flex">
      <button
        :class="['docs-button btn btn-primary', { 'btn-outline-success': flags.text } ]"
        @click="toggle('text')"> Toggle Text Node </button>
      <button
        :class="['docs-button btn btn-primary', { 'btn-outline-success': flags.element } ]"
        @click="toggle('element')"> Toggle Element Node </button>
    </div>
    <div :class="{ 'mt-20': flags.text }"></div>
    <i>
      <fragment>
        <template v-if="flags.text">
          Dynamic text node (1).
          Dynamic text node (2).
        </template>
      </fragment>
    </i>
    <fragment>  
      <template v-if="flags.element">
        <div class="d-flex">
          <div class="d-inline-flex mt-20" style="background-color: rgb(66, 184, 131); border-radius: 0.25rem">
            <span style="font-size: 1rem; padding: 0.8rem"> Dynamic Element node (1) 😸 </span>
          </div>
          <div class="d-inline-flex mt-20 ml-10" style="background-color: rgb(66, 184, 131); border-radius: 0.25rem">
            <span style="font-size: 1rem; padding: 0.8rem"> Dynamic Element node (2) 😸 </span>
          </div>
        </div>    
      </template>
    </fragment>

    <h2 class="docs-h2 mt-40"> V-If Directive </h2>
    <v-hide-at large>
      <span style="font-size: 2rem">😸</span>
      <span style="font-size: 2rem">😸</span>
    </v-hide-at>

    <h2 class="docs-h2 mt-40"> With Router-View </h2>
    <ul>
      <li><router-link :to="{ name: 'fragment' }">Default</router-link></li>
      <li><router-link :to="{ name: 'foo' }">Foo</router-link></li>
      <li><router-link :to="{ name: 'bar' }">Bar</router-link></li>
    </ul>
    <div class="docs-markdown" v-html="markdowns.router"></div>
    <h3 class="docs-h2 mt-10">Result</h3>
    <div>
      <router-view></router-view>
    </div>

    <h2 class="docs-h2 mt-40"> With Nesting </h2>    
    <fragment>
      <fragment>Foo</fragment>
    </fragment>

    <footer class="mt-50"></footer>
  </div>
</template>

<script>
import Prism from 'prismjs'
import * as markdowns from './markdowns'
import Fragment from '@/components/Fragment'
import { VHideAt } from '@/components/Breakpoint'

export default {
  components: {
    Fragment,
    VHideAt
  },
  data: () => ({
    flags: {
      text: false,
      element: false
    },
    markdowns
  }),
  mounted() {
    window.setTimeout(Prism.highlightAll)
  },
  methods: {
    toggle(flag) {
      this.flags[flag] = !this.flags[flag]
    }
  }
}
</script>

<style lang="scss">
@import '~@/styles/colors';

.docs-fragment {
  color: $app-color-aliceblue;

  a {
    color: $app-color-ocean-green;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: darken($app-color-mirage, 5%);
  }
}

.docs-h1 {
  font-weight: 300;
  font-size: 2.2rem;
  color: $app-color-aliceblue;
}

.docs-h2 {
  font-weight: 300;
  font-size: 1.4rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
}

.docs-buttons {
  .docs-button {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
}
</style>
