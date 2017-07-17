import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import tags from './tags'

const rootReducer = combineReducers({
  routing: routerReducer,
  tags
})

export default rootReducer
