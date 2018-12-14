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
    ],
    showPersons: false
  }

  handleSwitchName = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 18 }
      ]
    })
  }

  handleChangeName = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 18 }
      ]
    })
  }

  handleDeleteName = (personIndex) => {
    // slice() copies the full array, then create a new that stored to the persons
    // const persons = this.state.persons.slice();
    // spread operator spreads element in the array into a list of elements which then added to the original array, so we have a new array
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }

  togglePersonHandler = () => {
    const showPersons = this.state.showPersons;

    this.setState({
      showPersons: !showPersons
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        // { /* pass props to children */ }
        // { /* <Person name="Dhanto" age="30" /> */}
        // { /* passing state */ }
        // {  passing state through method to other component that does not have direct access to the state by creating "click" property  }
        <div>
          { /* map function converts arrays, it maps all elements in a given array */ }
          { /* it takes an element of the input, so a single person */ }
          { /* the function will executed to every element in the array */ }
          { /* map function has a second argument, the index in the array  */ }
          {this.state.persons.map((person, index) => {
            return <Person 
              click={this.handleDeleteName.bind(this, index)}
              name={person.name} 
              age={person.age} 
            />
          })}
          { /* <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            click={this.handleSwitchName.bind(this, "DanSan")}
            changed={this.handleChangeName}
          /> */ }
          { /* anything between opening and closing of component, is includes in props.children */ }
          { /* <Person name="Santika" age="28">So fun!</Person> */ }
        </div>
      )
    }

    // return React.createElement('div', { className: 'App' }, 
    //   React.createElement('h1', {}, 'Hello!'));
    // is the same as:
    return (
      <div className="App">
        <h1>Hi!</h1>
        {persons}
        <br/>
        <button onClick={this.handleSwitchName.bind(this, "Dan")}>Switch Name 1</button>
        { /* another way of passing argument: */ }
        { /* when using arrow function, it creates return if used without {} */ }
        <br/>
        <button 
          style={style} 
          onClick={() => this.handleSwitchName('Dan14')}>Switch Name 2</button>
        <br/>
        <button onClick={this.togglePersonHandler}>Show Persons</button>
      </div>
    );
  }
}

export default App;
