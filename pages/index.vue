<template>
  <main>
    <div style="float: left; height: 800px; width: 800px; border: 1px solid red">
      <TextItem
        v-for="(item, key) in items"
        :key="key"
        :item="item"
        :editing="key === editId"
        @onResize="onResize($event, key)"
        @onEdit="onEdit(key)"
        @onDrag="onDrag($event, key)"
        @remove="removeItem(key)"
      />
    </div>
    <div>
      <input v-model="text" type="text">
      <input v-model="fontSize" type="number">
      <select v-model="fontFamily">
        <option>roboto</option>
        <option>open sans</option>
      </select>
      <button @click="addItem">
        add
      </button>
    </div>
  </main>
</template>

<script>
import TextItem from '../components/text_item'

export default {
  components: {
    TextItem,
  },
  data () {
    return {
      editId: 0,
      imageData: ''
    }
  },
  computed: {
    items () {
      return this.$store.state.items.items
    },
    text: {
      get () {
        if (this.editId === null && this.$store.state.items.items.length === 0) {
          return ' '
        }
        return this.$store.state.items.items[this.editId].text
      },
      set (text) {
        if (this.editId !== null) {
          this.$store.commit('items/updateText', {
            text,
            id: this.editId
          })
        }
      }
    },
    fontSize: {
      get () {
        if (this.editId === null && this.$store.state.items.items.length === 0) {
          return ' '
        }
        return this.$store.state.items.items[this.editId].font
      },
      set (fontSize) {
        if (this.editId !== null) {
          this.$store.commit('items/updateFontSize', {
            fontSize,
            id: this.editId
          })
        }
      }
    },
    fontFamily: {
      get () {
        if (this.editId === null && this.$store.state.items.items.length === 0) {
          return ' '
        }
        return this.$store.state.items.items[this.editId].fontFamily
      },
      set (fontFamily) {
        if (this.editId !== null) {
          this.$store.commit('items/updateFontFamily', {
            fontFamily,
            id: this.editId
          })
        }
      }
    }

  },
  methods: {
    onEdit (key) {
      console.log(key)
      this.editId = key
      console.log(this.editId)
    },
    editText (text) {
      console.log(text)
    },
    onResize (data, id) {
      this.$store.commit('items/onResize', {
        data,
        id
      })
    },
    onDrag (data, id) {
      this.$store.commit('items/onDrag', {
        data,
        id
      })
    },
    addItem () {
      this.$store.commit('items/add')
    },
    removeItem (id) {
      this.$store.commit('items/remove', { id })
    },
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
