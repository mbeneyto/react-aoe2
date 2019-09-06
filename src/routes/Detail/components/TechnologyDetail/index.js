import React from 'react';

const TechnologyDetail = ({ technology }) => (
  <React.Fragment>
    <h4 className="technology__description">Description</h4>
    <p>{technology.description}</p>
  </React.Fragment>
);

export default TechnologyDetail;
