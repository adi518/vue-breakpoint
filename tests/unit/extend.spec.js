import { extend } from '@/main'

const config = {
  breakpoints: {
    small: '(min-width: 476px)',
    medium: '(min-width: 668px)',
    large: '(min-width: 892px)',
    xlarge: '(min-width: 1100px)'
  }
}

describe('extend', () => {
  it('returns extended components', () => {
    expect(extend(config)).toMatchSnapshot()
  })
})
