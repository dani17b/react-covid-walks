import React from 'react';
import './walkInfo.scss';

import { useParams } from 'react-router-dom';
import Carrusel from '../../components/carrusel/Carrusel';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const WalkInfo = () => {
  const { id } = useParams();
  var x = 42.1;
  var y = -8.1;
  const position = [x, y];

  return (
    <div className="walk_info" onClick={() => (window.location = '/')}>
      <Carrusel />
      <Map center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Detalles de paseo {id}
            <br />
            Aqui podemos poner info del paseo
          </Popup>
        </Marker>
      </Map>
    </div>
  );
};

export default WalkInfo;
