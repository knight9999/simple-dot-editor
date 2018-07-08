import React from 'react'

import ClassNames from 'classnames'
import styles from './index.css'

import EditTable from './EditTable'
import Pallet from './Pallet'
import Actions from './../actions/Actions'

export default class App extends React.Component {

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
    return (
      <div>
        <p> Hello React!</p>
        <p>{this.props.text}</p>
        <p><button onClick={e=>{e.preventDefault(); this.props.updateMessage('hoge') }}>OK</button></p>
        <p><button onClick={e=>{e.preventDefault(); this.props.updateMessage('gogo') }}>Good</button></p>
        <EditTable data={this.initialData()}/>
        <Pallet colors={['transparent', '#FF5F5F', '#5F5FFF', '#FFFFFF', '#AFAFFF', '#5F5F5F']} select={3} />
      </div>
    );
  }

}

