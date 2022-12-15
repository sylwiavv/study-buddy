import React, { useContext } from 'react';
import { AverageButtonStyles, StyledInfo, Wrapper } from './UsersListItem.styles';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import { UsersContext } from '../../../providers/UsersProvider';
import PropTypes from 'prop-types';
import { UserShape } from '../../../types';

const UsersListItem = ({ userData: { average, name, attendance = '0%' }, ...props }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper {...props}>
      <AverageButtonStyles value={average}>{average}</AverageButtonStyles>
      <StyledInfo>
        <p className="name">{name}</p>
        <p className="attendance">attendance: {attendance}</p>
      </StyledInfo>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

export default UsersListItem;

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};
