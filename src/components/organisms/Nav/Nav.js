import React from 'react';
import { Logo, StyledLink, Wrapper } from 'components/organisms/Nav/Nav.styles';
import { useStudents } from '../../../hooks/useStudents';

const Navigation = () => {
  const { groups } = useStudents();

  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink to={`/group/${groups[0]}`}>Dashboard</StyledLink>
      <StyledLink to="/add-user">Add user</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
