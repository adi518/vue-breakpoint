import { Ctor } from './Breakpoint.Ctor'

export { Ctor } from './Breakpoint.Ctor'

export { default as VFragment } from './Fragment'
export { default as VBreakpoint } from './Breakpoint'

export { VBreakpointModel } from './Breakpoint.Model'

export const Install = {
  install(Vue, config) {
    const { VFragment, VShowAt, VBreakpoint } = new Ctor({ config })
    Vue.component(VShowAt.name, VShowAt)
    Vue.component(VFragment.name, VFragment)
    Vue.component(VBreakpoint.name, VBreakpoint)
  }
}
