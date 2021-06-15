export const state = () => ({
  items: [
    {
      type: 'img',
      width: 297,
      height: 210,
      x: 0,
      y: 220,
      font: 14,
      text: 'Mike!',
      fontFamily: 'roboto'
    }
  ]
})

export const mutations = {
  add (state) {
    state.items.push({
      width: 297,
      height: 210,
      x: 0,
      y: 0,
      font: 10,
      text: 'Hello' + state.items.length,
      fontFamily: 'roboto'
    })
  },
  remove (state, { id }) {
    state.items.splice(id, 1)
  },
  onResize (state, {
    data,
    id
  }) {
    state.items[id].x = data.x
    state.items[id].y = data.y
    state.items[id].width = data.width
    state.items[id].height = data.height
  },
  onDrag (state, {
    data,
    id
  }) {
    state.items[id].x = data.x
    state.items[id].y = data.y
  },
  updateText (state, {
    text,
    id
  }) {
    state.items[id].text = text
  },
  updateFontSize (state, {
    fontSize,
    id
  }) {
    state.items[id].font = fontSize
  },
  updateFontFamily (state, {
    fontFamily,
    id
  }) {
    state.items[id].fontFamily = fontFamily
  }
}
