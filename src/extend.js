// https://github.com/bkzl/vue-fraction-grid/issues/13

import { merge } from 'lodash'
import VShowAt from './show-at'
import VHideAt from './hide-at'
import VBreakpoint from './breakpoint'
import breakpoints from './breakpoints' // Bootstrap 4 (Stable)

export function extend(config) {
  const defaults = {
    breakpoints,
    debounceTime: 100,
    experimental: false
  }

  config = merge({}, defaults, config)

  const mergeConfig = component => merge(component, { config })
  const components = { VBreakpoint, VShowAt, VHideAt }

  for (const component in components) {
    components[component] = mergeConfig(components[component])
  }

  return components
}
