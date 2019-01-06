// https://github.com/bkzl/vue-fraction-grid/issues/13

import ShowAt from './ShowAt'
import HideAt from './HideAt'
import Breakpoint from './Breakpoint'
import merge from 'lodash.merge'
import breakpoints from './breakpoints' // Bootstrap 4 (Stable)

export function extend(config) {
  const defaults = {
    breakpoints,
    debounceTime: 100,
    experimental: false
  }

  config = merge({}, defaults, config)
  const mergeConfig = component => merge(component, config)

  return {
    VShowAt: mergeConfig(ShowAt),
    VHideAt: mergeConfig(HideAt),
    VBreakpoint: mergeConfig(Breakpoint)
  }
}
