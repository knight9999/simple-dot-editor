function initialData () {
  var data = [
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8]
  ];
  return data.map(row => {
    return row.map(item => {
      return '#5F5FFF';
    })
  });
}

const initialState = {
  data: initialData()
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_CELL': {
      const data = state.data.map((row, iy1) => {
        return row.map((item, ix1) => {
          if (action.value.ix === ix1 && action.value.iy === iy1) {
            return '#FF5F5F';
          }
          return item;
        });
      })
      return Object.assign({}, state, {data: data})
    }
    default: {
      return state
    }
  }
}

export default reducer
