import React from 'react';
import './friend.scss';

const Friend = props => {
  const { user } = props;

  return (
    <div className="user" key={i}>
      <img
        src={user.image}
        className={'image' + (user.status == 'online' ? ' active' : '')}
      />
      <span className="name">{user.name}</span>
    </div>
  );
};

export default Friend;
