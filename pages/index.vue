<template>
  <div style="height: 800px; width: 800px; border: 1px solid red;position: fixed">
    <TextItem v-for="item in items" :key="item.id" :item="item" @onResize="onResize($event, item.id)" />
  </div>
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
          id: 1,
          width: 297,
          height: 210,
          x: 0,
          y: 0,
          font: 14
        },
        {
          id: 2,
          width: 297,
          height: 210,
          x: 0,
          y: 220,
          font: 14
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
    }
    // onDrag ({
    //   x,
    //   y
    // }, id) {
    //   console.log(x, y, id)
    //   this.x = x
    //   this.y = y
    // }

  }
}
</script>

<style scoped>
main {
  text-align: center;
  background-color: red;
  width: 800px;
  height: 800px;
}

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
