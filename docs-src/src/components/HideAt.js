import VShowAt from './ShowAt'

export default {
  name: 'VHideAt',
  props: {
    breakpoint: VShowAt.props.breakpoint
  },
  components: { VShowAt },
  data: () => ({
    hide: false
  }),
  methods: {
    onChange({ breakpoint }) {
      this.hide =
        breakpoint === this.breakpoint || this.$attrs.hasOwnProperty(breakpoint)
    }
  },
  template: `
    <v-show-at v-bind="{ 'force-show': !hide }" @change="onChange">
      <slot></slot>
    </v-show-at>
  `
}
