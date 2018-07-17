import {connect} from 'react-redux'

import EditTable from '../components/EditTable'
import Actions from '../actions/EditTable'

const mapStateToProps = (state) => {
	return state.EditTable
}

const mapDispatchToProps = function (dispatch) {
	return {
		selectCell: function (ix, iy, value) {
			dispatch(Actions.selectCell(ix, iy, value))
		} 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTable)
