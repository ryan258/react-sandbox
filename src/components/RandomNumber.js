import React, { Component } from 'react'

export default class RandomNumber extends Component {
  state = {
    number: 0
  }

  handleClick = (e) => {
    let randomNumber = Math.floor(Math.random() * 10 + 1)
    this.setState({ number: randomNumber })
  }

  render() {
    return (
      <div>
        <h3>Number is {this.state.number}</h3>
        {this.state.number !== 7 ? <button onClick={this.handleClick}>Random Number</button> : <h1>👻 YOU WIN! 👻</h1>}
      </div>
    )
  }
}
