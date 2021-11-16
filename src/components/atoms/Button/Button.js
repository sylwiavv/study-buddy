import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';

const StyledButton = styled.button`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50px;
  border: none;
  background-color: ${({ theme }) => theme.colors.grey};
  color: #fff;
  svg {
    height: 100%;
    width: 100%;
    &:hover {
      stroke: #61dafb;
      cursor: pointer;
    }
  }
`;

const Button = () => (
  <StyledButton>
    {/*<StyledButton isSecondary>x</StyledButton>*/}
    <DeleteIcon />
  </StyledButton>
);

export default Button;

// background-color: ${({ isSecondary }) => isSecondary ? '#e7e044' : '#c0c7d6'};
// background-color: ${(props) => (props.isSecondary ? '#e7e044' : '#c0c7d6')};
