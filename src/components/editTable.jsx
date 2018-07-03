import React from 'react'
// import {render} from 'react-dom'
import ClassNames from 'classnames'
import styles from './index.css'

export default class EditTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: props.data };
  }

  selectCell (ev,iy,ix) {
    var data = this.state.data.map((row, iy1) => {
      return row.map((item, ix1) => {
        if (ix === ix1 && iy === iy1) {
          return '#FF5F5F';
        }
        return item;
      });
    })
    this.setState( { data: data } );
  }

  getRows() {
    const classNameForItem = ClassNames({
      "item": true
    });
    return this.state.data.map((row,iy) => {
      return ([
        <tr key={iy}>
          {row.map((item,ix)=>{
            return <td key={iy+"-"+ix} onClick={(ev) => this.selectCell(ev,iy,ix)} className={classNameForItem} style={this.bgcolor(item)}></td>; })
          }
        </tr>
      ]);
    });
  }

  bgcolor (colorCode) {
    return {
      'backgroundColor': colorCode
    };
  }

  render () {
    const rowComponents = this.getRows();
    return (
      <table className="table">
        <tbody>
        {rowComponents}
        </tbody>
      </table>
    );
  }


}
