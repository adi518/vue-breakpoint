// https://github.com/vuejs/vue/issues/7088
// https://github.com/vuejs/vue/issues/7088#issuecomment-364535373

import Fragment from './Fragment'
import VBreakpoint from './Breakpoint'
import { breakpointProp } from './mixins'

export default {
  name: 'v-show-at',
  config: {}, // Foreign key
  mixins: [breakpointProp],
  components: {
    Fragment,
    VBreakpoint
  },
  props: {
    forceShow: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    show: true
  }),
  created() {
    const props = ['breakpoints', 'debounceTime', 'experimental']
    props.forEach(prop => (this[prop] = this.$options.config[prop]))
  },
  computed: {
    computedShow() {
      if (this.forceShow) {
        return this.forceShow
      }
      return this.show
    }
  },
  methods: {
    onChange({ breakpoint, noMatch }) {
      if (noMatch) {
        breakpoint = 'no-match'
      }
      this.show =
        this.breakpoint === breakpoint || this.$attrs.hasOwnProperty(breakpoint)

      this.$emit('change', { breakpoint, noMatch })
    }
  },
  render() {
    if (this.experimental) {
      return (
        <fragment show={this.computedShow}>
          <v-breakpoint
            on-change={this.onChange}
            breakpoints={this.breakpoints}
            debounce-time={this.debounceTime}>
          </v-breakpoint>
          {this.$slots.default}
        </fragment>
      )
    }
    return (
      <v-breakpoint
        on-change={this.onChange}
        breakpoints={this.breakpoints}
        debounce-time={this.debounceTime}>
        {this.computedShow ? this.$slots.default : null}
      </v-breakpoint>
    )
  }
}
