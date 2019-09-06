import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DetailContext, transitions } from '../../utils';
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
    <motion.div initial="exit" animate="enter" exit="exit">
      <motion.div variants={transitions.enterFromRight}>
        <Link to="/">
          <p className="detail__back">← Back</p>
        </Link>
      </motion.div>

      <motion.div variants={transitions.enterFromBottom}>{renderResourceDetail()}</motion.div>
    </motion.div>
  );
};

export default Detail;
