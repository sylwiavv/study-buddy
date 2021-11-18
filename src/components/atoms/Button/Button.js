import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyledButton } from './Button.styles';

const Button = (props) => (
  <StyledButton {...props}>
    {/*<StyledButton isSecondary>x</StyledButton>*/}
    <DeleteIcon />
  </StyledButton>
);

export default Button;

// background-color: ${({ isSecondary }) => isSecondary ? '#e7e044' : '#c0c7d6'};
// background-color: ${(props) => (props.isSecondary ? '#e7e044' : '#c0c7d6')};
