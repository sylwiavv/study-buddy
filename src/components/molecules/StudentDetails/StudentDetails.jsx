import React from 'react';
import { Title } from '../../atoms/Title/Title';
import { BigAverage, StyledDetails, StyledInfo, StyledLabel, StyledSubjectInfo, Wrapper } from './StudentDetails.styles';
import { Average } from '../../atoms/Average/Average';

const StudentDetails = ({ student: { name, group, attendance, average, grades, course } }) => {
  return (
    <Wrapper>
      <BigAverage value={average}>{average}</BigAverage>
      <Title isBig>{name}</Title>
      <StyledDetails>
        <StyledLabel>Course:</StyledLabel>
        <StyledInfo isBig>{course}</StyledInfo>
        <StyledLabel>Average grades:</StyledLabel>
        {grades.map(({ subject, average }) => (
          <StyledSubjectInfo key={subject}>
            <StyledInfo>{subject}</StyledInfo>
            <Average value={average}>{average}</Average>
          </StyledSubjectInfo>
        ))}
      </StyledDetails>
    </Wrapper>
  );
};

export default StudentDetails;
