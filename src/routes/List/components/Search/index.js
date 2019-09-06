import React from 'react';
import search from '../../../../assets/search.svg';
import './styles.css';

const Search = ({ onInputChange, value }) => (
  <div className="search">
    <div className="search__wrapper">
      <img className="search__img" src={search} alt="" />
      <input type="text" placeholder="Search" className="search__input" value={value} onChange={onInputChange} />
    </div>
  </div>
);

export default Search;
