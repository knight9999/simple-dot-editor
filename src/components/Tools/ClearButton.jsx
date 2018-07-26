import React from 'react'

export default class ClearButton extends React.Component {
  clear () {
    const colorModel = this.props.color
    const data = this.props.data.map((row, iy1) => {
      return row.map((item, ix1) => {
        return colorModel;
      });
    })
    this.props.updateData(data)

  }
  render () {
    return (
      <div>
        <button onClick={e=>{e.preventDefault(); this.clear() }} className="square_btn" >Clear</button>
      </div>
    )
  }
}