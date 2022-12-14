import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle } from './UsersList.styles';
import { useParams } from 'react-router-dom';
import { useStudents } from '../../../hooks/useStudents';
import { useEffect, useState } from 'react';

const UsersList = ({ users = [], handleOpenStudentsDetails }) => {
  const { id } = useParams();
  const [students, setStudents] = useState([]);
  const { getStudentsByGroup } = useStudents();

  console.log(students);
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
          <UsersListItem onClick={() => handleOpenStudentsDetails(userData.id)} key={userData.id} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
