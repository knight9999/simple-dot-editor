const initialState = {
  text: 'hello'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_MESSAGE': {
      return Object.assign({}, state, {text: action.value})
    }
    default: {
      return state
    }
  }
}

export default reducer
