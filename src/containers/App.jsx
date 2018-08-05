import {connect} from 'react-redux'

import App from '../components/App'

const mapStateToProps = (state) => {
	return state.App
}

// const mapDispatchToProps = function (dispatch) {
// 	return {
// 		updateMessage: function (name) {
// 			dispatch(Actions.updateMessage(name))
// 		},
// 		updateData: function (newData) {
// 			dispatch(Actions.updateData(newData))
// 		},
// 		updateColor: function (i) {
// 			dispatch(Actions.updateColor(i))
// 		}
// 	}
// }
	

export default connect(mapStateToProps)(App)
	
