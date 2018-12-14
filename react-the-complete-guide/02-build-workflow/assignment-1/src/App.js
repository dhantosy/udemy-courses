import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: 'dhantosy',
    job: 'developer'
  }

  handleJobChange = (event) => {
    this.setState({
      job: event.target.value
    })
  }

  render() {
    const style = {
      borderRadius: '5px', 
      padding: '8px'
    };

    return (
      <div className="App">
        <UserOutput 
          username={this.state.username} 
          job={this.state.job}
        />
        <UserInput 
          style={style}
          job={this.state.job}
          change={this.handleJobChange}
        />
      </div>
    );
  }
}

export default App;
