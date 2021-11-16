import styled from 'styled-components';

export const StyledButton = styled.button`
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
