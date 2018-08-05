import {connect} from 'react-redux'

import GoldenLayoutWrapper from '../components/GoldenLayoutWrapper';
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
		},
		updateColor: function (i) {
			dispatch(Actions.updateColor(i))
		},
		activeApp: function (dataId) {
			dispatch(Actions.activeApp(dataId))
		}
	}
}
	

export default connect(mapStateToProps, mapDispatchToProps)(GoldenLayoutWrapper)
	
