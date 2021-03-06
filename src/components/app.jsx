import React from 'react'

import EditTable from './EditTable'
import Pallet from './Pallet'
import Preview from './Preview'
import Tools from './Tools'
import './index.css'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mouseDown : false
    }
  }



  render () {
    return (
      <div onMouseDown={e=>{this.setState({mouseDown: true})}}
           onMouseUp={e=>{this.setState({mouseDown: false})}}>
        <p> Hello React!</p>
        <p>{this.props.text}</p>
        <p><button onClick={e=>{e.preventDefault(); this.props.updateMessage('hoge') }}>OK</button></p>
        <p><button onClick={e=>{e.preventDefault(); this.props.updateMessage('gogo') }}>Good</button></p>
        <div>
          <div className="box">
            <EditTable data={this.props.dataMap[this.props.dataId]} 
                        updateData={(newData)=>{this.props.updateData({dataId:this.props.dataId, data:newData})}} 
                        color={this.props.colors[this.props.selectedColor]}
                        mouseDown={this.state.mouseDown} />
            <Pallet colors={this.props.colors} selectedColor={this.props.selectedColor} updateColor={this.props.updateColor} />
          </div>
          <div className="box" style={{width: "20px"}}></div>
          <div className="box">
            <Preview />
            {/* <div style={{height: "20px"}}></div>
            <Tools color={this.props.colors[this.props.selectedColor]} data={this.props.dataMap[this.props.dataId]} updateData={(newData)=>{this.props.updateData({dataId:this.props.dataId, data:newData})}} /> */}
          </div>
        </div>
      </div>
    );
  }

}

