import styled from 'styled-components';
import { Input } from '../../atoms/Input/Input.styles';

export const SearchBarWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2/ 3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 32px;

  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.xl};
    width: 100%;
    max-width: 350px;
    border: 2px solid ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 32px;
  p {
    margin: 5px;
  }
`;
