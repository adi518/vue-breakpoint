module.exports = `js
value: {
  type: Object
},
mediaQueries: {
  type: Object,
  default: () => ({
    small: 'only screen and (max-width: 640px)',
    medium: 'only screen and (min-width: 641px) and (max-width: 920px)',
    large: 'only screen and (min-width: 921px)'
  }),
  description: 'Media-Queries to test against.'
},
debounceTime: {
  type: Number,
  default: 50,
  description: 'Time to wait before invoking resize handler.'
}
`
