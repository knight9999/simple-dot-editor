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
  text: 'hello',
  data: initialData() 
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_MESSAGE': {
      return Object.assign({}, state, {text: action.value})
    }
    case 'UPDATE_DATA': {
      return Object.assign({}, state, {data: action.value})
    }
    default: {
      return state
    }
  }
}

export default reducer
