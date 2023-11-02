import React, { Component } from 'react'

export default class Search extends Component {
    constructor(){
        super()
        this.state={
            value:""
        }
    }

    changeValue=(event)=>{
        this.setState({
            value:event.target.value
        })
    }
  render() {
    return (
      <>
      <input type="text" onChange={this.changeValue} />
      <button onClick={()=>{this.props.search(this.state.value)}}>Search</button>
      </>
    )
  }
}
