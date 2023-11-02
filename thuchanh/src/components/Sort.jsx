import React, { Component } from 'react'

export default class Sort extends Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         option:"",
    //     }
    // }
    changeOption=(event)=>{
        this.props.sort(event.target.value)
    }
  render() {
    return (
      <>
        <select name="" id="" onChange={this.changeOption}>
            <option value="">Sap xep</option>
            <option value="name">Theo ten</option>
            <option value="age">Tang dan</option>
        </select>
      </>
    )
  }
}
