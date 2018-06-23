/* eslint-disable space-before-function-paren */

// https://github.com/weblinc/media-match
// https://github.com/apertureless/vue-breakpoints
// https://www.npmjs.com/package/custom-event-polyfill
// https://adamwathan.me/renderless-components-in-vuejs/
// https://forum.vuejs.org/t/v-if-removing-event-listeners/24735/2
// https://vuejs.org/v2/style-guide/#Private-property-names-essential
// https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
// https://gist.github.com/adi518/a2c1555009cb6f90b4dd41fd48962853/edit
// https://medium.com/@uiuxlab/the-most-used-responsive-breakpoints-in-2017-of-mine-9588e9bd3a8a
// https://forum.vuejs.org/t/vue-component-as-singleton-never-to-be-destroyed-and-mounted-again/25010
// https://github.com/chrisvfritz/7-secret-patterns/blob/master/slides-2018-03-03-spotlight-export.pdf
// https://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window

import 'custom-event-polyfill'

import debounce from 'lodash.debounce'
import capitalize from 'lodash.capitalize'

import breakpoints from '@/assets/js/breakpoints'

// Implementation
export default {
  name: 'VBreakpoint',
  config: { breakpoints },
  props: {
    value: {
      type: Object
    },
    debounceTime: {
      type: Number,
      default: 50,
      description: 'Time to wait before invoking resize handler.'
    }
  },
  data: () => ({
    breakpoint: undefined, breakpoints: {}
  }),
  watch: {
    breakpoint(value) {
      // Vue Devtools has a bug where events
      // will not show up if they are fired
      // on page load, while in reality they do.
      this.$emit('input', this.api)
      this.$emit('change', this.api)

      // Emit namespaced event
      if (this.api.breakpoint) {
        this.$emit(this.api.breakpoint)
      }

      this.$emit('no-match', this.api.noMatch)
      this.$emit('breakpoint', this.api.breakpoint)
    }
  },
  beforeCreate() {
    if (window.matchMedia) {
      // Browser supported ✔
    } else {
      this.log('incompatible browser')
    }
  },
  created() {
    this.breakpoints = this.$options.config.breakpoints
    this.match = debounce(this.match, this.debounceTime)
  },
  mounted() {
    // We implement singleton pattern to avoid
    // more than one `resize` listener, which
    // can cause massive performance issues.
    if (this.$root.$_vBreakpoint) {
      this.breakpoint = this.$root.$_vBreakpoint.breakpoint
      this.$watch(
        '$root.$_vBreakpoint.breakpoint',
        breakpoint => (this.breakpoint = breakpoint)
      )
    } else {
      this.$root.$_vBreakpoint = this
      window.addEventListener('resize', this.match, false)
      window.dispatchEvent(new window.CustomEvent('resize'))
    }
  },
  beforeDestroy() {
    if (this.$root.$_vBreakpoint) {
      if (this.$root.$_vBreakpoint._uid === this._uid) {
        delete this.$root.$_vBreakpoint
      }
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.match)
  },
  computed: {
    api() {
      return {
        ...this.queries,
        vw: window.screen.width,
        vh: window.screen.height,
        viewportWidth: window.screen.width,
        viewportHeight: window.screen.height,
        iw: window.innerWidth,
        ih: window.innerHeight,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        breakpoint: this.breakpoint,
        noMatch: this.breakpoint === null
      }
    },
    queries() {
      return Object.keys(this.breakpoints).reduce((queries, breakpoint) => {
        const query = `is${capitalize(breakpoint)}`
        queries[query] = breakpoint === this.breakpoint
        return queries
      }, {})
    }
  },
  methods: {
    match() {
      this.breakpoint = Object.entries(this.breakpoints).reduce(
        (noMatch, [breakpoint, mediaQuery]) => {
          if (window.matchMedia(mediaQuery).matches) {
            return breakpoint
          }
          return noMatch
        },
        null
      )
    },
    log(message) {
      console.warn(
        `[${capitalize(this.$options.name)} warn]: ${capitalize(message)}.`
      )
    }
  },
  render() {
    if (this.$scopedSlots.default) {
      return this.$scopedSlots.default(this.api)
    }
  }
}
