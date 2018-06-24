module.exports = `js
import { Model } from 'vue-breakpoint-component'

// Local imports
import { VShowAt, VHideAt, VBreakpoint } from './VBreakpoint'

export default {
  components: {
    VShowAt,
    VHideAt,
    VBreakpoint
  },
  data: () => ({
    model: new Model()
  })
}
`
