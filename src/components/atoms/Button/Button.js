import styled from 'styled-components';

export const Button = styled.button`
  margin: 16px 0;
  padding: ${({ isBig }) => (isBig ? '10px 38px' : '8px 20px')};
  font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.m : fontSize.s)};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 24px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
