import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DetailContext } from '../../utils';
import Resource from './components/Resource';

const Detail = () => {
  const { detail } = useContext(DetailContext);

  const renderResourceDetail = () => {
    if (!detail) {
      return <p>Go back to the list to retrieve resource information</p>;
    }

    return <Resource detail={detail} />;
  };

  return (
    <React.Fragment>
      <Link to="/">
        <p className="detail__back">← Back</p>
      </Link>
      {renderResourceDetail()}
    </React.Fragment>
  );
};

export default Detail;
