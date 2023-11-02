import React, { Component } from 'react'
import BT8btn from '../BT8btn'

export default class BT8 extends Component {
    constructor(){
        super()
        this.state ={
            time:10,
            down:""
        }
    }

    control=(value)=>{
        if(value == "start"){
            this.state.down = setInterval(()=>{
                this.setState({
                    time:this.state.time-1
                })
    
            },1000)
        }
        if(value == "stop"){
            clearInterval(this.state.down)
        }
        if(value == "reset"){
            clearInterval(this.state.down)
            this.setState({
                time:10
            })
        }
    }

  render() {
    return (
      <>
      <BT8btn control={this.control}></BT8btn>
      <p>Thời gian đếm ngược:{this.state.time}</p>
      </>
    )
  }
}


