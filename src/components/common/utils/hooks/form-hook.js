import { useCallback, useReducer } from 'react';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      let formValidation = true;
      for (const elementId in state.inputs) {
        if (elementId === action.payload.id) {
          formValidation = formValidation && action.payload.isValid
        } else {
          formValidation = formValidation && state.inputs[elementId].isValid
        }
      }
      return {
        inputs: {
          ...state.inputs,
          [action.payload.id]: {
            value: action.payload.val,
            isValid: action.payload.isValid
          }
        },
        isValid: formValidation 
      };
    case 'RESET_FORM_STATUS':
      return {
        inputs: action.payload.initialFormInputs ? {
          ...action.payload.initialFormInputs
        } : { ...state.inputs},
        isValid: action.payload.initialFormStatus
      }
    default:
      return state;
  }
};

export const useForm = (initialFormInputs, initialFormStatus) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialFormInputs || {},
    isValid: initialFormStatus || false
  });

  const inputHandler = useCallback((id, val, isValid) => {
    dispatch({
      type: 'CHANGE_INPUT',
      payload: { id, val, isValid }
    });
  }, []);

  const setFormStateValue = useCallback((initialFormInputs, initialFormStatus) => {
    dispatch({
      type: 'RESET_FORM_STATUS',
      payload: {initialFormInputs, initialFormStatus }
    });
  }, []);

  return [formState, inputHandler, setFormStateValue];
}