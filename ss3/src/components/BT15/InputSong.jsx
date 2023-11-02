import React, { Component } from 'react'

export default class InputSong extends Component {
    constructor(){
        super()
        this.state={
            newSong:""
        }
    }
    newSong=(event)=>{
        this.setState({
            newSong:event.target.value
        })
    }

  render() {
    return (
      <>
      <input type="text" onChange={this.newSong}/>
      <button onClick={()=>{this.props.addSong(this.state.newSong)}}>submit</button>
      </>
    )
  }
}
