import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import { Wrapper } from './Root.styles';
import Dashboard from 'views/Dashboard';
import FormField from '../components/molecules/FormField/FormField';
import { Button } from '../components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const UnauthenticatedApp = ({ handleSignIn, error }) => {
  const { register, handleSubmit } = useForm();
  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
      onSubmit={handleSubmit(handleSignIn)}
    >
      <FormField name="login" label="login" id="login" {...register('login', { required: true })} />
      <FormField name="password" label="password" id="password" {...register('password')} />
      {error && <span>{error}</span>}
      {console.log(error)}
      <Button type="submit">Submit</Button>
    </form>
  );
};
const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
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
  );
};
const Root = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      (async () => {
        try {
          const response = await axios.get('/me', {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, []);

  const handleSignIn = async ({ login, password }) => {
    try {
      const response = await axios.post('/login', {
        login,
        password,
      });
      setUser(response.data);
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      console.log(e);
      setError('You are not in database');
    }
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp error={error} handleSignIn={handleSignIn} />}
      </ThemeProvider>
    </Router>
  );
};

export default Root;
