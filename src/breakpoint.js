import { debounce, capitalize, isFinite } from 'lodash'
import breakpoints from './breakpoints'

export const NO_MATCH = 'no-match'

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
  watch: {
    scope(value, prevValue) {
      // Vue devTools has a bug where events
      // will not show up if they are fired
      // on page load, while in reality they do.
      const changed = value.breakpoint !== prevValue.breakpoint
      if (changed) {
        this.$emit(value.breakpoint)
        this.$emit('change', value)
        this.$emit('breakpoint', value.breakpoint)
      }
      this.$emit('input', value)
    }
  },
  data: () => ({
    // We need a reactive property `scope` for
    // provide/inject to function correctly.
    scope: {},
    isRoot: false,
    windowAttrs: {},
    breakpoints: {},
    breakpointsEntries: [],
    breakpoint: undefined,
    namespace: 'V-Breakpoint'
  }),
  provide() {
    return { breakpoint: this }
  },
  created() {
    if (!window.matchMedia) return this.log('unsupported browser')
    this.breakpoints = this.$options.config.breakpoints
    this.breakpointsEntries = Object.entries(this.breakpoints)
    const debounceTime = isFinite(this.debounceTime)
      ? this.debounceTime
      : this.$options.config.debounceTime
    this.match = debounce(this.match, debounceTime)
  },
  mounted() {
    // Attach listener to `$root` to
    // avoid multiple `resize` listener.
    if (this.$root.$_vBreakpoint) {
      this.breakpoint = this.$root.$_vBreakpoint.breakpoint
      this.$watch('$root.$_vBreakpoint.scope', scope => (this.scope = scope))
    } else {
      this.isRoot = true
      this.$root.$_vBreakpoint = this
      window.addEventListener('resize', this.match, false)
      this.match() // Fire initial "resize" event
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
      return this.breakpointsEntries.reduce((flags, [breakpoint]) => {
        const flag = `is${capitalize(breakpoint)}`
        flags[flag] = breakpoint === this.breakpoint
        return flags
      }, {})
    },
    noMatch() {
      return this.breakpoint === NO_MATCH
    }
  },
  methods: {
    getScope() {
      const { flags, windowAttrs, noMatch, breakpoint } = this
      return { breakpoint, ...flags, noMatch, ...windowAttrs }
    },
    getBreakpoint() {
      return this.breakpointsEntries.reduce(
        (noMatch, [breakpoint, mediaQuery]) =>
          window.matchMedia(mediaQuery).matches ? breakpoint : noMatch,
        NO_MATCH
      )
    },
    async match() {
      const { breakpoint: prevBreakpoint } = this
      const breakpoint = this.getBreakpoint()
      const changed = prevBreakpoint !== breakpoint
      if (changed) this.breakpoint = breakpoint
      // Update window attributes (avoids layout-thrashing);
      // @link https://gist.github.com/paulirish/5d52fb081b3570c81e3a
      this.windowAttrs = await this.getWindowAttrs()
      // Get updated scope and update its
      // root instance property, which
      // triggers its watch handler.
      const scope = this.getScope()
      this.scope = scope
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
      console.error(`[${this.namespace} warn]: ${capitalize(message)}.`)
    }
  },
  render(h) {
    if (this.$scopedSlots.default) return this.$scopedSlots.default(this.scope)
    if (this.$slots.default?.length) return h(this.$slots.default[0])
  }
}
