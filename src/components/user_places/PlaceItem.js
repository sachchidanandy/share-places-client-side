import React, { useState } from'react';

import Card from '../common/Card';
import Button from '../common/form_elements/Button';
import Modal from '../common/Modal';
import Map from '../common/Map';
import './place_item.css';
import { Fragment } from 'react';

const PlaceItem = ({ id, image, title, address, description, creatorId, coordinates }) => {

  const [ showMap, setShowMap ] = useState(false);
  const [ showDeleteConfirm, setDeleteConfirm ] = useState(false);
  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  const handleDeletePlace = event => {
    console.log("Deleting...");
    setDeleteConfirm(false);
  }

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={address}
        contentClass='place-item__modal-content'
        footerClass='place-item__modal-actions'
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className='map-container'>
          <Map coordinates={coordinates} zoom={16}/>
        </div>
      </Modal>
      <Modal
        show={showDeleteConfirm}
        onCancel={() => setDeleteConfirm(false)}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <Fragment>
            <Button inverse onClick={() => setDeleteConfirm(false)}>CANCEL</Button>
            <Button danger onClick={handleDeletePlace}>DELETE</Button>
          </Fragment>
        }>
        <p>
          Do you want to proceed and delete this place ?
          Please, note that it can't be undone thereafter
         </p>
      </Modal>
      <li className='place-item'>
        <Card className='place-item__content'>
          <div className='place-item__image'>
            <img src={image} alt={title}/>
          </div>
          <div className='place-item__info'>
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className='place-item__actions'>
            <Button inverse onClick={openMapHandler}>View on map</Button>
            <Button to={`/places/${id}`}>Edit</Button>
            <Button danger onClick={() => setDeleteConfirm(true)}>Delete</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
