import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header';
import Main from '../Main';
import List from '../../routes/List';
import Detail from '../../routes/Detail';
import './styles.scss';

const App = () => (
  <Router>
    <Header />
    <Main>
      <Route exact path="/" component={List}></Route>
      <Route exact path="/detail/:id" component={Detail}></Route>
    </Main>
  </Router>
);

export default App;
