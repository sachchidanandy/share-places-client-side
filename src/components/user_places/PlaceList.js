import React from'react';

import Card from '../common/Card';
import PlaceItem from './PlaceItem';
import Button from '../common/form_elements/Button'
import './place_list.css';

const PlaceList= ({ items }) => {
  if (items.length === 0) {
    return (
      <div className='place-list center'>
        <Card style={{padding: "8px"}}>
          <h2> No Places found. Maybe create one ?</h2>
          <Button to='/places/new'>Share Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className='place-list'>
      {items.map(({ id, imageUrl, title, description, address, creator, location }) => <PlaceItem
        key={id}
        id={id}
        image={imageUrl}
        title={title}
        description={description}
        address={address}
        creatorId={creator}
        coordinates={location} />
      )}
    </ul>
  );
};

export default PlaceList;
