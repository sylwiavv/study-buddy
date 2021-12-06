import React, { useContext } from 'react';
import { Wrapper, AverageButtonStyles, StyledInfo } from './UsersListItem.styles';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import { UsersContext } from '../../../providers/UsersProvider';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext);
  return (
    <Wrapper>
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
