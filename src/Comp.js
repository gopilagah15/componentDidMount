import React, { Component } from 'react'

export class Comp extends Component {
  render() { 
    return (
      <div>
        <h1>Name</h1>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

export default Comp
