import React, { Component } from 'react'

export default class Questions extends Component {
  render() {
    const {question} = this.props
    return (
      <>
      <h1>{question}</h1>
      </>
    )
  }
}
