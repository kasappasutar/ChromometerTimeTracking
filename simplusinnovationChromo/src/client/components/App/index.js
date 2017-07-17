import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../../actions/actionCreators'
import Main from '../Main'

const mapStateToProps = state => {
  return {
    tags: state.tags
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
