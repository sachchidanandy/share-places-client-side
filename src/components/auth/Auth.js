import React, { useContext, useEffect, useState } from 'react';

import Card from '../common/Card';
import Button from '../common/form_elements/Button';
import Input from '../common/form_elements/Input';
import { useForm } from '../common/utils/hooks/form-hook';
import { VALIDATOR_EMAIL, VALIDATOR_MIN, VALIDATOR_REQUIRE } from '../common/utils/validators';
import { AuthContext } from '../common/utils/context/AuthContext';
import './auth.css';

const Auth = props => {
  const [ formState, inputHandler, setFormStateValue ] = useForm();
  const [ showLoginForm, setShowLoginForm ] = useState(true);
  const auth = useContext(AuthContext);

  const handleAuthentication = event => {
    event.preventDefault();
    console.log("formState ======= ", formState);
    auth.login();
  };

  const changeFormState = () => {
    if (formState && formState.inputs) {
      showLoginForm
        ? setFormStateValue( null, formState.inputs.email && formState.inputs.email.isValid && formState.inputs.password && formState.inputs.password.isValid)
        : setFormStateValue(null, false);
    }
  }

  useEffect(changeFormState, [showLoginForm, setFormStateValue]);

  return <Card className="authentication">
    <h2>Login Required</h2>
    <hr/>
    <form onSubmit={handleAuthentication}>
      {
        showLoginForm || <Input
          id='name'
          type='text'
          label='Name'
          errorMessage='Please enter your name data'
          validator={[VALIDATOR_REQUIRE()]}
          inputHandler={inputHandler}
        />
      }
      <Input
        id='email'
        type='text'
        label='Email Id'
        errorMessage='Please enter valid email Id'
        validator={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
        inputHandler={inputHandler}
      />
      <Input
        id='password'
        type='text'
        label='Password'
        errorMessage='Please enter valid password min 8 characters'
        validator={[VALIDATOR_MIN(8)]}
        inputHandler={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        SUBMIT
      </Button>
      {showLoginForm ?
        <p>Not a member? <span className="authentication__switch"onClick={() => setShowLoginForm(false)}>Signup now</span></p>
        : <p>Already a member? <span className="authentication__switch" onClick={() => setShowLoginForm(true)}>Login now</span></p>
       }
    </form>
  </Card>
}

export default Auth;
