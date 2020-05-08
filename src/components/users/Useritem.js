import React from 'react';
import PropTypes from 'prop-types';

const Useritem = (props) => {
  const { login, avatar_url, html_url } = props.user;

  return (
    <div className="card text-center">
      <img src={avatar_url} className="round-img" alt="" style={{ width: '60px' }} />
      <h3>{login}</h3>
      <a href={html_url} className="btn btn-dark btn-sm my-1">
        More
      </a>
    </div>
  );
};

Useritem.prototype = {
  user: PropTypes.object.isRequired,
};

export default Useritem;
