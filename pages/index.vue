<template>
  <main>
    <div style="height: 800px; width: 800px; border: 1px solid red">
      <TextItem
        v-for="item in items"
        :key="item.id"
        :item="item"
        @onResize="onResize($event, item.id)"
        @onDrag="onDrag($event, item.id)"
      />
    </div>
    <button @click="addItem">
      add
    </button>
    <button @click="removeItem">
      remove
    </button>
  </main>
</template>

<script>
import TextItem from '../components/text_item'

export default {
  components: {
    TextItem
  },

  data () {
    return {
      items: [
        {
          id: 0,
          width: 297,
          height: 210,
          x: 0,
          y: 220,
          font: 14,
          text: 'Mike!'
        }

      ],

      width: 297,
      height: 210,
      x: (800 - 297) / 2,
      y: (800 - 210) / 2,
      font: 10
    }
  },
  computed: {
    kotFontPts () {
      return this.font * (220 / this.height) + 'pt'
    },
    viewBox () {
      return '0 0 ' + 320 + ' ' + 220
    }

  },
  methods: {
    onResize (data, id) {
      this.items[id].x = data.x
      this.items[id].y = data.y
      this.items[id].width = data.width
      this.items[id].height = data.height
    },
    onDrag (data, id) {
      this.items[id].x = data.x
      this.items[id].y = data.y
    },
    addItem () {
      console.log('item add')
      this.items.push({
        id: this.items.length,
        width: 297,
        height: 210,
        x: 0,
        y: 0,
        font: 10,
        text: 'Hello' + this.items.length
      })
    },
    removeItem () {
      this.items.splice(-1, 1)
    }
  }
}
</script>

<style scoped>

.block {
  height: 100px;
  width: 200px;
  background-color: red;
}

.container {
  height: 80%;
  width: 80%;
  background-color: aqua;
}

.handle {
  background-color: red;
}
</style>
