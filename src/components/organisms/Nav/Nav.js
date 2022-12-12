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
    </Wrapper>
  );
};

export default Navigation;
