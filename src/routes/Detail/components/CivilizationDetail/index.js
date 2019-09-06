import React from 'react';
import { ReactComponent as CheckSVG } from '../../../../assets/check-circle.svg';

const CivilizationsDetail = ({ civilization }) => (
  <React.Fragment>
    <h4 className="civilization__bonus">Bonus</h4>
    {civilization.civilization_bonus ? (
      <ul>
        {civilization.civilization_bonus.map(bonus => (
          <li key={bonus} className="civilization__bonus-item">
            <CheckSVG className="civilization__bonus-img" />
            {bonus}
          </li>
        ))}
      </ul>
    ) : (
      <p>This civilization has not bonus :(</p>
    )}
  </React.Fragment>
);

export default CivilizationsDetail;
