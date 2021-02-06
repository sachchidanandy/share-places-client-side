import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../common/form_elements/Input';
import Button from '../common/form_elements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../common/utils/validators';
import { useForm } from '../common/utils/hooks/form-hook';

const DUMMY_DATA = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipNje5_Im-gYAMhz5EnQinoIS8ZBaTFawVzcewTz=w408-h271-k-no',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lat: 40.7484405,
      lng: -73.9856644
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipNje5_Im-gYAMhz5EnQinoIS8ZBaTFawVzcewTz=w408-h271-k-no',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lat: 40.7484405,
      lng: -73.9856644
    },
    creator: 'u1'
  },
  {
    id: 'p3',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipNje5_Im-gYAMhz5EnQinoIS8ZBaTFawVzcewTz=w408-h271-k-no',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lat: 40.7484405,
      lng: -73.9856644
    },
    creator: 'u2'
  },
  {
    id: 'p4',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipNje5_Im-gYAMhz5EnQinoIS8ZBaTFawVzcewTz=w408-h271-k-no',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lat: 40.7484405,
      lng: -73.9856644
    },
    creator: 'u2'
  } 
];

const EditPlace = props => {
  const { placeId } = useParams();

  const placeToEdit = DUMMY_DATA.find(data => data.id === placeId);
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: placeToEdit.title,
        isValid: true
      },
      description: {
        value: placeToEdit.description,
        isValid: true
      }
    },
    true
  );

  const handleFormSubmit = event => {
    event.preventDefault();
    console.log("form data ==== ",formState);
  }
  
  if (!placeToEdit) {
    return <h1> No Place found !</h1>
  }

  return <form className="place-form" onSubmit={handleFormSubmit}>
    <Input
      id='title'
      type='text'
      label='Title'
      errorMessage='Please enter valid data'
      validator={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
      inputHandler={inputHandler}
      initialValue={placeToEdit.title}
      initialValidity={true}
    />
    <Input
      id='description'
      element='textarea'
      label='Description'
      errorMessage='Please enter valid description (at least of 5 Characters)'
      validator={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
      inputHandler={inputHandler}
      initialValue={placeToEdit.description}
      initialValidity={true}
    />
    <Button type="submit" disabled={!formState.isValid}>
      UPDATE PLACE
    </Button>
  </form>
};

export default EditPlace;
