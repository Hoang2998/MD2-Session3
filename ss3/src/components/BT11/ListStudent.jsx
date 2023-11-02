import React, { Component } from 'react'

export default class ListStudent extends Component {

  render() {
    const {students} = this.props
    return (
      <>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((item,index)=>(
                         <tr key = {index}>
                                    <td>{index+1}</td>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                </tr>
                    ))
                }
            </tbody>
        </table>
      </>
    )
  }
}
