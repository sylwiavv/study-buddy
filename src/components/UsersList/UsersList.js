import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/UsersListItem/UsersListItem';

const UsersList = () => (
  <div>
    <ul>
      {users.map((userData) => (
        // <UsersListItem name={name}, average={average} etc. />
        <UsersListItem userData={userData} />
      ))}
    </ul>
  </div>
);

export default UsersList;
