import React from 'react'
// import {render} from 'react-dom'
import ClassNames from 'classnames'
import styles from './index.css'

export default class PalletColors extends React.Component {

  constructor(props) {
    super(props);
    this.state = { select: props.select };
  }

  bgcolor (item) {
    if (item === 'transparent') {
      return {}
    }
    return {
      'backgroundColor': item
    };
  }

  getClassName (item, i) {
    const className = ClassNames({
      "item": true,
      "item-border": (i !== this.state.select),
      "item-border-selected": (i === this.state.select),
      "item-transparent": (item === 'transparent'),
      "item-inline": true
    })
    return className
  }

  selectColor (ev, i) {
    this.state.select = i
    this.setState( Object.assign({}, this.state, { select: i} ) )
  }

  render () {
    const colors = this.props.colors
    return (
      <div>
        <p>Pallet</p>
        {colors.map((item,i)=>{return <div key={i} className={this.getClassName(item, i)} style={this.bgcolor(item)} onClick={(ev) => this.selectColor(ev, i)}></div>})}
      </div>
    )
  }
}
