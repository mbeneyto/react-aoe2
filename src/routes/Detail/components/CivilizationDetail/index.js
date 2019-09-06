import React from 'react';
import checkImg from '../../../../assets/check-circle.svg';
import './styles.css';

const CivilizationsDetail = ({ civilization }) => (
  <React.Fragment>
    <h4 className="civilization__bonus">Bonus</h4>
    <ul>
      {civilization.civilization_bonus.map(bonus => (
        <li key={bonus} className="civilization__bonus-item">
          <img src={checkImg} className="civilization__bonus-img" alt="" />
          {bonus}
        </li>
      ))}
    </ul>
  </React.Fragment>
);

export default CivilizationsDetail;
