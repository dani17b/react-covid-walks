import React from 'react';
import './usersList.scss';

const UsersList = props => {
  const { users } = props;

  return (
    <div className="users">
      {users.map((user, i) => (
        <div className="user" key={i}>
          <img
            src={user.image}
            className={'image' + (user.status == 'online' ? ' active' : '')}
          />
          <span className="name">{user.name}</span>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
