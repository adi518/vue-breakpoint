// https://github.com/Akryum/v-tooltip/blob/master/src/index.js
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import { extend } from './extend'
import Breakpoint from './breakpoint'

export default Breakpoint

export { extend, extend as Ctor } from './extend' // `Ctor` will be deprecated
export { default as VShowAt } from './show-at'
export { default as VHideAt } from './hide-at'
export { default as VBreakpoint } from './breakpoint'
export { default as VWithBreakpoint } from './with-breakpoint'

export const Plugin = {
  install(Vue, config) {
    const components = extend(config)
    Object.keys(components).forEach((name, Component) =>
      Vue.component(name, Component)
    )
  }
}

export const Install = Plugin // Will be deprecated

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

export class Model {}

// Auto-install (Browser/Node)
let GlobalVue
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(Plugin)
}
