import Vue from 'vue'
import breakpoints from '@/assets/js/breakpoints'

import { Ctor } from '@/components/Breakpoint.Ctor'

export { Ctor } from '@/components/Breakpoint.Ctor'
export { Model } from '@/components/Breakpoint.Model'

const components = { ...new Ctor(Vue, { breakpoints }) }

export const VShowAt = components.VShowAt
export const VHideAt = components.VHideAt
export const VBreakpoint = components.VBreakpoint

export default components
