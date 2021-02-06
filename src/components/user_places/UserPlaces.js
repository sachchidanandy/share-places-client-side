import React from'react';
import { useParams } from 'react-router-dom';

import PlaceList from './PlaceList';
import './user_places.css';

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

const UserPlaces= props => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_DATA.filter( places => places.creator === userId );
  return <PlaceList items={loadedPlaces}/>;
};

export default UserPlaces;
