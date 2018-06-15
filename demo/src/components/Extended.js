import { Ctor } from './Breakpoint.Ctor'

const config = {
  breakpoints: {
    small: 'only screen and (max-width: 640px)',
    medium: 'only screen and (min-width: 641px) and (max-width: 920px)',
    large: 'only screen and (min-width: 921px)'
  }
}

const components = new Ctor({ config })

export default components

export const VShowAt = components.VShowAt
export const VBreakpoint = components.VBreakpoint
