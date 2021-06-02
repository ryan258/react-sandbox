import React, { Component } from 'react'
import LotteryBall from './LotteryBall'

import './Lottery.css'

export default class Lottery extends Component {
  //! 1.) Start w/ default props!
  static defaultProps = {
    title: 'Default Lotto (all defaultProps)',
    maxBalls: 6,
    maxNum: 40
  }

  constructor(props) {
    super(props)

    //! 2.) Set state for things to keep track of
    this.state = {
      // set blank balls on initial load
      nums: Array.from({ length: this.props.maxBalls })
    }
    // this.generateBalls = this.generateBalls.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  //! 4.) Generate the numbers on button click
  generateBalls(numBalls, maxNum) {
    this.setState((currState) => ({
      nums: currState.nums.map((n) => Math.floor(Math.random() * this.props.maxNum) + 1)
    }))
  }
  handleClick() {
    this.generateBalls()
  }

  //! 3.) Create render
  render() {
    return (
      <section className="Lottery">
        {/* //! 3a.) Generate Title */}
        <h1>{this.props.title}</h1>
        {/* //! 3b.) Generate all the balls */}
        {this.state.nums.map((n, i) => (
          <LotteryBall key={i} num={n} />
        ))}
        {/* //! 3c.) Wire up the button */}
        <button onClick={this.handleClick}>Generate</button>
      </section>
    )
  }
}
