import breakpoints from '@/assets/js/breakpoints'

import { Ctor } from './Breakpoint.Ctor'

export { Ctor } from './Breakpoint.Ctor'
export { Model } from './Breakpoint.Model'
export { default as VBreakpoint } from './Breakpoint'

export const Install = {
  install(Vue, config = { breakpoints }) {
    Object.keys(new Ctor({ config }))
      .forEach((name, Component) => Vue.component(name, Component))
  }
}
