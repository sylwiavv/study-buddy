import React from 'react';
import { Wrapper, StyledTitle } from 'components/organisms/UsersList/UsersList.styles.js';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

const Form = ({ handleAddUser, formValues, handleInputOnChange }) => {
  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add new Student</StyledTitle>
        <FormField label="Name" id="name" name="name" value={formValues.name}
                     onChange={handleInputOnChange} />
        <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance}
                     onChange={handleInputOnChange} />
        <FormField label="Average" id="average" name="average" value={formValues.average}
                     onChange={handleInputOnChange} />
        <Button type="submit" onClick={handleAddUser}>Add</Button>
      </Wrapper>
    </>
  );
};

export default Form;
