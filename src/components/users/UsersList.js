import React from 'react';

import UserItem from './UserItem';
import Card from '../common/Card';
import './users_list.css';

export default props => {
  const { items } = props;

  // Check if there are no items
  if (items.length === 0) {
    return (
      <div className='center'>
        <Card>
          <h2>No Users found</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className='user-list'>
      {
        items.map(({ id, image, name, places }) => (
          <UserItem
            key={id}
            id={id}
            image={image}
            name={name}
            placeCount={places}
          />
        ))
      }
    </ul>
  );
};
