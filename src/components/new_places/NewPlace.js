import React from 'react';

import Input from '../common/form_elements/Input';
import Button from '../common/form_elements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../common/utils/validators';
import { useForm } from '../common/utils/hooks/form-hook';
import './new_place.css';


export default () => {

  const [formState, inputHandler] = useForm();

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formState.inputs);
  }

  return <form className='place-form' onSubmit={handleSubmit}>
    <Input
      id='title'
      type='text'
      label='Title'
      errorMessage='Please enter valid data'
      validator={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
      inputHandler={inputHandler}
    />
    <Input
      id='description'
      element='textarea'
      label='Description'
      errorMessage='Please enter valid description (at least of 5 Characters)'
      validator={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
      inputHandler={inputHandler}
    />
    <Input
      id='address'
      element='textarea'
      label='Address'
      errorMessage='Please enter valid data'
      validator={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
      inputHandler={inputHandler}
    />
    <Button type="submit" disabled={!formState.isValid}>
      ADD PLACE
    </Button>
  </form>;
};