import { combineReducers } from 'redux'
import dataReducer from './data/Reduser'

export default combineReducers({
  data: dataReducer,
})
