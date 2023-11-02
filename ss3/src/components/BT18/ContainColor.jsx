import React, { Component } from 'react'

export default class ContainColor extends Component {
  render() {
    const {colors} = this.props
    return (
      <>
      {
        colors.map((item,index)=>{
          return  <div onClick={()=>{this.props.changeColor(index)}} key ={index}className='same' style={{background:item.color}}>{item.id}</div>
        })
      }
      </>
    )
  }
}
