import Lottery from './components/Lottery/Lottery'
import RandomNumber from './components/RandomNumber'
import ScoreKeeper from './components/ScoreKeeper'
import CoinFlipper from './components/CoinFlipper/CoinFlipper'

function App() {
  return (
    <div className="App">
      <h1>React Sandbox</h1>
      <div className="component-example-container">
        <h2>CoinFlipper</h2>
        <CoinFlipper />
      </div>
      <div className="component-example-container">
        <h2>Lottery</h2>
        <Lottery />
        <Lottery title="Monster Lotto!" maxBalls={3} maxNum={9} />
      </div>
      <div className="component-example-container">
        <h2>ScoreKeeper</h2>
        <ScoreKeeper />
      </div>
      <div className="component-example-container">
        <h2>RandomNumber Component</h2>
        <RandomNumber />
      </div>
    </div>
  )
}

export default App
