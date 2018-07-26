import React from 'react'
// import {render} from 'react-dom'
import ClassNames from 'classnames'

export default class PalletColors extends React.Component {

  constructor(props) {
    super(props);
    // this.state = { select: props.select };
  }

  bgcolor (colorModel) {
    if (colorModel.isTransparent) {
      return {}
    }
    return {
      'backgroundColor': colorModel.colorCode
    };
  }

  getClassName (colorModel, i) {
    const className = ClassNames({
      "item": true,
      "item-border": (i !== this.props.selectedColor),
      "item-border-selected": (i === this.props.selectedColor),
      "item-transparent": colorModel.isTransparent,
      "item-inline": true
    })
    return className
  }

  selectColor (ev, i) {
    // this.state.select = i
    // this.setState( Object.assign({}, this.state, { select: i} ) )
    this.props.updateColor(i)
  }

  renderColors () {
    const colors = this.props.colors
    const cols = 8
    const colorGroups = colors.reduce((acc, value, index) => {
      if (index % cols == 0) {
        acc.push([])
      }
      acc[acc.length-1].push(value)
      return acc
    }, [])
    return colorGroups.map((colors, j)=>{
      return <div key={j}>{colors.map((colorModel, i)=>{
        const n = j * cols + i
        return <div key={n} className={this.getClassName(colorModel, n)} style={this.bgcolor(colorModel)} onClick={(ev) => {ev.preventDefault(); this.selectColor(ev, n)}}></div>
      })}</div>
    })
  }

  render () {
    return (
      <div>
        <p>Pallet</p>
        {this.renderColors()}
      </div>
    )
  }
}
