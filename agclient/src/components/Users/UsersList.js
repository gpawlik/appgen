import React from 'react';
import { Link } from 'react-router';

import translate from 'utils/translate';

const UsersList = ({ users, deleteUser }) => {
  return (
    <div className="UsersListArea">
      <h3>{translate('users.list.title')}</h3>
      <ul className="UsersList">
        {users.map((user, idx) => {
          return (
            <li key={idx}>
              <Link to={'/user/' + user._id}>
                <span className="thumbnail-small"></span>
                <span className="user-item-title">{user.username}</span>
              </Link>
              <span onClick={() => deleteUser(user._id) } className="delete-icon">x</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersList;
