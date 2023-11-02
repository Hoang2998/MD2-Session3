import React, { Component } from 'react'

export default class ListSong extends Component {
  render() {
    const {songs} = this.props
    return (
      <>
      <h1>Danh Sach Bai Hat</h1>
      <ul>
        {
            songs.map((item,index)=>{
                return <li key = {index}>{item} <button onClick={()=>{this.props.deleteSong(index)}}>Xoa</button></li> 
            })
        }
      </ul>
      </>
    )
  }
}
