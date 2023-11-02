import React, { Component } from 'react'

export default class Student extends Component {
  render() {
    const {student} = this.props;
    return (
      <>
       <td>{this.props.index+1}</td>
        <td>{student.name}</td>
        <td>{student.age}</td>
        <td>{student.id}</td>
      </>
    )
  }
}
