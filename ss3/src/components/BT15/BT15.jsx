import React, { Component } from 'react'
import InputSong from './InputSong'
import ListSong from './ListSong'

export default class BT15 extends Component {
    constructor(){
        super()
        this.state={
            songs:["Sau tat ca","See You Again","Con mua ngang qua","Sing my song"],
            // newsong:""
        }
    }
    addSong=(value)=>{
        let newsong = [...this.state.songs,value]    
        this.setState({
            songs:newsong
        })
    }
    deleteSong=(index)=>{
        this.state.songs.splice(index,1)
        let newsong = [...this.state.songs] 
        this.setState({
            songs:newsong
        })
    }
  render() {
    return (
      <>
      <InputSong addSong={this.addSong}></InputSong>
      <ListSong songs= {this.state.songs} deleteSong = {this.deleteSong}></ListSong>
      </>
    )
  }
}
