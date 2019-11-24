import capitalize from 'lodash.capitalize'
import debounce from 'lodash.debounce'
import isNumber from 'lodash.isnumber'
import breakpoints from './breakpoints'

export default {
  name: 'v-breakpoint',
  config: { debounceTime: 100, breakpoints }, // Foreign key
  props: {
    value: {
      type: Object
    },
    debounceTime: {
      type: Number
    }
  },
  data: () => ({
    // We need a reactive property `scope` for
    // provide/inject to function correctly.
    scope: {},
    isRoot: false,
    windowAttrs: {},
    breakpoints: {},
    breakpoint: undefined,
    namespace: 'V-Breakpoint'
  }),
  provide() {
    return { breakpoint: this }
  },
  beforeCreate() {
    if (window.matchMedia) {
      // Browser has support for `matchMedia` API. ✔
    } else {
      this.log('unsupported browser')
    }
  },
  created() {
    this.breakpoints = this.$options.config.breakpoints

    const debounceTime = isNumber(this.debounceTime)
      ? this.debounceTime
      : this.$options.config.debounceTime

    this.match = debounce(this.match, debounceTime)
  },
  mounted() {
    // Attach listener to `$root` to avoid
    // more than one `resize` listener, which
    // can cause massive performance issues.
    if (this.$root.$_vBreakpoint) {
      this.breakpoint = this.$root.$_vBreakpoint.breakpoint
      this.$watch('$root.$_vBreakpoint.scope', scope => (this.scope = scope))
    } else {
      this.isRoot = true
      this.$root.$_vBreakpoint = this
      window.addEventListener('resize', this.match, false)
      // Fire initial "resize" event
      this.match()
    }

    if (this.$slots.default && this.$slots.default.length > 1) {
      this.log('vue components are limited to 1 root element')
    }
  },
  beforeDestroy() {
    if (this.isRoot) {
      delete this.$root.$_vBreakpoint
      window.removeEventListener('resize', this.match)
    }
  },
  computed: {
    flags() {
      const flags = {}
      for (const breakpoint in this.breakpoints) {
        const flag = `is${capitalize(breakpoint)}`
        flags[flag] = breakpoint === this.breakpoint
      }
      return flags
    },
    noMatch() {
      return this.breakpoint === 'no-match'
    }
  },
  methods: {
    getScope() {
      const { flags, windowAttrs, noMatch, breakpoint } = this
      return Object.assign({}, flags, windowAttrs, { noMatch, breakpoint })
    },
    getBreakpoint() {
      return Object.entries(this.breakpoints).reduce(
        (noMatch, [breakpoint, mediaQuery]) => {
          if (window.matchMedia(mediaQuery).matches) {
            return breakpoint
          }
          return noMatch
        },
        'no-match'
      )
    },
    async match() {
      const { breakpoint: prevBreakpoint } = this
      const breakpoint = this.getBreakpoint()
      const unchanged = prevBreakpoint === breakpoint
      const changed = unchanged === false
      if (unchanged) {
        // Do not update breakpoint.
      } else {
        this.breakpoint = breakpoint
      }

      // Update window attributes (avoids layout-thrashing);
      // @link https://gist.github.com/paulirish/5d52fb081b3570c81e3a
      this.windowAttrs = await this.getWindowAttrs()

      // Get updated scope and update
      // its root instance property.
      const scope = this.getScope()
      this.scope = scope

      // Vue Devtools has a bug where events
      // will not show up if they are fired
      // on page load, while in reality they do.
      if (changed) {
        this.$emit(breakpoint)
        this.$emit('change', scope)
        this.$emit('breakpoint', breakpoint)
      }
      this.$emit('input', scope)
    },
    getWindowAttrs() {
      return new Promise(resolve => {
        window.requestAnimationFrame(() => {
          resolve({
            vw: window.screen.width,
            vh: window.screen.height,
            viewportWidth: window.screen.width,
            viewportHeight: window.screen.height,
            iw: window.innerWidth,
            ih: window.innerHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
            innerWidthPx: `${window.innerWidth}px`,
            innerHeightPx: `${window.innerHeight}px`,
            viewportWidthPx: `${window.screen.width}px`,
            viewportHeightPx: `${window.screen.height}px`
          })
        })
      })
    },
    log(message) {
      message = capitalize(message)
      console.error(`[${this.namespace} warn]: ${message}.`)
    }
  },
  render(h) {
    if (this.$scopedSlots.default) {
      return this.$scopedSlots.default(this.computedScope)
    }
    if (this.$slots.default && this.$slots.default.length) {
      return h(this.$slots.default[0])
    }
  }
}
