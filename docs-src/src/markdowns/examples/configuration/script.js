module.exports = `js
// Local imports
import { VShowAt, VHideAt, VBreakpoint, Model } from './VBreakpoint'

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
