import React, { useState } from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import Form from 'components/organisms/Form/Form';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { users as usersData } from '../data/users';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100vw;
`;

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
const [users, setUsers] = useState(usersData);
const [formValues, setFormValues] = useState(initialFormState);
const deleteUser = (name) => {
  const filteredUsers = users.filter((user) => user.name !== name);
  setUsers(filteredUsers);
};
  const handleInputOnChange = (e) => {
    console.log(formValues);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };
    setUsers([newUser, ...users]);
    setFormValues(initialFormState);
    console.log(newUser);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add-user">Add user</Link>
          </nav>
          <Routes>
            <Route path="/add-user" element={<Form formValues={formValues} handleAddUser={handleAddUser} handleInputOnChange={handleInputOnChange}/>} />
            <Route path="/" element={<UsersList users={users} deleteUser={deleteUser} />} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
