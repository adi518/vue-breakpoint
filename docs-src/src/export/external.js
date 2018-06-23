// https://github.com/Akryum/v-tooltip/blob/master/src/index.js

import merge from 'lodash.merge'

import VShowAt from '@/components/ShowAt'
import VBreakpoint from '@/components/Breakpoint'
import { Ctor } from '@/components/Breakpoint.Ctor'
import breakpoints from '@/assets/js/breakpoints'

export { Ctor } from '@/components/Breakpoint.Ctor'
export { Model } from '@/components/Breakpoint.Model'

export { default as VShowAt } from '@/components/ShowAt'
export { default as VBreakpoint } from '@/components/Breakpoint'

export const Install = {
  install(Vue, config) {
    Object.keys(new Ctor(merge({}, config, { breakpoints })))
      .forEach((name, Component) => Vue.component(name, Component))
  }
}

// Auto-install (Window/Node)
let GlobalVue
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(Install)
}

export default { VBreakpoint, VShowAt }
