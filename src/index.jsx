import React from 'react';
import {render} from 'react-dom';
import ClassNames from 'classnames';
import styles from './index.css';

class App extends React.Component {

  constructor() {
    super();

    var data = [
      [1,2,3,4,5,6,7,8],
      [1,2,3,4,5,6,7,8],
      [1,2,3,4,5,6,7,8],
      [1,2,3,4,5,6,7,8],
      [1,2,3,4,5,6,7,8],
      [1,2,3,4,5,6,7,8],
      [1,2,3,4,5,6,7,8],
      [1,2,3,4,5,6,7,8]
    ];
    this.state = { data: data.map(row => {
        return row.map(item => {
          return '#5F5FFF';
        })
      })
    }
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

  bgcolor (colorCode) {
    return {
      'backgroundColor': colorCode
    };
  }

  render () {
    const rowComponents = this.getRows();
    return (
      <div>
        <p> Hello React!</p>
        <table className="table">
          <tbody>
          {rowComponents}
          </tbody>
        </table>
      </div>
    );
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
}

render(<App/>, document.getElementById('app'));
