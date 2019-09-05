import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../Header";
import Main from "../Main";
import List from "../../routes/List";
import Detail from "../../routes/Detail";

const App = () => {
  const handleOnDetail = (item, resource) => {};

  return (
    <Router>
      <Header />
      <Main>
        <Route
          exact
          path="/"
          render={props => <List {...props} onDetail={handleOnDetail} />}
        ></Route>
        <Route exact path="/detail/:id" component={Detail}></Route>
      </Main>
    </Router>
  );
};

export default App;
