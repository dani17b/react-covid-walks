import React from 'react';
import './activeWalkDetail.scss';

const ActiveWalkDetail = () => {
  return (
    <div className="active_walk">
      <div className="header">Paseo en curso</div>
      <div className="info">- Tiempo - Distancia - Boton de pausa</div>
    </div>
  );
};

export default ActiveWalkDetail;
