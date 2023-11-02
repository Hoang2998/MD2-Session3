import React, { Component } from 'react'

export default class BT8btn extends Component {
    constructor(){
        super()
        this.state={
            status:""
        }
    }

  render() {
    return (
      <>
        <button onClick={() => this.props.control("start")}>Start</button>
        <button onClick={() => this.props.control("stop")}>Stop</button>
        <button onClick={() => this.props.control("reset")}>Reset</button>
      </>
    )
  }
}
