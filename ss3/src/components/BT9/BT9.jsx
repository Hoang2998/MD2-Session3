import React, { Component } from 'react'

export default class BT9 extends Component {
  constructor(){
    super()
    this.state={
      text:"",
      textnew:""
    }
  }
  changeText=(event)=>{
    this.setState({
      text:event.target.value
    })
  }
  changeTextNew=()=>{
    this.setState({
      textnew:this.state.text
    })
  }
  render() {
    return (
      <>
      <textarea name="" id="" cols="30" rows="10" onChange={this.changeText}></textarea>
      <button onClick={this.changeTextNew}>display</button>
      <p>{this.state.textnew}</p>
      </>
    )
  }
}
