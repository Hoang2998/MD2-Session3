import React, { Component } from 'react'
import ContainColor from './ContainColor'
import './BT18.css'

export default class BT18 extends Component {
    constructor(){
        super()
        this.state={
            colors:[
                {
                    id:1,
                    color:"rgb(252,100,200)"
                },
                {
                    id:2,
                    color:"rgb(252,0,200)"
                },
                {
                    id:3,
                    color:"rgb(252,100,0)"
                },
                {
                    id:4,
                    color:"rgb(0,100,252)"
                },
                {
                    id:5,
                    color:"rgb(2,252,200)"
                },
                {
                    id:6,
                    color:"rgb(100,100,100)"
                }

            ]
        }
    }
    changeColor=(index)=>{
        
        let newColor = this.state.colors[index].color.split(",")
        newColor[newColor.length-2] =  Math.floor(Math.random()*255)
        let color = newColor.join()
        this.state.colors[index].color = color
        this.setState({
            colors:[...this.state.colors]
        })

    }
  render() {
    return (
      <>
        <ContainColor colors={this.state.colors} changeColor = {this.changeColor}></ContainColor>
      </>
    )
  }
}
