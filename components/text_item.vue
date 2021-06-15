<template>
  <vue-draggable-resizable
    :h="item.height"
    :parent="true"
    :w="item.width"
    :x="item.x"
    :y="item.y"
    @dragging="onDrag"
    @resizing="onResize"
  >
    <svg :width="item.width" :height="item.height" viewBox="0 0 297 210">
      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        :fontSize="item.font "
        :font-size-adjust="(220 / item.height)"
        text-anchor="middle"
      >{{ item.text }}</text>
    </svg>
  </vue-draggable-resizable>
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
  computed: {

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
      this.$emit('onDrag', {
        x,
        y
      })
    }
  }
}
</script>

<style scoped>

</style>
