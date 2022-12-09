import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import { Wrapper } from './Root.styles';
import Dashboard from 'views/Dashboard';
import Modal from '../components/organisms/Modal/Modal';
import { Button } from '../components/atoms/Button/Button';

const Root = () => {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle isModalOpen={isModalOpen} />
        <MainTemplate>
          {isModalOpen ? <Modal isOpen={isModalOpen} handleClose={() => setModalState(false)} /> : null}
          <Wrapper>
            <Button onClick={() => setModalState(true)}>Open Modal</Button>
            <Routes>
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
