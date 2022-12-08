import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  color: ${({ theme }) => theme.colors.darkGrey};

  &:not(:last-child):after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const AverageButtonStyles = styled.button`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  border: none;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  width: 34px;
  height: 34px;
  background: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 1) return theme.colors.error;
    return theme.colors.grey;
  }};
`;

export const StyledInfo = styled.div`
  padding: 25px 20px;
  p {
    margin: 0;
  }
  .name {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
  }
  .attendance {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
