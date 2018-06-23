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
  computed: {
    forceShow() {
      return !this.hide
    }
  },
  methods: {
    onChange({ breakpoint }) {
      this.hide =
        breakpoint === this.breakpoint || this.$attrs.hasOwnProperty(breakpoint)
    }
  },
  render() {
    return (
      <v-show-at force-show={this.forceShow} on-change={this.onChange}>
        {this.$slots.default}
      </v-show-at>
    )
  }
}
