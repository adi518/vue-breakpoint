/* eslint-disable space-before-function-paren */

// https://vuejs.org/v2/api/#vm-watch
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

// https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints
// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
// @media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
// @media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
// @media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) { ... }

// Polyfills (Browser Support: IE9+)
import 'media-match'
import 'custom-event-polyfill'

// Resources
import debounce from 'lodash.debounce'
import capitalize from 'lodash.capitalize'

// Implementation
export default {
  name: 'VBreakpoint',
  config: {
    breakpoints: {
      small: 'only screen and (min-width: 576px)',
      medium: 'only screen and (min-width: 768px)',
      large: 'only screen and (min-width: 992px)'
    }
  },
  props: {
    value: {
      type: Object,
      // Force one-way binding
      validator: value => !value === false
    },
    debounceTime: {
      type: Number,
      default: 50,
      description: 'Time to wait before invoking resize handler.'
    },
    debug: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({ breakpoint: null, breakpoints: {} }),
  watch: {
    breakpoint(value) {
      // Vue Devtools has a bug where events
      // will not show up if they are fired
      // on page load, while in reality they do.
      this.$emit('input', this.api)
      this.$emit('change', this.api)
      if (this.api.breakpoint) {
        this.$emit(this.api.breakpoint)
      }
      this.$emit('no-match', this.api.noMatch)
      this.$emit('breakpoint', this.api.breakpoint)
    }
  },
  beforeCreate() {
    if (window.matchMedia) {
      // Browser Supported ✔
    } else if (this.debug) {
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
    if (this.$root.$_wBreakpoint) {
      this.breakpoint = this.$root.$_wBreakpoint.breakpoint
      this.$watch(
        '$root.$_wBreakpoint.breakpoint',
        breakpoint => (this.breakpoint = breakpoint)
      )
    } else {
      this.$root.$_wBreakpoint = this
      window.addEventListener('resize', this.match)
      window.dispatchEvent(new window.CustomEvent('resize'))
    }
  },
  beforeDestroy() {
    if (this.$root.$_wBreakpoint) {
      if (this.$root.$_wBreakpoint._uid === this._uid) {
        delete this.$root.$_wBreakpoint
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
