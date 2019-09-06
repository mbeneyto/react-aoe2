import React from 'react';
import loader from '../../assets/loader.svg';
import './styles.scss';

const Loader = () => (
  <div className="loader">
    <img src={loader} className="loader__img" alt="" />
  </div>
);

export default Loader;
