module.exports = `js
value: {
  type: Object,
  // Force one-way binding
  validator: value => !value === false
},
debounceTime: {
  type: Number,
  default: 50,
  description: 'Time to wait before invoking resize handler.'
}
`
