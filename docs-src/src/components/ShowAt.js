// https://github.com/vuejs/vue/issues/7088
// https://github.com/vuejs/vue/issues/7088#issuecomment-364535373

import VFragment from './Fragment'
import VBreakpoint from './Breakpoint'

import breakpoints from '@/assets/js/breakpoints'

export default {
  name: 'VShowAt',
  config: { breakpoints },
  components: { VFragment, VBreakpoint },
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
    this.breakpoints = this.$options.config.breakpoints
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
  template: `
    <v-fragment v-bind="{ show: computedShow }">
      <v-breakpoint @change="onChange"></v-breakpoint>
      <slot></slot>
    </v-fragment>
  `
}
