import React from 'react';
import { ReactComponent as CheckSVG } from '../../../../assets/check-circle.svg';
import './styles.css';

const StructureDetail = ({ structure }) => (
  <React.Fragment>
    <h4 className="structure__special">Special</h4>
    <ul>
      {structure.special.map(special => (
        <li key={special} className="structure__special-item">
          <CheckSVG className="structure__special-img" />
          {special}
        </li>
      ))}
    </ul>
  </React.Fragment>
);

export default StructureDetail;
