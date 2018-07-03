import React from 'react'
import {render} from 'react-dom'
import ClassNames from 'classnames'
import styles from './index.css'

export default class Pallet extends React.Component {

  bgcolor (colorCode) {
    return {
      'backgroundColor': colorCode
    };
  }

  render () {
    const classNameForItem = ClassNames({
      "item": true,
      "item-border": true
    });
    const colors = this.props.colors;
    return (
      <div>
        <p>Pallet</p>
        <table className="table">
          <tbody>
            <tr>
              {colors.map((item,i)=>{return <td key={i} className={classNameForItem} style={this.bgcolor(item)}></td>})}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
