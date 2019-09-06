import React from 'react';
import { Button } from '../../../../components/index';
import './styles.scss';

const resources = ['civilizations', 'units', 'structures', 'technologies'];

const Resources = ({ active, onChangeResource }) => {
  const handleOnChangeResource = resource => () => {
    onChangeResource(resource);
  };

  return (
    <ul className="resources">
      {resources.map(resource => (
        <li key={resource} className="resources__item">
          <Button full primary active={resource === active} onClick={handleOnChangeResource(resource)}>
            {resource}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Resources;
