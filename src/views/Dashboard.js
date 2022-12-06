import React from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import { useParams, Link } from 'react-router-dom';
import { useStudents } from '../hooks/useStudents';
import { Title } from '../components/atoms/Title/Title';

const Dashboard = () => {
  const { groups } = useStudents();
  let { id } = useParams();

  return (
    <ViewWrapper>
      <Title>Group {id}</Title>
      <nav>
        {groups.map((group) => (
          <Link key={group} to={`/group/${group}`}>
            {group}
          </Link>
        ))}
      </nav>
      <UsersList />
    </ViewWrapper>
  );
};

export default Dashboard;
