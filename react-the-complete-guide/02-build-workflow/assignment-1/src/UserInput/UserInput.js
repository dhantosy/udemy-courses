import React from 'react';

// passing props from parent component
const userInput = (props) => {
  return ( 
    <div className="input">
      <input 
        type="text" 
        onChange={props.change} 
        value={props.job} />
    </div>
    )
}

export default userInput;