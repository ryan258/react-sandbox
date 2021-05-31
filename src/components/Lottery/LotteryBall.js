import React, { Component } from 'react'
import './LotteryBall.css'

export default class LotteryBall extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     title: '',
  //     lottaryBalls: [],
  //     numBalls: 0,
  //     maxNum: 10
  //   }
  // }
  render() {
    return <div className="LotteryBall">{this.props.num}</div>
  }
}
