import React from 'react';
import PropTypes from 'prop-types';

const UsersListItem = ({ userData: { average, name, attendance } }) => (
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
    average: PropTypes.string,
    name: PropTypes.string,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
