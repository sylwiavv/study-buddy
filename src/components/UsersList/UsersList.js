import React from 'react';
import { users } from 'data/users';

const UsersList = () => (
  <div>
    <ul>
      {users.map(({ name, average, attendance }) => (
        <li>
          <div>{attendance}</div>
          <div>
            <p>{name}</p>
            <p>{average}</p>
          </div>
          <button>x</button>
        </li>
      ))}
    </ul>
  </div>
);

export default UsersList;
