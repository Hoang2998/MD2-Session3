import React, { Component } from 'react'
import Student from './Student';

export default class ListStudentS extends Component {
  render() {
    
    const {student} = this.props
    console.log(student);
    // tuong tu let student = this.props.student
    return (
      <>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>id</th>
                </tr>
            </thead>
            <tbody>
                {
                    student.map((item,index)=>(
                        <tr key = {index}>
                           <Student student={item} index={index}></Student>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </>
    )
  }
}
