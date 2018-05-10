<script>
/* eslint-disable space-before-function-paren */

// https://vuejs.org/v2/api/#vm-watch
// https://github.com/weblinc/media-match
// https://github.com/apertureless/vue-breakpoints
// https://www.npmjs.com/package/custom-event-polyfill
// https://adamwathan.me/renderless-components-in-vuejs/
// https://forum.vuejs.org/t/v-if-removing-event-listeners/24735/2
// https://vuejs.org/v2/style-guide/#Private-property-names-essential
// https://gist.github.com/adi518/a2c1555009cb6f90b4dd41fd48962853/edit
// https://medium.com/@uiuxlab/the-most-used-responsive-breakpoints-in-2017-of-mine-9588e9bd3a8a
// https://forum.vuejs.org/t/vue-component-as-singleton-never-to-be-destroyed-and-mounted-again/25010
// https://github.com/chrisvfritz/7-secret-patterns/blob/master/slides-2018-03-03-spotlight-export.pdf

// Browser support: IE10+
// https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia

// Polyfills
import 'media-match'
import 'custom-event-polyfill'

// Resources
import debounce from 'lodash.debounce'
import capitalize from 'lodash.capitalize'

// Implementation
export default {
  name: 'VBreakpoint',
  props: {
    value: {
      type: Object
    },
    mediaQueries: {
      type: Object,
      default: () => ({
        small: 'only screen and (max-width: 640px)',
        medium: 'only screen and (min-width: 641px) and (max-width: 920px)',
        large: 'only screen and (min-width: 921px)'
      }),
      description: 'Media-Queries to test against.'
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
  data: () => ({
    breakpoint: null
  }),
  watch: {
    breakpoint(value) {
      // Vue Devtools has a bug where events
      // will not show up if they are fired
      // on page load, while in reality they do.
      this.$emit('input', this.api)
      this.$emit('change', this.api)
      this.$emit(this.api.breakpoint)
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
      return { ...this.queries, breakpoint: this.breakpoint }
    },
    queries() {
      return Object.keys(this.mediaQueries).reduce((queries, breakpoint) => {
        const query = `is${capitalize(breakpoint)}`
        queries[query] = breakpoint === this.breakpoint
        return queries
      }, {})
    }
  },
  methods: {
    match() {
      this.breakpoint = Object.entries(this.mediaQueries).reduce(
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
</script>
