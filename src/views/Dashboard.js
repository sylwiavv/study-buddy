import React, { useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import { UsersContext } from 'providers/UsersProvider';

const Dashboard = () => {
  const { users } = useContext(UsersContext);

  return (
    <UsersContext.Consumer>
      {(ctx) => (
        <ViewWrapper>
          <UsersList users={users} />
        </ViewWrapper>
      )}
    </UsersContext.Consumer>
  );
};

export default Dashboard;
