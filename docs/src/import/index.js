import Vue from 'vue'

import { Ctor, Model } from '../../../dist'

export { Model } from '../../../dist'

const components = { ...new Ctor(Vue) }

export const VShowAt = components.VShowAt
export const VHideAt = components.VHideAt
export const VBreakpoint = components.VBreakpoint

export default VBreakpoint
