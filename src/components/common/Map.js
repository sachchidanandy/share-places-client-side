import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import './map.css';

mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_TOKEN_PUB;

const Map = props => {

  const { coordinates, zoom } = props;

  const mapContainerRef = useRef();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [coordinates.lng, coordinates.lat],
      zoom
    });
    new mapboxgl.Marker()
    .setLngLat([coordinates.lng, coordinates.lat])
    .addTo(map);
  }, [coordinates, zoom]);
  

  return <div
    className={`map ${props.className}`}
    style={props.style}
    ref={mapContainerRef}
  ></div>
};

export default Map;