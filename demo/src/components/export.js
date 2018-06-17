import VShowAt from './ShowAt'
import VBreakpoint from './Breakpoint'
import { Ctor } from './Breakpoint.Ctor'
import breakpoints from '@/assets/js/breakpoints'

export { Ctor } from './Breakpoint.Ctor'
export { Model } from './Breakpoint.Model'

export { default as VShowAt } from './ShowAt'
export { default as VBreakpoint } from './Breakpoint'

export default { VBreakpoint, VShowAt }

export const Install = {
  install(Vue, config = { breakpoints }) {
    Object.keys(new Ctor({ config }))
      .forEach((name, Component) => Vue.component(name, Component))
  }
}
