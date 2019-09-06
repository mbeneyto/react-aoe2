import React from 'react';
import { DetailContext } from '../../utils';
import './styles.css';

class Main extends React.Component {
  state = {
    detail: null
  };

  handleOnSelectDetail = detail => {
    this.setState({ detail });
  };

  render() {
    const { children } = this.props;
    const { detail } = this.state;

    return (
      <main className="main">
        <DetailContext.Provider value={{ detail, onSelectDetail: this.handleOnSelectDetail }}>
          {children}
        </DetailContext.Provider>
      </main>
    );
  }
}

export default Main;
