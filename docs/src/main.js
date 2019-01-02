import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'
import { VBreakpoint } from '@/components/Breakpoint'
import { Mixin as VBreakpointMixin } from 'vue-breakpoint-component'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-48463434-5',
  router
})

Vue.mixin(VBreakpointMixin)

new Vue({
  router,
  render: h => h(VBreakpoint, [App])
}).$mount('#app')
