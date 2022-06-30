import styled from 'styled-components';
import { ViewWrapper } from '../../molecules/ViewWrapper/ViewWrapper';

export const Wrapper = styled.div`
  grid-row: span 2;
  grid-column: 3 / 3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 40px;
  overflow-y: scroll;
`;

export const NewSectionHeader = styled.h3`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-right: auto;
`;

export const ArticleWrapper = styled(ViewWrapper)`
  margin: 30px 0;
  width: 100%;
  max-width: unset;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};
  p {
    line-height: 1.6;
  }
`;

export const TitleWrapper = styled.div`
  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;

  img {
    max-width: 200px;
    max-height: 250px;
    object-fit: cover;
    margin-left: 32px;
  }
`;
