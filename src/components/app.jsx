import React from 'react'
import {connect} from 'react-redux'

import ClassNames from 'classnames'
import styles from './index.css'

import EditTable from './editTable'
import Pallet from './pallet'
import Actions from './../actions/Actions'

class App extends React.Component {

  constructor() {
    super();
  }

  initialData () {
    var data = [
      [1,2,3,4,5,6,7,8],
      [1,2,3,4,5,6,7,8],
      [1,2,3,4,5,6,7,8],
      [1,2,3,4,5,6,7,8],
      [1,2,3,4,5,6,7,8],
      [1,2,3,4,5,6,7,8],
      [1,2,3,4,5,6,7,8],
      [1,2,3,4,5,6,7,8]
    ];
    return data.map(row => {
      return row.map(item => {
        return '#5F5FFF';
      })
    });
  }

  render () {
    const { dispatch } = this.props
    return (
      <div>
        <p> Hello React!</p>
        <p>{this.props.text}</p>
        <p><button onClick={e=>{e.preventDefault(); dispatch(Actions.action1('hoge'))}}>OK</button></p>
        <p><button onClick={e=>{e.preventDefault(); dispatch(Actions.action2('gogo'))}}>Good</button></p>
        <EditTable data={this.initialData()}/>
        <Pallet colors={['#FF5F5F', '#5F5FFF', '#FFFFFF', '#AFAFFF', '#5F5F5F']} />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(App)
