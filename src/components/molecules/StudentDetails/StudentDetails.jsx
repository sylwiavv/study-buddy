import React from 'react';
import { Title } from '../../atoms/Title/Title';
import { StudentDetailsWrapper } from './StudentDetails.styles';

const StudentDetails = ({ student: { name, group, attendance, average } }) => {
  return (
    <StudentDetailsWrapper>
      <Title>
        {name} | Group {group}
      </Title>
      <p>attendance: {attendance}</p>
      <p>average: {average}</p>
    </StudentDetailsWrapper>
  );
};

export default StudentDetails;
