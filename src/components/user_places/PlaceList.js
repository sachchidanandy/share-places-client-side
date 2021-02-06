import React from'react';

import Card from '../common/Card';
import './place_list.css';
import PlaceItem from './PlaceItem';

const PlaceList= ({ items }) => {
  if (items.length === 0) {
    return (
      <div className='place-list center'>
        <Card>
          <h2> No Places found. Maybe create one ?</h2>
          <butto>Share Place</butto>
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
