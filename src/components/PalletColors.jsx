import React from 'react'
// import {render} from 'react-dom'
import ClassNames from 'classnames'
import styles from './index.css'

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

  render () {
    const colors = this.props.colors
    return (
      <div>
        <p>Pallet</p>
        {colors.map((colorModel,i)=>{return <div key={i} className={this.getClassName(colorModel, i)} style={this.bgcolor(colorModel)} onClick={(ev) => {ev.preventDefault(); this.selectColor(ev, i)}}></div>})}
      </div>
    )
  }
}
