import {connect} from 'react-redux'

import Tools from '../components/Tools'

const mapStateToProps = (state) => {
  return state.App
}

export default connect(mapStateToProps)(Tools)

