<template>
  <vue-draggable-resizable
    :h="item.height"
    :parent="true"
    :w="item.width"
    :x="item.x"
    :y="item.y"
    @activated="focused = true"
    @deactivated="focused = false"
    @dragging="onDrag"
    @resizing="onResize"
  >
    <button v-show="focused" class="btn-edit">
      <span class="material-icons md-24" @click="onEdit">edit</span>
    </button>
    <button v-show="focused" class="btn-remove">
      <span class="material-icons md-24" @click="remove">delete</span>
    </button>

    <svg
      :height="item.height"
      :width="item.width"
      viewBox="0 0 297 210"
      @dblclick="inputFocus = true"
    >
      <img src="assets/rect.svg" alt="">
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
    item: Object,
    editing: Boolean
  },
  data () {
    return {
      focused: false,
      inputFocus: false
    }
  },
  computed: {
    editColor () {
      if (this.editing) {
        return 'border-color: red'
      } else {
        return 'border-color: grey'
      }
    },
    fontSize () {
      console.log(800 / 297 * (this.item.font / 72 * 25.4))
      return 800 / 297 * (this.item.font / 72 * 25.4) + 'pt'
    },
    zIndex () {
      if (this.focused) {
        return '; z-index: 99'
      }
      return ''
    }
  },
  methods: {
    onEdit () {
      this.$emit('onEdit')
    },

    remove () {
      this.$emit('remove')
    },

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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

.btn-remove {
  position: absolute;
  display: flex;
  right: 8px;
  bottom: 8px;
  padding: 0
}

.btn-edit {
  position: absolute;
  display: flex;
  right: 8px;
  top: 8px;
  padding: 0
}

.btn-ok {
  display: flex;
  padding: 0
}

.handle {
  display: block;
}
</style>
