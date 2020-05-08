import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spiner = () => (
  <Fragment>
    <img src={spinner} alt="loading..." style={imgStyles} />
  </Fragment>
);

const imgStyles = {
  width: '200px',
  margin: 'auto',
  display: 'block',
};

export default Spiner;
