import React, { useEffect, useReducer } from 'react';

import { validate } from '../utils/validators';
import './input.css';

// A reducer functions accepts 2 arg 1st is state and 2nd is the action we dispatch.
// It should return a new state.
const inputReducer = (state, action) => {
  const { type, val, validator } = action;

  switch (type) {
    case 'ON_VALUE_CHANGE':
      
      return {
        ...state,
        val,
        isValid: validate(val, validator)
      };
  
    case 'TOUCHED':
      return {
        ...state,
        isTouched: true
      };

    default:
      return state;
  }
}

const Input = ({ id, element, rows, type, placeholder, label, errorMessage, validator, inputHandler, initialValue, initialValidity }) => {

  // Side note we can use useState() hook but it's better to use useReducer() if we have states related to each other
  // useReducer() returns exactly 2 values inputHandler1st currentState and 2nd is dispatch use to dispath action to change state using reducer.
  // useReducer() acceps one necessary arg that is reducer function and 2nd can be initial store value.

  const [ inputStore, dispatch ] = useReducer(inputReducer, { val: initialValue || '', isTouched: false, isValid: initialValidity || false });

  const { val, isValid, isTouched } = inputStore;

  const onChangeHandler = e => {
    dispatch({ type: 'ON_VALUE_CHANGE', val: e.target.value, validator });
  };

  const onTouchHandler = e => {
    dispatch({ type: 'TOUCHED'});
  };

  useEffect(() => {
    inputHandler(id, val, isValid);
  }, [id, val, isValid, inputHandler]);

  const elementToRender = element === 'textarea' ? (
    <textarea
      id={id}
      rows={rows || 3}
      value={val}
      onBlur={onTouchHandler}
      onChange={onChangeHandler}
    />    
  ) : (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={val}
      onBlur={onTouchHandler}
      onChange={onChangeHandler}
    />
  );

  return (
    <div className={`form-control ${!isValid && isTouched && 'form-control--invalid'}`}>
      <label htmlFor={id}>{label}</label>
      {elementToRender}
      {!isValid && isTouched && <p>{errorMessage}</p>}
    </div>
  );
};

export default Input;
