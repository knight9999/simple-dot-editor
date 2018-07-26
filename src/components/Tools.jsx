import React from 'react'
import ClearButton from './ClearButton'

export default class Tools extends React.Component {
  render () {
    return (
      <div>
        <ClearButton color={this.props.color} data={this.props.data} updateData={(newData)=>{this.props.updateData(newData)}} />
      </div>
    )
  }
}

