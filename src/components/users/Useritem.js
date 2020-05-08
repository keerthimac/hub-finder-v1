import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Useritem = (props) => {
  const { login, avatar_url } = props.user;

  return (
    <div className="card text-center">
      <img src={avatar_url} className="round-img" alt="" style={{ width: '60px' }} />
      <h3>{login}</h3>
      <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
        More
      </Link>
    </div>
  );
};

Useritem.prototype = {
  user: PropTypes.object.isRequired,
};

export default Useritem;
