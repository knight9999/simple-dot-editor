import {combineReducers} from 'redux';

import App from './App'
import EditTable from './EditTable'

const reducer = combineReducers({
  App: App,
  EditTable: EditTable
});

export default reducer
