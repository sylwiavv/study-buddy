import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, AverageButtonStyles, StyledInfo } from './UsersListItem.styles';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import { UserShape } from '../../../types';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => (
  <>
    <Wrapper>
      <AverageButtonStyles value={average}>{average}</AverageButtonStyles>
      <StyledInfo>
        <p className="name">{name}</p>
        <p className="attendance">attendance: {attendance}</p>
      </StyledInfo>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  </>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
