import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, AverageButtonStyles, StyledInfo } from './UsersListItem.styles';
import Button from 'components/atoms/Button/Button';

const ShowIndex = (index) => {
  alert(`To jest student #${index + 1}`);
};

const UsersListItem = ({ index, userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <AverageButtonStyles value={average}>{average}</AverageButtonStyles>
    <StyledInfo>
      <p className="name">{name}</p>
      <p className="attendance">attendance: {attendance}</p>
    </StyledInfo>
    <Button onMouseEnter={() => ShowIndex(index)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
