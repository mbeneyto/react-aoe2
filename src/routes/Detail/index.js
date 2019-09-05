import React from "react";
import { Link } from "react-router-dom";
import { DetailContext } from "../../utils";
import "./styles.css";

const Detail = () => {
  return (
    <DetailContext.Consumer>
      {({ selected }) => (
        <h1>
          {selected.name} <Link to="/">Back</Link>
        </h1>
      )}
    </DetailContext.Consumer>
  );
};
export default Detail;
