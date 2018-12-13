import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// class has properties
// property is variable of class
class App extends Component {
  // state is managed inside a component
  // if state is changed, component will rerender DOM 
  state = {
    persons: [
      { name: 'Dhanto', age: 30 },
      { name: 'Santika', age: 28 },
    ]
  }

  handleSwitchName = () => {

  }

  render() {
    // return React.createElement('div', { className: 'App' }, 
    //   React.createElement('h1', {}, 'Hello!'));
    // is the same as:
    return (
      <div className="App">
        <h1>Hi!</h1>
        { /* pass props to children */ }
        { /* <Person name="Dhanto" age="30" /> */}
        { /* passing state */ }
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age } />
        { /* anything between opening and closing of component, is includes in props.children */ }
        <Person name="Santika" age="28">So fun!</Person>
        <button onClick={ this.handleSwitchName }>Switch Name</button>
      </div>
    );
  }
}

export default App;
