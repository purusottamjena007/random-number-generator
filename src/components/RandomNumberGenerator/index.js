// Write your code here
import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  generateRandomNumber = () => {
    const number = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: number})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="app-container">
        <div className="container-card">
          <h1 className="card-heading">Random Number</h1>
          <p className="card-description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="card-button"
            onClick={this.generateRandomNumber}
          >
            Generate
          </button>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
