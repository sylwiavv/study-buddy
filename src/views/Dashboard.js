import React, { useEffect, useState } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import { Link, useParams } from 'react-router-dom';
import { useStudents } from '../hooks/useStudents';
import { Title } from '../components/atoms/Title/Title';
import useModal from '../components/organisms/Modal/useModal';
import StudentDetails from '../components/molecules/StudentDetails/StudentDetails';
import Modal from '../components/organisms/Modal/Modal';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const { getGroups } = useStudents();
  let { id } = useParams();
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  const [currentStudent, setCurrentStudent] = useState([]);
  const { getStudentById } = useStudents();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  const handleOpenStudentsDetails = async (id) => {
    const student = await getStudentById(id);
    setCurrentStudent(student);
    handleOpenModal();
  };

  const bg = {
    overlay: {
      background: '#FFFF00',
    },
  };

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
      <UsersList handleOpenStudentsDetails={handleOpenStudentsDetails} />
      <Modal handleClose={handleCloseModal} isOpen={isModalOpen} styles={bg}>
        <StudentDetails student={currentStudent} />
      </Modal>
    </ViewWrapper>
  );
};

export default Dashboard;
