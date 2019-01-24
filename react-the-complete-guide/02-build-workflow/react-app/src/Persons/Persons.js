import React, { Component } from 'react';
import Person from './Person/Person';

// stateful component
class Persons extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  componentDidMount() {
    
  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked;
    // return true;
  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate() {

  }

  render() {
    return this.props.persons.map((person, index) => {
      return <Person 
          click={() => this.props.clicked(index)}
          name={person.name} 
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
    });
  }
}

// stateless component
// const persons = (props) => props.persons.map((person, index) => {
//             return <Person 
//                 click={() => props.clicked(index)}
//                 name={person.name} 
//                 age={person.age}
//                 key={person.id}
//                 changed={(event) => props.changed(event, person.id)}
//               />
//           });

// export default persons;
export default Persons;