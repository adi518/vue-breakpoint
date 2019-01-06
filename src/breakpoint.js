import 'custom-event-polyfill'

import capitalize from 'capitalize'
import debounce from 'lodash.debounce'
import isNumber from 'lodash.isnumber'
import breakpoints from './breakpoints'

export default {
  name: 'v-breakpoint',
  config: { breakpoints }, // Foreign key
  provide() {
    return { breakpoint: this }
  },
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
    mutable: { debounceTime: undefined }
  }),
  beforeCreate() {
    if (window.matchMedia) {
      // Browser has support for `matchMedia` API. ✔
    } else {
      this.log('unsupported browser')
    }
  },
  created() {
    this.breakpoints = this.$options.config.breakpoints

    this.mutable.debounceTime = isNumber(this.debounceTime)
      ? this.debounceTime : this.$options.config.debounceTime

    this.match = debounce(this.match, this.mutable.debounceTime)
  },
  mounted() {
    // Attach listener to `$root` to avoid
    // more than one `resize` listener, which
    // can cause massive performance issues.
    if (this.$root.$_vBreakpoint) {
      this.breakpoint = this.$root.$_vBreakpoint.breakpoint
      this.$watch(
        '$root.$_vBreakpoint.scope',
        scope => (this.scope = scope)
      )
    } else {
      this.isRoot = true
      this.$root.$_vBreakpoint = this

      window.addEventListener('resize', this.match, false)
      window.dispatchEvent(new window.CustomEvent('resize'))
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
    },
    namespace() {
      return capitalize.words(this.$options.name)
    }
  },
  methods: {
    getScope() {
      const { flags, windowAttrs, noMatch, breakpoint } = this
      return Object.assign({}, flags, windowAttrs, noMatch, breakpoint)
    },
    async match() {
      let { breakpoint: curr, breakpoints } = this
      breakpoints = Object.entries(breakpoints)
      const breakpoint = breakpoints.reduce(
        (noMatch, [breakpoint, mediaQuery]) => {
          if (window.matchMedia(mediaQuery).matches) {
            return breakpoint
          }
          return noMatch
        },
        'no-match'
      )
      if (curr === breakpoint) {
        // Do not update breakpoint.
      } else {
        // Emit with window attributes (avoids layout-thrashing);
        // @link https://gist.github.com/paulirish/5d52fb081b3570c81e3a
        this.windowAttrs = await this.getWindowAttrs()
        this.scope = this.getScope()

        this.breakpoint = breakpoint
        // Vue Devtools has a bug where events
        // will not show up if they are fired
        // on page load, while in reality they do.
        this.$emit('change', this.scope)

        // Emit namespaced event
        if (this.scope.breakpoint) {
          this.$emit(this.scope.breakpoint)
        }

        this.$emit('no-match', this.scope.noMatch)
        this.$emit('breakpoint', this.scope.breakpoint)
      }

      this.$emit('input', this.scope)
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
      const { namespace } = this
      const capitalized = capitalize(message)
      console.error(`[${namespace} warn]: ${capitalized}.`)
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
