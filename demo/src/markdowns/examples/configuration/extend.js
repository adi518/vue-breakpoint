module.exports = `js
// <project-root>/src/components/VBreakpoint.js

import Vue from 'vue'

import { Ctor } from 'vue-breakpoint-component'

const config = {
  breakpoints: {
    small: 'only screen and (max-width: 640px)',
    medium: 'only screen and (min-width: 641px) and (max-width: 920px)',
    large: 'only screen and (min-width: 921px)'
    ...
  }
}

const components = { ...new Ctor(Vue, { config }) }

// If you want to stay consist with imports,
// use this cherry-export approach instead.
export const VShowAt = components.VShowAt
export const VBreakpoint = components.VBreakpoint

export default components
`
