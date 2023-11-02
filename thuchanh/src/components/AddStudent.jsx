import React, { Component } from 'react'

export default class AddStudent extends Component {
  constructor(){
    super()
    this.state ={
        name:"",
        age:"",
        id:"",
    }
  }
    addNameValue=(event)=>{
      this.setState({
        name:event.target.value
      })
    }  
    addAgeValue=(event)=>{
      this.setState({
        age:event.target.value
      })
    } 
    addIdValue=(event)=>{
      this.setState({
        id:event.target.value
      })
    } 
  
  render() {
    return (
      <>
      <button onClick={()=>{this.props.Add(this.state)}}>ADD</button>
      <table>
        <tr>
          <td>Ten</td>
          <td><input type="text" onChange={this.addNameValue} /></td>
        </tr>
        <tr>
          <td>tuoi</td>
          <td><input type="text" onChange={this.addAgeValue}/></td>
        </tr>
        <tr>
          <td>ID</td>
          <td><input type="text" onChange={this.addIdValue}/></td>
        </tr>
      </table>
      </>
    )
  }
}
