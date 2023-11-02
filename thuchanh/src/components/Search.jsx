import React, { Component } from 'react'

export default class Search extends Component {
    constructor(){
        super()
        this.state = {
            search:"",
        }
    }
    changeValue=(event)=>{
        // laấy giá trị ô input ng dùng nhập vào
        // console.log(event.target.value);
        // sau khi laasy xong cập nhập state
        this.setState({
            search:event.target.value,
        })
    }
    // ham click tim kiem
    // handleSearch=()=>{
    //     this.props.search()
    // }
  render() {
    return (
      <>
      <input type="text" 
      onChange={this.changeValue}
      />
        <button onClick={()=>this.props.search(this.state.search)} >Tìm kiếm</button>
      </>
    )
  }
}
