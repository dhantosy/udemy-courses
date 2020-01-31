import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input, { UnconnectedInput } from './Input';

/**
 * Factory function to create a shallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} initialState 
 * @returns {ShallowWrapper}
 */

const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();

  return wrapper;
}

describe('render', () => {

  describe('word has not been guessed', () => {
    let wrapper;

    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    })

    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });

    test('renders submit button', () => {
      const submitBox = findByTestAttr(wrapper, 'submit-button');
      expect(submitBox.length).toBe(1);
    });
  });

  describe('word has been guessed', () => {
    let wrapper;

    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    })

    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    test('does not renders input box', () => {
      const component = findByTestAttr(wrapper, 'input-box');
      expect(component.length).toBe(0);
    });

    test('does not renders submit button', () => {
      const component = findByTestAttr(wrapper, 'submit-button');
      expect(component.length).toBe(0);
    });
  });
});

describe('redux props', () => {

  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;

    expect(successProp).toBe(success);
  });

  test('`guessWord` action creator is a function prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe('`guessWord` action creator call', () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = 'train';

  beforeEach(() => {
    guessWordMock = jest.fn();

    // setup mock for guessWord
    const props = {
      guessWord: guessWordMock
    }

    // setup component with guessWordMock as the guessWord prop
    wrapper = shallow(<UnconnectedInput { ...props} />);

    // add value to input box
    wrapper.setState({ currentGuess: guessedWord });

    // simulate click
    const submitutton = findByTestAttr(wrapper, 'submit-button');
    submitutton.simulate('click', { preventDefault() {} });

  })

  test('calls `guessWord` when button is clicked', () => {

    // check to see if mock ran
    const guessWordCallCount = guessWordMock.mock.calls.length;
    expect(guessWordCallCount).toBe(1);
  });

  test('calss `guessWord` with input value as argument', () => {

    // [ ['', ''] ]
    const guessWordArg = guessWordMock.mock.calls[0][0];
    expect(guessWordArg).toBe(guessedWord);
  })
})
