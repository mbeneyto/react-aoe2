import React from "react";
import { Link } from "react-router-dom";

const Detail = ({ match }) => (
  <h1>
    {match.params.id} <Link to="/">Back</Link>
  </h1>
);

export default Detail;
