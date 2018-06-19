<template>  
  <div :id="`${$options.name}-${_uid}`">
    <slot></slot>
  </div>
</template>

<script>
// https://stackoverflow.com/questions/680431/change-textnode-value
// https://stackoverflow.com/questions/6520192/how-to-get-the-text-node-of-an-element

export default {
  name: 'VFragment',
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    childNodes: [],
    fragment: document.createDocumentFragment()
  }),
  watch: {
    show: {
      handler(show) {
        this.$nextTick(() => {
          const { fragment, childNodes } = this
          childNodes.forEach((node, index) => {
            const element = document.getElementById(node.id)
            if (show) {
              if (node.instance instanceof Element) {
                if (node.display) {
                  element.style.display = node.display
                } else if (element.getAttribute('style')) {
                  element.style.display = ''
                } else {
                  element.removeAttribute('style')
                }
              } else {
                node.instance.nodeValue = node.nodeValue
              }
            } else {
              if (node.instance instanceof Element) {
                node.display = element.style.display
                element.style.display = 'none'
              } else {
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
    const { fragment, $el, childNodes } = this
    Array.from($el.childNodes).forEach((node, index) => {
      const id = `${this.$options.name}-${this._uid}-${index}`
      if (node instanceof Element) {
        childNodes.push({
          id,
          instance: node,
          display: node.style.display
        })
        node.setAttribute('id', id)
      } else {
        childNodes.push({
          instance: node,
          nodeValue: node.nodeValue
        })
      }
      fragment.appendChild(node)
    })
    $el.parentNode.insertBefore(fragment, $el)
    $el.parentNode.removeChild($el)
  },
  beforeDestroy() {
    // TODO: remove all nodes
  }
}
</script>
