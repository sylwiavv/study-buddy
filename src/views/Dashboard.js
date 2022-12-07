import React, {useEffect, useState} from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import { useParams, Link } from 'react-router-dom';
import { useStudents } from '../hooks/useStudents';
import { Title } from '../components/atoms/Title/Title';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const { getGroups } = useStudents();
  let { id } = useParams();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

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
