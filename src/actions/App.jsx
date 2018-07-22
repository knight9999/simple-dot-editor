const Actions = {
  updateMessage(value) {
    return {
      type: 'UPDATE_MESSAGE',
      value
    }
  },
  updateData(value) {
    return {
      type: 'UPDATE_DATA',
      value
    }
  }
}

export default Actions
