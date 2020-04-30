import React from 'react';
import './walkInfo.scss';

import { useParams } from 'react-router-dom';

const WalkInfo = () => {
  const { id } = useParams();

  return (
    <div className="walk_info" onClick={() => (window.location = '/')}>
      Detalles de paseo {id}
    </div>
  );
};

export default WalkInfo;
