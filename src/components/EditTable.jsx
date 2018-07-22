import React from 'react'
// import {render} from 'react-dom'
import ClassNames from 'classnames'

export default class EditTable extends React.Component {

  selectCell(ix, iy, color) {
    const data = this.props.data.map((row, iy1) => {
      return row.map((item, ix1) => {
        if (ix === ix1 && iy === iy1) {
          return '#FF5F5F';
        }
        return item;
      });
    })
    this.props.updateData(data)
  }

  getRows() {
    const classNameForItem = ClassNames({
      "item": true
    });
    return this.props.data.map((row,iy) => {
      return ([
        <tr key={iy}>
          {row.map((item,ix)=>{
            return <td key={iy+"-"+ix} onClick={e=>{e.preventDefault(); this.selectCell(ix, iy, 'dummy') }} className={classNameForItem} style={this.bgcolor(item)}></td>; })
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
