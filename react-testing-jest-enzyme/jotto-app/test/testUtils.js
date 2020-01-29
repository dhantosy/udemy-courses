import CheckPropTypes from 'check-prop-types';
import propTypes from 'prop-types';

import rootReducer from '../src/reducers';
import { createStore } from 'redux';

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 * globasl: rootReducer
 * @param {object} initialState
 * @function storeFactory
 * @returns {Store} - redux store
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
}

/**
 * Return node(s) with the given data-test attr.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attr for search
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
  const propError = CheckPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
}
