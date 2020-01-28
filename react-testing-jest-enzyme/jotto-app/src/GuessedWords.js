import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional React component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - rendered component
 */

const GuessWords = (props) => {
  let contents;

  if (!props.guessedWords.length) {
    contents = (
      <span data-test='guess-instructions'>
        Try toguess the secret word!
      </span>
    )
  }
  
  return (
    <div data-test='component-guessed-words'>
      { contents }
    </div>
  )
};

GuessWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired
}

export default GuessWords;
