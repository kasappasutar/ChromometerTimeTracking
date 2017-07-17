/* eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'

// import css
import css from './styles/style.styl'


// import components
import App from './components/App'
import Chrono from './components/Chrono'
import TagGrid from './components/TagGrid'


// import react router
import { Router, Route, IndexRoute } from 'react-router'

import { Provider } from 'react-redux'
import store, { history } from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Chrono} />
         <Route path="tags" component={TagGrid} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))
