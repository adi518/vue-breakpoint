import { extend } from 'vue-breakpoint-component'

const breakpoints = {
  debounceTime: 200,
  experimental: true,
  small: '(min-width: 476px)',
  medium: '(min-width: 668px)',
  large: '(min-width: 892px)',
  xlarge: '(min-width: 1100px)'
}

const { VShowAt, VHideAt, VBreakpoint } = extend({
  experimental: true,
  breakpoints
})

export default VBreakpoint

export { VShowAt, VHideAt, VBreakpoint }
