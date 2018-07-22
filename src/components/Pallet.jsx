import React from 'react'

import PalletColors from './PalletColors'

export default class Pallet extends React.Component {
  render () {
    return (
      <div>
        <PalletColors colors={this.props.colors} selectedColor={this.props.selectedColor} updateColor={(i)=>{this.props.updateColor(i)}} />
      </div>
    )
  }
}
