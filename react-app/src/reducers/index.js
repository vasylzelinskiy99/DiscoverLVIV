import { combineReducers } from 'redux';
import events from './events'
import search from './search'

const rootReducer = combineReducers({
  events,
  search
})

export default rootReducer
