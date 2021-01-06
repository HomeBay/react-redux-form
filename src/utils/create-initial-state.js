import isPlainObject from './is-plain-object';
import createFieldState, { createFormState } from './create-field';

export function createInitialState(model, state, customInitialFieldState = {}, options = {}) {
  if (Array.isArray(state) || isPlainObject(state)) {
    return createFormState(model, state, customInitialFieldState, options);
  }
  return createFieldState(model, state, customInitialFieldState, options);
}

export default createInitialState;
