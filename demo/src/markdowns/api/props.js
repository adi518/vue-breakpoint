module.exports = `js
value: {
  type: Object
},
mediaQueries: {
  type: Object,
  default: () => ({
    small: 'only screen and (min-width: 576px)',
    medium: 'only screen and (min-width: 768px)',
    large: 'only screen and (min-width: 992px)'
  }),
  description: 'Media-Queries to test against.'
},
debounceTime: {
  type: Number,
  default: 50,
  description: 'Time to wait before invoking resize handler.'
}
`
