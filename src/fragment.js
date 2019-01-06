// https://stackoverflow.com/questions/680431/change-textnode-value
// https://stackoverflow.com/questions/6520192/how-to-get-the-text-node-of-an-element
// https://stackoverflow.com/questions/42414627/create-text-node-with-custom-render-function-in-vue-js

export default {
  name: 'fragment',
  abstract: true, // Undocumented key; TODO: find out if we actually benefit from this
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    childNodes: []
  }),
  watch: {
    show: {
      handler(show) {
        this.$nextTick(() => {
          this.childNodes.forEach(node => {
            const isElement = node.instance instanceof window.Element
            if (show) {
              if (isElement) {
                // Restore element last display value
                node.instance.style.display = node.previous.display
              } else {
                // Restore textnode last value
                node.instance.nodeValue = node.previous.nodeValue
              }
            } else {
              if (isElement) {
                node.previous.display = node.instance.style.display
                // Hide it
                node.instance.style.display = 'none'
              } else {
                // Hide textnode by emptying it
                node.instance.nodeValue = ''
              }
            }
          })
        })
      },
      immediate: true
    }
  },
  mounted() {
    const { $el, childNodes, _uid: rootId } = this

    // On HMR event, root element is already gone,
    // so no need to re-create the document-fragment.
    if (!document.getElementById(rootId)) { return }

    const fragment = document.createDocumentFragment()

    Array.from($el.childNodes).forEach((node, index) => {
      childNodes.push({
        instance: node,
        previous: {
          nodeValue: node.nodeValue,
          display: node.style ? node.style.display : undefined
        }
      })
      fragment.appendChild(node)
    })

    $el.parentNode.insertBefore(fragment, $el)
    $el.parentNode.removeChild($el)
  },
  beforeDestroy() {
    this.childNodes.forEach(node => node.instance.remove())
  },
  template: `<div :id="_uid"><slot></slot></div>`
}
