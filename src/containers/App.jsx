import {connect} from 'react-redux'

import App from './../components/App'
import Actions from '../actions/Actions';

const mapStateToProps = (state) => {
	return state.App
}

const mapDispatchToProps = function (dispatch) {
	return {
		updateMessage: function (name) {
			dispatch(Actions.action1(name))
		} 
	}
}
	

export default connect(mapStateToProps, mapDispatchToProps)(App)
	
