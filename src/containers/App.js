import React from 'react';
import { Router } from 'react-router-dom';
import Routes from '../components/Routes';
import history from '../history';

const App = () => (
  <Router history={history}>
    <Routes />
  </Router>
);

export default App;
