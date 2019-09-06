import React from 'react';
import checkImg from '../../../../assets/check-circle.svg';
import './styles.css';

const StructureDetail = ({ structure }) => (
  <React.Fragment>
    <h4 className="structure__special">Special</h4>
    <ul>
      {structure.special.map(special => (
        <li key={special} className="structure__special-item">
          <img src={checkImg} className="structure__special-img" alt="" />
          {special}
        </li>
      ))}
    </ul>
  </React.Fragment>
);

export default StructureDetail;
