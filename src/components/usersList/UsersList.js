import React from 'react';
import './usersList.scss';

const UsersList = props => {
  const { users, onClickUser } = props;

  return (
    <div className="users">
      {users.map((user, i) => (
        <div className="user" key={i} onClick={() => onClickUser(user)}>
          <img
            src={user.image}
            className={'image' + (user.status === 'online' ? ' active' : '')}
            alt="Foto del usuario"
          />
          <span className="name">{user.name}</span>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
