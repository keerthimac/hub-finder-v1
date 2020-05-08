import React from 'react';
import Useritem from './Useritem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loading, searchUser }) => {
  // console.log(searchUser);
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid-3">
        {users.map((user) => (
          <Useritem key={user.id} user={user} searchUser={searchUser} />
        ))}
      </div>
    );
  }
};

// const userStyle = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(3,1fr)',
//   gridGap: '1rem',
// };

Users.prototype = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
