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

  handleSwitchName = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 18 }
      ]
    })
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
        { /* passing state through method to other component that does not have direct access to the state by creating "click" property */ }
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.handleSwitchName.bind(this, "DanSan")}
        />
        { /* anything between opening and closing of component, is includes in props.children */ }
        <Person name="Santika" age="28">So fun!</Person>
        <button onClick={this.handleSwitchName.bind(this, "Dan")}>Switch Name</button>
      </div>
    );
  }
}

export default App;
