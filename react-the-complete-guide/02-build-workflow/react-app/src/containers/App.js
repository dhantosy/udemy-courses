import React, { Component } from 'react';
import classes from './App.css';
// import Radium, { StyleRoot } from 'radium'; // enables pseudo and media query in inline styles
import Person from '../Persons/Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

// class has properties
// property is variable of class
class App extends Component {
  // state is managed inside a component
  // if state is changed, component will rerender DOM 
  state = {
    persons: [
      { id: '291282', name: 'Dhanto', age: 30 },
      { id: '019231', name: 'Santika', age: 28 },
      { id: '812211', name: 'Yudha', age: 25 },
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

  handleChangeName = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // OR
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  handleDeleteName = (personIndex) => {
    // slice() copies the full array, then create a new that stored to the persons
    // const persons = this.state.persons.slice();
    // spread operator spreads element in the array into a list of elements which then added to the original array, so we have a new array
    // we should update state immutably. means we create a copy then update the new state
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
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let btnClass = '';

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
            return <ErrorBoundary key={person.id}>
              <Person 
                click={this.handleDeleteName.bind(this, index)}
                name={person.name} 
                age={person.age} 
                changed={(event) => this.handleChangeName(event, person.id)}
              />
            </ErrorBoundary>
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
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }

      btnClass = classes.red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    // return React.createElement('div', { className: 'App' }, 
    //   React.createElement('h1', {}, 'Hello!'));
    // is the same as:
    return (
      // <StyleRoot>
        <div className={classes.App}>
          <h1 className={assignedClasses.join(' ')}>Hi!</h1>
          <div style={{marginBottom: "20px"}}>
            <button onClick={this.handleSwitchName.bind(this, "Dan")}>Switch Name 1</button>
           </div> 
          { /* another way of passing argument: */ }
          { /* when using arrow function, it creates return if used without {} */ }
          <div style={{marginBottom: "20px"}}>
            <button onClick={() => this.handleSwitchName('Dan14')}>Switch Name 2</button>
          </div>
          <button className={btnClass} onClick={this.togglePersonHandler}>Show Persons</button>
          {persons}
        </div>
      // </StyleRoot>
    );
  }
}

// export default Radium(App);
export default App;
