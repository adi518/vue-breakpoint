export default {
  functional: true,
  inject: {
    breakpoint: {
      from: 'breakpoint',
      default: undefined
    }
  },
  render(h, { data, injections }) {
    if (!injections.breakpoint) {
      return void console.error(`[V-With-Breakpoint warn]: No provider found!`)
    }
    if (data.scopedSlots.default) {
      return data.scopedSlots.default(injections.breakpoint.scope)
    }
  }
}
