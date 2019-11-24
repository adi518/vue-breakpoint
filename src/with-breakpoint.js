export default {
  name: 'v-with-breakpoint',
  functional: true,
  inject: {
    breakpoint: {
      from: 'breakpoint',
      default: undefined
    }
  },
  render(h, { data, injections }) {
    if (!injections.breakpoint) {
      // eslint-disable-next-line no-console
      return void console.error(
        `[V-With-Breakpoint warn]: No Breakpoint provider found!`
      )
    }
    if (data.scopedSlots.default) {
      return data.scopedSlots.default(injections.breakpoint.scope)
    }
  }
}
