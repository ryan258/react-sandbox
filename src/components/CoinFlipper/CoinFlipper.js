import React, { Component } from 'react'
import { choice } from './helpers'

import './CoinFlipper.css'
import Coin from './Coin'

export default class CoinFlipper extends Component {
  static defaultProps = {
    coins: [
      { side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
      { side: 'tails', imgSrc: 'https://qph.fs.quoracdn.net/main-qimg-6dd207e1e7d266fd3ffe6b0ae4f6ed73' }
    ]
  }
  constructor(props) {
    super(props)
    this.state = {
      coinFace: null,
      flipCount: 0,
      headsCount: 0,
      tailsCount: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  flipCoin() {
    const newCoin = choice(this.props.coins)

    this.setState((state) => {
      return {
        coinFace: newCoin,
        flipCount: state.flipCount + 1,
        headsCount: state.headsCount + (newCoin.side === 'heads' ? 1 : 0),
        tailsCount: state.tailsCount + (newCoin.side === 'tails' ? 1 : 0)
      }

      ///////
      // let newState = {
      //   ...state,
      //   coinFace: newCoin,
      //   flipCount: state.flipCount + 1
      // }
      // if (newCoin.side === 'heads') {
      //   newState.headsCount += 1
      // } else {
      //   newState.tailsCount += 1
      // }

      // return newState
      ///////
      // headsCount: flip < 0.5 ? state.headsCount + 1 : state.headsCount,
      // tailsCount: flip >= 0.5 ? state.tailsCount + 1 : state.tailsCount
    })
  }

  handleClick() {
    // console.log('flip')
    this.flipCoin()
  }

  render() {
    return (
      <div className="CoinFlipper">
        <h3>Let's Flip a Coin!</h3>
        {this.state.coinFace && <Coin info={this.state.coinFace} />}
        <button onClick={this.handleClick}>Flip Coin</button>
        <p>
          Out of {this.state.flipCount} flips, there have been {this.state.headsCount} heads and {this.state.tailsCount} tails.
        </p>
      </div>
    )
  }
}
