import React from 'react';
import './friendInfo.scss';

import { useParams } from 'react-router-dom';

const FriendInfo = () => {
  const { id } = useParams();
  return (
    <div className="friend_info" onClick={() => (window.location = '/')}>
      Detalles de amigo {id}
    </div>
  );
};

export default FriendInfo;
