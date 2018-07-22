import React from 'react'

import EditTable from './EditTable'
import Pallet from './Pallet'

export default class App extends React.Component {

  constructor() {
    super();
  }

  render () {
    return (
      <div>
        <p> Hello React!</p>
        <p>{this.props.text}</p>
        <p><button onClick={e=>{e.preventDefault(); this.props.updateMessage('hoge') }}>OK</button></p>
        <p><button onClick={e=>{e.preventDefault(); this.props.updateMessage('gogo') }}>Good</button></p>
        <EditTable data={this.props.data} updateData={(newData)=>{this.props.updateData(newData)}} />
        <Pallet colors={['transparent', '#FF5F5F', '#5F5FFF', '#FFFFFF', '#AFAFFF', '#5F5F5F']} select={3} />
      </div>
    );
  }

}

