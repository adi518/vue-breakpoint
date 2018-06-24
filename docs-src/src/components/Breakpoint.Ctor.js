// https://github.com/bkzl/vue-fraction-grid/issues/13

import breakpoints from '@/assets/js/breakpoints' // Bootstrap 4 (Stable)

import VShowAt from './ShowAt'
import VHideAt from './HideAt'
import VBreakpoint from './Breakpoint'

export class Ctor {
  constructor(Vue, config = {}) {

    const defaults = { experimental: false, breakpoints }
    
    config = Object.assign(defaults, config)

    VShowAt.config = config
    VHideAt.config = config
    VBreakpoint.config = config

    return { VShowAt, VHideAt, VBreakpoint }
  }
}
