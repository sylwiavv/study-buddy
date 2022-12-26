import React from 'react';
import { Logo, StyledLink, Wrapper } from 'components/organisms/Nav/Nav.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink to={`/group`}>Dashboard</StyledLink>
      <StyledLink as="a" onClick={() => localStorage.removeItem('token')}>
        Log uot
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;
