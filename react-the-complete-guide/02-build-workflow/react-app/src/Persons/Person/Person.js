// when creating components, you have the choice between two different ways:
// 1. Functional components (also referred to as "presentational", "dumb" or "stateless" components - more about this later in the course) => const cmp = () => { return <div>some JSX</div> } (using ES6 arrow functions as shown here is recommended but optional)
// 2. class-based components (also referred to as "containers", "smart" or "stateful" components) => class Cmp extends Component { render () { return <div>some JSX</div> } } 

// do not have to import component because it contains only a function.
import React, { Component } from 'react';
import classes from './Person.css';
// import Radium from 'radium'; // enables pseudo and media query in inline styles

// passing props from parent component
// const person = (props) => {

//   // use parenthesis to enable multiline
//   return ( 
//     <div className={classes.Person}>
//       <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
//       <p>{props.children}</p>
//       <input type="text" onChange={props.changed} value={props.name} />
//     </div>
//     )
// }

// // export default Radium(person);
// export default person;

class Person extends Component {
  render () {
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    )
  }
}

export default Person;