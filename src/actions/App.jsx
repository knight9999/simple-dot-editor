const Actions = {
  updateMessage (value) {
    return {
      type: 'UPDATE_MESSAGE',
      value
    }
  },
  updateData (value) {
    return {
      type: 'UPDATE_DATA',
      value
    }
  },
  updateColor (value) {
    return {
      type: 'UPDATE_COLOR',
      value
    }
  },
  activeApp (value) {
    return {
      type: 'ACTIVE_APP',
      value
    }
  }
}

export default Actions
