import React from 'react';

import UsersList from './UsersList';
import './users.css';

export default () => {
  const users = [{
    id: 'u1',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    name: 'Alina',
    places: 4
  }];

  return (
    <UsersList items={users}/>
  );
};
