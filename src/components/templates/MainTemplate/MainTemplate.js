import React from 'react';
import Navigation from 'components/organisms/Nav/Nav';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';
import SearchBar from '../../organisms/SearchBar/SearchBar';
import NewsSection from '../News/NewsSection';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  );
};

export default MainTemplate;
