import React, { Component } from 'react'

export default class Answer extends Component {
    constructor(){
        super()
        this.state={
            anser:""
        }
    }
changeValue=(event)=>{
    console.log("111")
    this.setState({
        anser:event.target.value
    })
}

  render() {
    return (
      <>
      <input type="text" onChange={this.changeValue} />
      <button onClick={()=>{this.props.anserQuestion(this.state.anser)}}>Tra loi</button>
      </>
    )
  }
}
