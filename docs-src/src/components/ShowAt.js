// https://github.com/vuejs/vue/issues/7088
// https://github.com/vuejs/vue/issues/7088#issuecomment-364535373

import VFragment from './Fragment'
import VBreakpoint from './Breakpoint'

export default {
  name: 'VShowAt',
  config: {}, // Foreign key
  components: {
    VFragment,
    VBreakpoint
  },
  props: {
    breakpoint: {
      type: String,
      default: ''
    },
    forceShow: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    show: true
  }),
  created() {
    this.experimental = this.$options.config.experimental
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
        <v-fragment show={this.computedShow}>
          <v-breakpoint on-change={this.onChange}></v-breakpoint>
          {this.$slots.default}
        </v-fragment>
      )
    }
    return (
      <v-breakpoint on-change={this.onChange}>
        {this.computedShow ? this.$slots.default : null}
      </v-breakpoint>
    )
  }
}
