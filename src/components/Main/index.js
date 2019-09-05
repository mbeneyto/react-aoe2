import React from "react";
import { DetailContext } from "../../utils";
import "./styles.css";

class Main extends React.Component {
  state = {
    selected: {}
  };

  handleOnSelectDetail = selected => {
    this.setState({ selected });
  };

  render() {
    const { children } = this.props;
    const { selected } = this.state;

    return (
      <main className="main">
        <DetailContext.Provider
          value={{ selected, onSelectDetail: this.handleOnSelectDetail }}
        >
          {children}
        </DetailContext.Provider>
      </main>
    );
  }
}

export default Main;
