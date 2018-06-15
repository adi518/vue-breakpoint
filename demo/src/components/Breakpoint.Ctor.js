// https://github.com/bkzl/vue-fraction-grid/issues/13

import Vue from 'vue'

import ShowAt from './ShowAt'
import Breakpoint from './Breakpoint'

export class Ctor {
  constructor(config = {}) {
    return {
      VShowAt: Vue.extend({ extends: ShowAt, config }),
      VBreakpoint: Vue.extend({ extends: Breakpoint, config })
    }
  }
}
