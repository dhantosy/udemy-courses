import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

  let btnClass = '';
  let assignedClasses = [];

  if (props.showPersons) {
    btnClass = classes.red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1 className={assignedClasses.join(' ')}>Hi!</h1>
      <button className={btnClass} onClick={props.clicked}>Show Persons</button>
    </div>
  );

};

export default cockpit;