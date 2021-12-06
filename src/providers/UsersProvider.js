import React, { useState } from 'react';
import { users as usersData } from '../data/users';

export const UsersContext = React.createContext({
  deleteUser: () => {},
  handleAddUser: () => {},
  users: [],
});

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (value) => {
    const newUser = {
      name: value.name,
      attendance: value.attendance,
      average: value.average,
    };
    setUsers([newUser, ...users]);
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        handleAddUser,
        deleteUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UserProvider;
