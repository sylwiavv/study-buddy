import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle } from './UsersList.styles';
import { useParams } from 'react-router-dom';
import { useStudents } from '../../../hooks/useStudents';
import { useEffect, useState } from 'react';

const UsersList = ({ users = [] }) => {
  const { id } = useParams();
  const [students, setStudents] = useState([]);
  const { getStudents } = useStudents();

  useEffect(() => {
    (async () => {
      const student = await getStudents(id);
      setStudents(student);
    })();
  }, [getStudents, id]);

  return (
    <>
      <StyledTitle>Students list</StyledTitle>
      <StyledList>
        {students.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
