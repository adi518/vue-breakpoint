<script>
// https://vuejs.org/v2/guide/render-function.html#Functional-Components

// Implementation
export default {
  functional: true,
  render(h, { slots }) {
    return slots().default
  }
}
</script>
