import React from 'react';

/**
 * Functional React component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - rendered component
 */

export default (props) => {
  if (props.success) {
    return (
      <div data-test='component-congrats'>
        <span data-test='congrats-message'>
          Congratulations! You guessed the word!
        </span>
      </div>
    )
  } else {
    return (
      <div data-test='component-congrats'></div>
    )
  }
}
