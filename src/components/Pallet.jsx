import React from 'react'

import PalletColors from './PalletColors'

export default class Pallet extends React.Component {
  render () {
    return (
      <div>
        <PalletColors colors={this.props.colors} select={this.props.select} />
      </div>
    )
  }
}
