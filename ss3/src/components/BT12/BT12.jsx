import React, { Component } from 'react'

export default class BT12 extends Component {
    constructor(){
        super()
        this.state={
            img:["./img/tiger.png","./img/alpaca.png","./img/panda-bear.png","./img/rhinoceros.png"],
            page: 0
        }
    }
    nextPage=()=>{
        if(this.state.page < 3){
            this.setState({
                page:this.state.page + 1
            })
        } 
    }
    prePage=()=>{
        if(this.state.page > 0){
            this.setState({
                page:this.state.page - 1
            })
        }
    }
  render() {
   
    return (
      <>
      <button onClick={this.nextPage}>Next</button>
      <img src={this.state.img[this.state.page]} alt="" />
      <button onClick={this.prePage}>Pre</button>
      </>
    )
  }
}
