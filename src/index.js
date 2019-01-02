// https://github.com/Akryum/v-tooltip/blob/master/src/index.js

import VBreakpoint from '@/components/Breakpoint'

import { Ctor } from '@/components/Breakpoint.Ctor'

export { Ctor } from '@/components/Breakpoint.Ctor'
export { Model } from '@/components/Breakpoint.Model'

export { default as VShowAt } from '@/components/ShowAt'
export { default as VHideAt } from '@/components/HideAt'
export { default as VBreakpoint } from '@/components/Breakpoint'
export { default as VWithBreakpoint } from '@/components/WithBreakpoint'

export const Install = {
  install(Vue, config) {
    const components = new Ctor(Vue, config)
    Object.keys(components).forEach((name, Component) => Vue.component(name, Component))
  }
}

export const Mixin = {
  inject: {
    $vBreakpoint: {
      from: 'breakpoint',
      default: undefined
    }
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

export default VBreakpoint
