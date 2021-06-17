<template>
  <vue-draggable-resizable
    :h="item.height"
    :parent="true"
    :w="item.width"
    :x="item.x"
    :y="item.y"
    :style="editColor+zIndex"
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
      v-if="item.type === 'text'"
      xmlns="http://www.w3.org/2000/svg"
      :height="item.height"
      :width="item.width"
      preserveAspectRatio="xMidYMid meet"
    >
      <text
        lengthAdjust="spacing"
        :font-size="fontSize"
        :font-family="item.fontFamily"
        dominant-baseline="middle"
        text-anchor="middle"
        x="50%"
        y="50%"
      >{{ item.text }}
      </text>
    </svg>
    <div v-else :width="wToPx" :height="hToPx">
      <img :width="wToPx" :height="hToPx" src="~/assets/rect.svg" style="object-fit: contain">
    </div>
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
      console.log(800 / (this.item.height / 80) * (this.item.font / 72) + 'ex')
      return 800 * (this.item.font / 72) + 'in'
    },
    zIndex () {
      if (this.focused) {
        return '; z-index: 99'
      }
      return ''
    },
    wToPx () {
      return this.item.width + 'px'
    },
    hToPx () {
      return this.item.height + 'px'
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

/*.handle {*/
/*  display: block;*/
/*}*/
</style>
