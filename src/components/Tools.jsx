import React from 'react'
import ClearButton from './Tools/ClearButton'

export default class Tools extends React.Component {
  render () {
    return (
      <div>
        <ClearButton color={this.props.colors[this.props.selectedColor]} 
          data={this.props.dataMap[this.props.activeApp]} 
          dataId={this.props.activeApp}
          updateData={(newData)=>{this.props.updateData(newData)}} />
      </div>
    )
  }
}

