import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Label } from 'components/atoms/Label/Label.styles';
import { Input } from 'components/atoms/Input/Input.styles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  ${Label} {
    margin-bottom: 4px;
  }

  ${Input} {
    margin-bottom: 24px;
  }
`;

const FormField = ({ onChange, label, name, id, value, type = 'text', ...props }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} value={value} onChange={onChange} data-testid={label} />
    </Wrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
