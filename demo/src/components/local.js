import Vue from 'vue'
import breakpoints from '@/assets/js/breakpoints'

import { Ctor } from './Breakpoint.Ctor'

const components = { ...new Ctor(Vue, { breakpoints }) }

export default components

export const VShowAt = components.VShowAt
export const VBreakpoint = components.VBreakpoint
