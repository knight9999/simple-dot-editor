import React from 'react'

import { createStore } from 'redux'
import { render } from 'react-dom'

import { Provider } from 'react-redux'

import App from './containers/App'
import reducer from './reducers/reducer'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
