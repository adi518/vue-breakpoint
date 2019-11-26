// https://vue-test-utils.vuejs.org/guides/testing-async-components.html

import { shallowMount } from '@vue/test-utils'

import { extend } from '@/main'
const { VBreakpoint } = extend({ debounceTime: 0 })

window.matchMedia = jest.fn().mockImplementation(() => ({ matches: true }))

describe('Breakpoint.vue', () => {
  it('renders scoped-slot when passed', async done => {
    jest.useFakeTimers()
    const scopedSlot = jest.fn()
    const wrapper = shallowMount(VBreakpoint, {
      scopedSlots: { default: scopedSlot }
    })
    jest.runAllTimers()
    // wrapper.vm.match.flush()
    wrapper.vm.$nextTick(() => {
      expect(scopedSlot).toHaveBeenCalledTimes(2)
      expect(scopedSlot).toHaveBeenLastCalledWith(wrapper.vm.scope)
      expect(wrapper.vm.scope.noMatch).toBe(false)
      done()
    })
  })
})
