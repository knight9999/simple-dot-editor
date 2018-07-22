import {connect} from 'react-redux'

import App from '../components/App'
import Actions from '../actions/App'

const mapStateToProps = (state) => {
	return state.App
}

const mapDispatchToProps = function (dispatch) {
	return {
		updateMessage: function (name) {
			dispatch(Actions.updateMessage(name))
		},
		updateData: function (newData) {
			dispatch(Actions.updateData(newData))
		}
	}
}
	

export default connect(mapStateToProps, mapDispatchToProps)(App)
	
