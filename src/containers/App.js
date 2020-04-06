import Container from '@material-ui/core/Container';
import React from 'react';
import { Router } from 'react-router-dom';
import Routes from '../components/Routes';
import history from '../history';

const App = () => (
  <Container maxWidth="lg">
    <Router history={history}>
      <Routes />
    </Router>
  </Container>
);

export default App;
