import { StyledList, StyledTitle } from './UsersList.styles';
import { useParams } from 'react-router-dom';
import { useStudents } from '../../../hooks/useStudents';
import { useEffect, useState } from 'react';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';

const UsersList = ({ users = [], handleOpenStudentDetails }) => {
  const { id } = useParams();
  const [students, setStudents] = useState([]);
  const { getStudentsByGroup } = useStudents();

  useEffect(() => {
    (async () => {
      const student = await getStudentsByGroup(id);
      setStudents(student);
    })();
  }, [getStudentsByGroup, id]);

  return (
    <>
      <StyledTitle>Students list</StyledTitle>
      <StyledList>
        {students.map((userData) => (
          <UsersListItem onClick={() => handleOpenStudentDetails(userData.id)} key={userData.id} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
