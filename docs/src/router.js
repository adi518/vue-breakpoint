import Vue from 'vue'
import Router from 'vue-router'
import Docs from '@/views/Docs'
import Fragment from '@/components/Fragment'
import FragmentContainer from '@/views/Fragment'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'documentation',
    component: Docs
  }
]

if (process.env.NODE_ENV === 'development') {
  routes.push({
    path: '/fragment',
    component: FragmentContainer,
    children: [
      {
        name: 'fragment',
        path: '',
        component: {
          template: `<i>Default</i>`
        }
      },
      {
        name: 'foo',
        path: 'foo',
        component: {
          components: { Fragment },
          template: `<fragment><i>Foo</i></fragment>`
        },
        children: [
          {
            name: 'foo-child',
            path: 'foo-child',
            children: [
              {
                name: 'foo-child-child',
                path: 'foo-child-child'
              }
            ]
          }
        ]
      },
      {
        name: 'bar',
        path: 'bar',
        component: {
          components: { Fragment },
          template: `<fragment><i>Bar</i></fragment>`
        },
        children: [
          {
            name: 'bar-child',
            path: 'bar-child',
            children: [
              {
                name: 'bar-child-child',
                path: 'bar-child-child'
              }
            ]
          }
        ]
      }
    ]
  })
}

export default new Router({ routes })
