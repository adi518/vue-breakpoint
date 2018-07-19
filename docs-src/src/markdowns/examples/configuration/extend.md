```js
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

const components = { ...new Ctor(Vue, config) }

export const VShowAt = components.VShowAt
export const VHideAt = components.VHideAt
export const VBreakpoint = components.VBreakpoint

export default VBreakpoint
```
