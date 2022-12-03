import React from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { useStudents } from '../hooks/useStudents';
import { Title } from '../components/atoms/Title/Title';

const Dashboard = () => {
  // const { id } = useParams();
  const { groups } = useStudents();
  let navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/group/${groups[0]}`);
  };

  let params = useParams();
  // (!id )?  groups[0] : 'elo'
  console.log(params.id === "A")
  if (!params.id && groups.length > 0) <Navigate to={`/group/${groups[0]}`} />;

  return (
    <ViewWrapper>
      {/*<Title>Group {id}</Title>*/}
      <button onClick={handleNavigation}>clcik</button>
      <nav>
        {groups.map((group) => (
          <Link key={group} to={`/group/${group}`}>
            {group}
            {console.log('hello ' + group)}
          </Link>
        ))}
      </nav>
      <UsersList />
    </ViewWrapper>
  );
};

export default Dashboard;
