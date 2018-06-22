module.exports = `js
// <project-root>/src/components/VBreakpoint.js

import Vue from 'vue'

import { Ctor } from 'vue-breakpoint-component'

const config = {
  breakpoints: {
    small: '(min-width: 576px)',
    medium: '(min-width: 768px)',
    large: '(min-width: 992px)',
    xlarge: '(min-width: 1200px)'
    ...
  }
}

const components = { ...new Ctor(Vue, { config }) }

// If you want to stay consist with imports,
// use this cherry-export approach instead.
export const VShowAt = components.VShowAt
export const VBreakpoint = components.VBreakpoint

// And/or have it both ways
export default components
`
