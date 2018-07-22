import React from 'react'
// import {render} from 'react-dom'
import ClassNames from 'classnames'

export default class EditTable extends React.Component {

  selectCell(ix, iy) {
    const colorModel = this.props.color
    const data = this.props.data.map((row, iy1) => {
      return row.map((item, ix1) => {
        if (ix === ix1 && iy === iy1) {
          return colorModel;
        }
        return item;
      });
    })
    this.props.updateData(data)
  }

  getRows() {
    return this.props.data.map((row,iy) => {
      return ([
        <tr key={iy}>
          {row.map((item,ix)=>{
            return <td key={iy+"-"+ix} onClick={e=>{e.preventDefault(); this.selectCell(ix, iy) }} className={this.getClassName(item)} style={this.bgcolor(item)}></td>; })
          }
        </tr>
      ]);
    });
  }

  getClassName (colorModel) {
    const className = ClassNames({
      "item": true,
      "item-transparent": colorModel.isTransparent
    })
    return className
  }


  bgcolor (colorModel) {
    if (colorModel.isTransparent) {
      return {}
    }
    return {
      'backgroundColor': colorModel.colorCode
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
