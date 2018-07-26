import React from 'react'

export default class Preview extends React.Component {

  componentDidMount() {
    this.updateCanvas()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.updateCanvas()
    }
  }

  componentDidUpdate() {
    this.updateCanvas()
  }

  updateCanvas() {
    const { canvas } = this
    const context = canvas.getContext('2d')
    context.fillStyle = 'red';
    context.font = '24px Arial';
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.clearRect(0, 0, 100, 100);
    context.fillText("hello", 0, 0);
  }

  render () {
    return (
      <div>
        <p>Preview</p>
        <canvas ref={(e) => { this.canvas = e }} width="100" height="100"></canvas>
      </div>
    )
  }
}