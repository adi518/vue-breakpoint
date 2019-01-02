export default {
  inject: {
    instance: {
      from: 'breakpoint',
      default: undefined
    }
  },
  render() {
    if (this.$scopedSlots.default) {
      return this.$scopedSlots.default(this.instance.state)
    }
  }
}
