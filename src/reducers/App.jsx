const initialState = {
  text: 'hello'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DUMMY_ACTION1': {
      return Object.assign({}, state, {text: action.value})
    }
    case 'DUMMY_ACTION2': {
      return Object.assign({}, state, {text: action.value})
    }
    default: {
      return state
    }
  }
}

export default reducer
