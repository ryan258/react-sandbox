import React, { Component } from 'react'

export default class ScoreKeeper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0
    }
    this.scoreOne = this.scoreOne.bind(this)
    this.scoreThree = this.scoreThree.bind(this)
    this.incrementScore = this.incrementScore.bind(this)
    this.incrementThree = this.incrementThree.bind(this)
  }

  // use previous state in the calculation of a new state (depends on the previous state)
  // -
  scoreOne() {
    // not a good idea to update state like this if it relies on existing state values
    this.setState({ score: this.state.score + 1 })
  }

  scoreThree() {
    this.setState((currentState) => ({ score: currentState.score + 1 }))
    this.setState((currentState) => ({ score: currentState.score + 1 }))
    this.setState((currentState) => ({ score: currentState.score + 1 }))
  }

  // abstracting state updates - preferrable, makes things easier to test
  incrementScore(currState) {
    return { score: currState.score + 1 }
  }
  incrementThree() {
    this.setState(this.incrementScore)
    this.setState(this.incrementScore)
    this.setState(this.incrementScore)
  }

  render() {
    return (
      <div>
        <h1>Score is: {this.state.score}</h1>
        <button onClick={this.scoreOne}>Score 1!</button>
        <button onClick={this.scoreThree}>Score 3!</button>
        <button onClick={this.incrementThree}>Increment Score by 3...</button>
      </div>
    )
  }
}
