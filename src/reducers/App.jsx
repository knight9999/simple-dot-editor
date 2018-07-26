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
            new ColorModel('#000000'), 
            new ColorModel('#0000FF'), 
            new ColorModel('#FF0000'), 
            new ColorModel('#FF00FF'), 
            new ColorModel('#00FF00'), 
            new ColorModel('#00FFFF'), 
            new ColorModel('#FFFF00'), 
            new ColorModel('#FFFFFF'), 
            new ColorModel('#FF5F5F'), 
            new ColorModel('#5F5FFF'),
            new ColorModel('#AFAFFF'),
            new ColorModel('#5F5F5F') 
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
