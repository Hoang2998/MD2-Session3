import React, { Component } from 'react'

export default class BT10 extends Component {
    constructor(){
        super()
        this.state={
            text:"",
            newtext:""
        }
    }
    changeText=(event)=>{
        this.setState({
            text:event.target.value
        })
    }
    showtext=()=>{
        this.setState({
            newtext:this.state.text
        })
    }
  render() {
    return (
      <>
      <input type="text" onChange={this.changeText}/>
      <button onClick={this.showtext}>Show</button>
      <p>{this.state.newtext}</p>
      </>
    )
  }
}
