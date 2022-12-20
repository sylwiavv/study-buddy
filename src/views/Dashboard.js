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
  const [currentStudent, setCurrentStudent] = useState(null);
  const { getGroups, getStudentById } = useStudents();
  const { id } = useParams();
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  // useEffect(() => {
  //   // declare the data fetching function
  //   const fetchData = async () => {
  //     const data = await getGroups();
  //     return data;
  //   };
  //
  //   // call the function
  //   fetchData()
  //     // make sure to catch any error
  //     .then((data) => setGroups(data))
  //     .catch(console.error);
  // }, [getGroups]);

  const handleOpenStudentDetails = async (id) => {
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
        {groups.map(({ id }) => (
          <Link key={id} to={`/group/${id}`}>
            {id}
          </Link>
        ))}
      </nav>
      <UsersList handleOpenStudentDetails={handleOpenStudentDetails} />
      <Modal handleClose={handleCloseModal} isOpen={isModalOpen} styles={bg}>
        <StudentDetails student={currentStudent} />
      </Modal>
    </ViewWrapper>
  );
};

export default Dashboard;
