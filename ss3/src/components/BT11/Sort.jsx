import React, { Component } from 'react'

export default class Sort extends Component {

    changeOption=(event)=>{
        this.props.sort(event.target.value)
    }

  render() {
    return (
      <>
      <select name="" id="" onChange={this.changeOption}>
        <option value="">sort</option>
        <option value="tang">tuoi tang dan</option>
        <option value="giam">tuoi giam dan</option>
      </select>
      </>
    )
  }
}
