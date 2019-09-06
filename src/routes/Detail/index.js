import React from 'react';
import { Link } from 'react-router-dom';
import { DetailContext } from '../../utils';
import Resource from './components/Resource';
import './styles.css';

class Detail extends React.Component {
  componentDidMount() {
    const { detail } = this.context;

    if (!detail) {
      return;
    }
  }

  render() {
    const { detail } = this.context;

    if (!detail) {
      return <Link to="/">← Back</Link>;
    }

    return (
      <React.Fragment>
        <Link to="/">
          <p className="detail__back">← Back</p>
        </Link>
        <Resource detail={detail} />
      </React.Fragment>
    );
  }
}

Detail.contextType = DetailContext;

export default Detail;
