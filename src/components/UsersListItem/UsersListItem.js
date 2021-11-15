import React from 'react';
import PropTypes from 'prop-types';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => (
  <li>
    <div>{attendance}</div>
    <div>
      <p>{name}</p>
      <p>{average}</p>
    </div>
    <button>x</button>
  </li>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
