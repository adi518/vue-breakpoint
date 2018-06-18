import Vue from 'vue'
import breakpoints from '@/assets/js/breakpoints'

import { Ctor } from './Breakpoint.Ctor'

export { Ctor } from './Breakpoint.Ctor'
export { Model } from './Breakpoint.Model'

const components = { ...new Ctor(Vue, { breakpoints }) }

export const VShowAt = components.VShowAt
export const VBreakpoint = components.VBreakpoint

export default components
