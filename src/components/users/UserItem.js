import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../common/Avatar';
import Card from'../common/Card';
import './user_item.css';

export default ({ id, image, name, placeCount }) => {
  return (
    <li className='user-item'>
      <Card className='user-item__content'>
        <Link to={`/${id}/places`}>
          <div className='user-item__image'>
            <Avatar image={image} alt={name}/>
          </div>
          <div className='user-item__info'>
            <h2>{name}</h2>
            <h3>{placeCount} {placeCount === 1 ? 'Place' : 'Places'}</h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};
