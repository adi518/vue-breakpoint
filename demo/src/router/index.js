import Vue from 'vue'
import Router from 'vue-router'
import Docs from '@/components/Docs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Docs',
      component: Docs
    }
  ]
})
