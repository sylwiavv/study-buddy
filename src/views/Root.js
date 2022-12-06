import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import { Wrapper } from './Root.styles';
import AddUser from 'views/AddUser';
import Dashboard from 'views/Dashboard';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Routes>
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/group">
                <Route index element={<Navigate to=":id" />} />
                <Route exact path="/group/:id" element={<Dashboard />} />
              </Route>
              <Route path="/" element={<Navigate to="/group" />} />
              {/*//TODO change home link for gh-pages*/}
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
