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
        <EditTable data={this.props.data} updateData={(newData)=>{this.props.updateData(newData)}} color={this.props.colors[this.props.selectedColor]}/>
        <Pallet colors={this.props.colors} selectedColor={this.props.selectedColor} updateColor={this.props.updateColor} />
      </div>
    );
  }

}

