import React from 'react'

import { createStore } from 'redux'
import { render } from 'react-dom'

import GoldenLayoutWrapper from './containers/GoldenLayoutWrapper'
import {Provider} from 'react-redux'

// import App from './containers/App'
import reducer from './reducers/reducer'

import './main.css';

const store = createStore(reducer)

render(
  <Provider store={store}>
    <GoldenLayoutWrapper />
  </Provider>,
  document.getElementById('app')
)

