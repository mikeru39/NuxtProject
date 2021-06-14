<template>
  <vue-draggable-resizable
    :h="item.height"
    :parent="true"
    :w="item.width"
    :x="item.x"
    :y="item.y"
    @dragging="onDrag"
    @resizing="onResize"
  />
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'

export default {
  name: 'TextItem',
  components: {
    VueDraggableResizable
  },
  props: {
    item: Object
  },
  methods: {
    onResize (x, y, width, height) {
      this.$emit('onResize', {
        x,
        y,
        width,
        height
      })
    },
    onDrag (
      x,
      y
    ) {
      this.x = x
      this.y = y
    }
  }
}
</script>

<style scoped>

</style>
