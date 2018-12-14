import React from 'react';
import './UserOutput.css'

// passing props from parent component
const userOutput = (props) => {
  return ( 
    <div className="output">
      <p>My name is {props.username}</p>
      <p>I'm a {props.job}</p>
    </div>
    )
}

export default userOutput;