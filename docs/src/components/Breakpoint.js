import { extend } from 'vue-breakpoint-component'

const { VShowAt, VHideAt, VBreakpoint } = extend({
  experimental: false,
  debounceTime: 200,
  breakpoints: {
    small: '(min-width: 476px)',
    medium: '(min-width: 668px)',
    large: '(min-width: 892px)',
    xlarge: '(min-width: 1100px)'
  }
})

export default VBreakpoint

export { VShowAt, VHideAt, VBreakpoint }
