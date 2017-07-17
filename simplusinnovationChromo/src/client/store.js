import { createStore, compose } from 'redux'

// import the root reducer
import rootReducer from './reducers/index'

import tags from './data/tags'

// create an object for the default data
const defaultState = {tags }

// enable Redux Dev Tools
const enhancers = compose(
  window.devToolsExtension
    ? window.devToolsExtension()
    : f => f
)

const store = createStore(rootReducer, defaultState, enhancers)

export default store
