import React from "react";
import search from "../../../../assets/search.svg";
import "./styles.css";

const Search = ({ onInputChange, value }) => (
  <div className="search">
    <img src={search} alt="" />
    <input
      type="text"
      placeholder="Search by name"
      value={value}
      onChange={onInputChange}
    />
  </div>
);

export default Search;
