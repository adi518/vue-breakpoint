import Vue from 'vue'
import { Ctor } from 'vue-breakpoint-component'

export { Model } from 'vue-breakpoint-component'

const components = { ...new Ctor(Vue, { experimental: true }) }

export const VShowAt = components.VShowAt
export const VHideAt = components.VHideAt
export const VBreakpoint = components.VBreakpoint
export const VWithBreakpoint = components.VWithBreakpoint

export default VBreakpoint
