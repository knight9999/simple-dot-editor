import ColorModel from '../models/ColorModel'

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
      return new ColorModel('#5F5FFF', false);
    })
  });
}

const initialState = {
  text: 'hello',
  data: initialData(),
  colors: [ new ColorModel('', true),
            new ColorModel('#FF5F5F', false), 
            new ColorModel('#5F5FFF', false),
            new ColorModel('#FFFFFF', false),
            new ColorModel('#AFAFFF', false),
            new ColorModel('#5F5F5F', false) 
          ],
  selectedColor: 1
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_MESSAGE': {
      return Object.assign({}, state, {text: action.value})
    }
    case 'UPDATE_DATA': {
      return Object.assign({}, state, {data: action.value})
    }
    case 'UPDATE_COLOR': {
      return Object.assign({}, state, {selectedColor: action.value})
    }
    default: {
      return state
    }
  }
}

export default reducer
