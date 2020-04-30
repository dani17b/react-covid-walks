import React from 'react';
import './walkInfo.scss';

import { useParams } from 'react-router-dom';
import Carrusel from '../../components/carrusel/Carrusel';

const WalkInfo = () => {
  const { id } = useParams();

  return (
    <div className="walk_info" onClick={() => (window.location = '/')}>
      Detalles de paseo {id}
      <Carrusel />
    </div>
  );
};

export default WalkInfo;
