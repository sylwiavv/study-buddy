import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.styles';
import { StyledList } from './UsersList.styles';

const UsersList = () => (
  <Wrapper>
    <StyledList>
      {users.map((userData, i) => (
        // <UsersListItem name={name}, average={average} etc. />
        <UsersListItem index={i} key={userData.name} userData={userData} />
      ))}
    </StyledList>
  </Wrapper>
);

export default UsersList;
