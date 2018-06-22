<template>
  <v-show-at v-bind="{ 'force-show': !hide, destroy }" @change="onChange">
    <slot></slot>
  </v-show-at>
</template>

<script>
import VShowAt from './ShowAt'

export default {
  name: 'VHideAt',
  props: { ...VShowAt.props },
  components: { VShowAt },
  data: () => ({
    hide: false,
    destroy: false
  }),
  beforeDestroy() {
    this.destroy = true
  },
  methods: {
    onChange({ breakpoint }) {
      this.hide =
        breakpoint === this.breakpoint || this.$attrs.hasOwnProperty(breakpoint)
    }
  }
}
</script>
