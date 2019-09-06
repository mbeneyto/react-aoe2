import React from 'react';
import logo from '../../assets/logo.png';
import './styles.scss';

const Header = () => (
  <header className="header">
    <img src={logo} className="header__logo" alt="logo" />
  </header>
);

export default Header;
