const Actions = {
  selectCell(ix, iy, value) {
    return {
      type: 'SELECT_CELL',
      value: {ix, iy, value}
    }
  }
}

export default Actions
