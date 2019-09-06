import React from 'react';

const Unit = ({ unit }) => (
  <React.Fragment>
    <h4 className="unit___description">Description</h4>
    <p>{unit.description}</p>
  </React.Fragment>
);

export default Unit;
