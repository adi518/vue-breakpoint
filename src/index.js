// https://github.com/Akryum/v-tooltip/blob/master/src/index.js

import { extend } from '@/extend'
import Breakpoint from '@/Breakpoint'

export default Breakpoint

export { extend } from '@/extend'
export { default as VShowAt } from '@/ShowAt'
export { default as VHideAt } from '@/HideAt'
export { default as VBreakpoint } from '@/Breakpoint'
export { default as VWithBreakpoint } from '@/WithBreakpoint'

export const Install = {
  install(Vue, config) {
    const components = extend(config)
    Object.keys(components).forEach((name, Component) => Vue.component(name, Component))
  }
}

export const Mixin = {
  install(Vue) {
    Vue.mixin({
      inject: {
        $vBreakpoint: {
          from: 'breakpoint',
          default: undefined
        }
      }
    })
  }
}

export class Model { }

// Auto-install (Browser/Node)
let GlobalVue
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(Install)
}
