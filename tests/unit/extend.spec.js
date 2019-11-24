import { extend } from '@/extend'

const config = {
  breakpoints: {
    small: '(min-width: 476px)',
    medium: '(min-width: 668px)',
    large: '(min-width: 892px)',
    xlarge: '(min-width: 1100px)'
  }
}

describe('extend', () => {
  it('returns an extended object', () => {
    expect(extend(config)).toMatchSnapshot()
  })
})
