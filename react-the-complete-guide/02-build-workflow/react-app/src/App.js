import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    // return React.createElement('div', { className: 'App' }, 
    //   React.createElement('h1', {}, 'Hello!'));
    // is the same as:
    return (
      <div className="App">
        <h1>Hi!</h1>
        { /* pass props to children */ }
        <Person name="Dhanto" age="30" />
        { /* anything between opening and closing of component, is includes in props.children */ }
        <Person name="Santika" age="28">So fun!</Person>
        <button>Switch Name</button>
      </div>
    );
  }
}

export default App;
