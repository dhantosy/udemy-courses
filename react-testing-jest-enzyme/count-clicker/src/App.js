import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: false
    };
  }

  handleIncrement = () => {
    if (this.state.error) {
      this.setState({ error: false });
    }
    this.setState({ counter: this.state.counter + 1 });
  }

  handleDecrement = () => {
    if (this.state.counter === 0) {
      this.setState({ error: true });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  }

  render() {

    const errorClass = this.state.error ? '' : 'hidden';

    return (
      <div data-test='component-app'>
        <h1 data-test='counter-display'>
          The counter is currently {this.state.counter}
        </h1>
        <div data-test='error-message' className={`error ${errorClass}`}>Counter cannot go below 0</div>
        <button 
          data-test='increment-button'
          onClick={this.handleIncrement}
        >Increment counter</button>
        <button
          data-test='decrement-button'
          onClick={this.handleDecrement}
          // disabled={this.state.counter === 0 ? true :  false}
        >Decrement counter</button>
      </div> 
    )
  }
}

export default App;
