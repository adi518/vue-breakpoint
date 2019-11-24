export default {
  name: 'DevOnly',
  functional: true,
  render(h, { children }) {
    if (process.env.NODE_ENV === 'development') {
      return children
    }
  }
}
