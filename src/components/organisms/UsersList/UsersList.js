import React, { useState } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.styles';
import { StyledList, StyledTitle } from './UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

const UsersList = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState({
    name: '',
    attendance: '',
    average: '',
  });

  // const [name, setName] = React.useState('');

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputOnChange = (e) => {
    // console.log(formValues);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    // const newList = formValues.concat({ name });
    //
    // setUsers(newList);
  };

  return (
    <>
      <Wrapper as="form">
        <StyledTitle>Add new Student</StyledTitle>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputOnChange} />
        <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance}
                   onChange={handleInputOnChange} />
        <FormField label="Average" id="average" name="average" value={formValues.average}
                   onChange={handleInputOnChange} />
        <Button type="submit" onClick={handleAddUser}>Add</Button>
      </Wrapper>
      <Wrapper>
        <StyledTitle>Students list</StyledTitle>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;
